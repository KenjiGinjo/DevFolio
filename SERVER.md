🎉 **恭喜！网站部署成功！** 现在让我为您提供维护建议和常用命令：

## 🔧 日常维护命令

### 容器管理
```bash
# 查看容器状态
docker compose ps

# 查看容器日志
docker compose logs devfolio

# 重启服务
docker compose restart devfolio

# 停止服务
docker compose down

# 启动服务
docker compose up -d

# 查看实时日志
docker compose logs -f devfolio
```

### 网站文件更新
```bash
# 进入项目目录
cd /var/www/devfolio

# 备份当前文件
cp -r dist dist_backup_$(date +%Y%m%d)

# 上传新文件到 dist 目录
# 然后重启容器
docker compose restart devfolio
```

### SSL 证书管理
```bash
# 手动续期证书
sudo certbot renew

# 检查证书状态
sudo certbot certificates

# 测试续期（不实际续期）
sudo certbot renew --dry-run
```

## �� 定期维护任务

### 每周检查
```bash
# 1. 检查容器状态
docker compose ps

# 2. 检查磁盘空间
df -h

# 3. 检查内存使用
free -h

# 4. 检查网站访问
curl -I https://kenjiginjo.com
```

### 每月检查
```bash
# 1. 更新系统包
sudo apt update && sudo apt upgrade -y

# 2. 清理 Docker 缓存
docker system prune -f

# 3. 检查证书有效期
sudo certbot certificates

# 4. 备份重要文件
sudo tar -czf /backup/devfolio_$(date +%Y%m%d).tar.gz /var/www/devfolio
```

## 🚨 故障排除

### 网站无法访问
```bash
# 检查容器状态
docker compose ps

# 查看错误日志
docker compose logs devfolio

# 检查端口占用
netstat -tlnp | grep :80
netstat -tlnp | grep :443

# 重启服务
docker compose restart devfolio
```

### SSL 证书问题
```bash
# 检查证书文件
ls -la /etc/letsencrypt/live/kenjiginjo.com/

# 重新获取证书
sudo certbot certonly --webroot -w /var/www/certbot -d kenjiginjo.com -d www.kenjiginjo.com

# 重启容器
docker compose restart devfolio
```

### 磁盘空间不足
```bash
# 清理 Docker 缓存
docker system prune -a -f

# 清理日志文件
sudo journalctl --vacuum-time=7d

# 清理 apt 缓存
sudo apt clean
```

## �� 监控脚本

### 创建健康检查脚本
```bash
# 创建监控脚本
sudo nano /usr/local/bin/health-check.sh
```

脚本内容：
```bash
#!/bin/bash
# 健康检查脚本

echo "=== DevFolio 健康检查 ==="
echo "时间: $(date)"
echo

# 检查容器状态
echo "1. 容器状态:"
docker compose ps

echo
echo "2. 网站访问测试:"
curl -I https://kenjiginjo.com 2>/dev/null | head -1

echo
echo "3. 磁盘使用:"
df -h /var/www/devfolio

echo
echo "4. 内存使用:"
free -h

echo
echo "5. SSL 证书状态:"
sudo certbot certificates | grep -A 5 "kenjiginjo.com"
```

### 设置定时监控
```bash
# 给脚本执行权限
sudo chmod +x /usr/local/bin/health-check.sh

# 添加到 crontab（每小时检查一次）
echo "0 * * * * /usr/local/bin/health-check.sh >> /var/log/devfolio-health.log" | sudo crontab -
```

## 🔄 更新网站内容

### 方法1：直接上传文件
```bash
# 1. 备份当前文件
cd /var/www/devfolio
cp -r dist dist_backup_$(date +%Y%m%d_%H%M%S)

# 2. 上传新文件到 dist 目录
# 3. 重启容器
docker compose restart devfolio
```

### 方法2：使用 Git（推荐）
```bash
# 1. 克隆项目到服务器
cd /var/www
git clone https://github.com/yourusername/DevFolio.git devfolio-source

# 2. 构建项目
cd devfolio-source
npm install
npm run build

# 3. 复制构建文件
cp -r dist/* /var/www/devfolio/dist/

# 4. 重启容器
cd /var/www/devfolio
docker compose restart devfolio
```

## 📝 重要文件位置

```
/var/www/devfolio/           # 网站根目录
├── dist/                    # 网站文件
├── nginx.conf              # Nginx 配置
├── docker-compose.yml      # Docker 配置
└── nginx-http.conf         # HTTP 临时配置

/etc/letsencrypt/           # SSL 证书目录
├── live/kenjiginjo.com/    # 证书文件
└── archive/kenjiginjo.com/ # 证书备份

/var/log/                   # 日志目录
├── nginx/                  # Nginx 日志
└── letsencrypt/           # 证书日志
```

## 🆘 紧急恢复

### 如果网站完全无法访问
```bash
# 1. 检查服务器状态
systemctl status docker

# 2. 重启 Docker 服务
sudo systemctl restart docker

# 3. 重新启动容器
cd /var/www/devfolio
docker compose up -d

# 4. 检查防火墙
sudo iptables -L
```

### 如果 SSL 证书过期
```bash
# 1. 停止 HTTPS 服务
docker compose down

# 2. 使用 HTTP 配置启动
cp nginx-http.conf nginx.conf
docker compose up -d

# 3. 重新获取证书
sudo certbot certonly --webroot -w /var/www/certbot -d kenjiginjo.com -d www.kenjiginjo.com

# 4. 恢复 HTTPS 配置
# 编辑 nginx.conf 恢复 HTTPS 配置
docker compose restart devfolio
```

## �� 联系信息

**服务器信息：**
- 服务器：Ubuntu 22.04 LTS
- 域名：kenjiginjo.com
- 部署时间：2025年9月13日

**维护建议：**
- 每周检查一次网站状态
- 每月更新系统包
- 定期备份重要文件
- 监控磁盘空间使用

您的网站现在已经完全部署成功，可以正常访问了！🎊
