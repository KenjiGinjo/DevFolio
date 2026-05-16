# DevFolio 服务器说明（Nginx + Node 构建）

生产环境：**系统自带的 Nginx** 提供静态文件；**Node（npm/pnpm）只在构建时使用**，把 `dist/` 同步到服务器即可。不再使用 Docker。

---

## 架构

| 组件 | 作用 |
|------|------|
| Nginx（apt 安装） | 监听 80/443，托管 `/var/www/devfolio/dist` |
| Node | 仅在构建机或服务器上的源码目录执行 `npm run build` / `pnpm build` |
| Certbot | Let's Encrypt 证书（可与 `nginx` 插件或 `webroot` 配合） |

---

## 一次性：先卸 Docker，再装 Nginx（推荐顺序）

在服务器上**整段按顺序执行**。会删除本机所有容器、镜像、卷（不可恢复），确认后再做。

### A. 停容器并卸掉 Docker（官方 `docker-ce` 与 Ubuntu `docker.io` 一起尝试卸载）

```bash
# 1) 能停则停（无 Docker 会报错，可忽略）
cd /var/www/devfolio 2>/dev/null && docker compose down 2>/dev/null || true
docker stop $(docker ps -q) 2>/dev/null || true

# 2) 卸包（两条都执行，覆盖常见安装方式）
sudo apt-get update
sudo apt-get purge -y \
  docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin \
  docker-ce-rootless-extras docker-scan-plugin docker-model-plugin \
  docker.io docker-doc docker-compose docker-compose-v2 podman-docker 2>/dev/null
# 注意：autoremove 可能顺带卸掉「不再被依赖」的包（例如曾作为依赖装上的 git）。
# 若还需要 git，卸完后执行：sudo apt-get install -y git
sudo apt-get autoremove -y --purge

# 3) 删数据目录（释放磁盘；会清空原镜像与卷）
sudo rm -rf /var/lib/docker /var/lib/containerd

# 4) 删掉 Docker 的 apt 源（若存在，避免以后 apt update 还去连 Docker 仓库）
sudo rm -f /etc/apt/sources.list.d/docker.list /etc/apt/sources.list.d/docker-ce.list
sudo rm -f /etc/apt/keyrings/docker.gpg /usr/share/keyrings/docker-archive-keyring.gpg 2>/dev/null

# 5) 可选：旧的手动 docker-compose 二进制
sudo rm -f /usr/local/bin/docker-compose /usr/local/bin/docker-compose-v1 2>/dev/null

# 6) 若仍提示有 docker 命令（残留文件，apt 已卸包）
sudo rm -f /usr/bin/docker /usr/local/bin/docker
sudo groupdel docker 2>/dev/null || true

# 7) 按教程装在用户目录下的 n8n（Docker + 中文包），整目录删掉即可（路径按实际用户改 root 或 ubuntu）
sudo rm -rf /root/n8n
# 若是普通用户装的： rm -rf ~/n8n
```

### B. 验证 Docker 已不在

```bash
command -v docker && echo "仍有 docker，执行上一节第 6 步或查: dpkg -S /usr/bin/docker 2>/dev/null" || echo "docker 已移除"
sudo ss -tlnp | grep -E ':80|:443' || echo "80/443 当前无监听（正常，接着装 Nginx）"
```

### B2. autoremove 把 git 卸掉了？装回来

```bash
sudo apt-get install -y git
```

### C. 删除站点目录里仅用于 Docker 的文件（可选）

```bash
sudo rm -f /var/www/devfolio/docker-compose.yml
sudo mv /var/www/devfolio/nginx.conf /var/www/devfolio/nginx.conf.docker-backup 2>/dev/null || true
```

### D. 安装并启用系统 Nginx

```bash
sudo apt-get update
sudo apt-get install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx --no-pager
sudo nginx -t
```

装好后按下文 **「站点配置要点」** 建 `/etc/nginx/sites-available/devfolio`，`root` 指向 `/var/www/devfolio/dist`。

### E. 安装 Node（仅当要在服务器上执行构建时）

推荐使用 [NodeSource](https://github.com/nodesource/distributions) 或 `nvm`；示例（LTS）：

```bash
# 示例：请按官方文档选择当前 LTS 版本号
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v && npm -v
```

构建也可用本机或 CI，只把 `dist/` 同步到服务器，则服务器可不装 Node。

---

## 站点配置要点

- 在 **`/etc/nginx/sites-available/devfolio`**（名称自定）里配置 `root` 指向 **`/var/www/devfolio/dist`**。
- 用 **`sites-enabled`** 启用：`sudo ln -sf /etc/nginx/sites-available/devfolio /etc/nginx/sites-enabled/`，删除或禁用默认站点 `default`（若冲突）。
- 证书仍可用 **`/etc/letsencrypt/live/kenjiginjo.com/`**（若之前用 certbot 已签发），在 `server { listen 443 ssl; }` 中配置 `ssl_certificate` / `ssl_certificate_key`。
- 修改后执行：

```bash
sudo nginx -t && sudo systemctl reload nginx
```

最小检查：

```bash
curl -I http://127.0.0.1
curl -I https://kenjiginjo.com
```

---

## 日常维护命令

```bash
# Nginx 状态与重载
sudo systemctl status nginx
sudo nginx -t && sudo systemctl reload nginx
sudo journalctl -u nginx -n 50 --no-pager

# 站点文件与备份
sudo cp -a /var/www/devfolio/dist "/var/www/devfolio/dist_backup_$(date +%Y%m%d_%H%M%S)"

# 证书
sudo certbot renew
sudo certbot certificates
sudo certbot renew --dry-run
```

---

## 更新网站（构建 + 发布）

在含源码的机器上：

```bash
git pull
pnpm install   # 或 npm install
pnpm run build # 或 npm run build
```

将 **`dist/` 内全部文件** 同步到服务器 **`/var/www/devfolio/dist/`**（`rsync` / `scp` / CI 均可），然后：

```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

## 定期自检

```bash
sudo systemctl is-active nginx
df -h
free -h
curl -I https://kenjiginjo.com
sudo certbot certificates | head -20
```

每月可执行：`sudo apt update && sudo apt upgrade -y`

---

## 故障排除

```bash
# 端口
sudo ss -tlnp | grep -E ':80|:443'

# 配置语法
sudo nginx -t

# 日志
sudo tail -100 /var/log/nginx/error.log
sudo tail -100 /var/log/nginx/access.log
```

---

## 重要路径

```
/var/www/devfolio/dist/          # 网站静态根目录（Nginx root 指向这里）
/etc/nginx/sites-available/      # 站点配置
/etc/nginx/sites-enabled/        # 已启用站点
/etc/letsencrypt/live/kenjiginjo.com/   # 证书（若使用）
```

---

## 服务器信息（请自行更新）

- 系统：Ubuntu 22.04 LTS（或当前实际版本）
- 域名：kenjiginjo.com
- 部署方式：系统 Nginx + 静态 `dist/`，无 Docker
