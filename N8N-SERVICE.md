# n8n 服务管理（systemd + 全局 npm）

本文档针对当前服务器上的实际安装方式：**全局 `n8n` + `systemd` 单元 `n8n.service`**。在服务器上以 **root**（或具 sudo 权限的用户）执行以下命令。

---

## 服务概况（与 `systemctl status` 一致）

| 项 | 说明 |
|----|------|
| 单元名 | `n8n.service` |
| 主进程 | `node /usr/bin/n8n start`（全局安装时常见为 `/usr/lib/node_modules/n8n`） |
| 单元文件 | `/etc/systemd/system/n8n.service` |
| 环境覆盖（**改 env 主要改这里**） | `/etc/systemd/system/n8n.service.d/override.conf` |
| 自启 | `enabled` 时开机启动 |

```bash
sudo systemctl status n8n
```

### 当前生产环境变量名（`systemctl show` 可见）

| 变量 | 生产示例值 / 说明 |
|------|-------------------|
| `N8N_LISTEN_ADDRESS` | `127.0.0.1`（经 Nginx 反代，不直出公网） |
| `N8N_PORT` | `5678` |
| `N8N_HOST` | `agent.neziva.com` |
| `N8N_PROTOCOL` | `https` |
| `WEBHOOK_URL` | `https://agent.neziva.com/` |
| `N8N_DEFAULT_LOCALE` | `zh-CN`（可选） |
| `N8N_ENCRYPTION_KEY` | 仅在服务器上配置；**勿写入本仓库、勿贴到公开处**；用于生产后勿随意改 |
| `N8N_USER_FOLDER` | `/root/.n8n` |
| `N8N_PROXY_HOPS` | `1`（经一层反代时常见） |

核对当前进程中的环境（与服务器上一致）：

```bash
sudo systemctl show n8n -p Environment --no-pager
```

---

## 日常管理命令

```bash
# 状态
sudo systemctl status n8n

# 启动 / 停止 / 重启
sudo systemctl start n8n
sudo systemctl stop n8n
sudo systemctl restart n8n

# 开机自启
sudo systemctl enable n8n
sudo systemctl is-enabled n8n
```

### 日志

```bash
# 最近一段日志
sudo journalctl -u n8n -n 100 --no-pager

# 实时跟踪
sudo journalctl -u n8n -f
```

### 本机与对外健康检查

```bash
# 本机（反代前，端口以你 override 中为准，常见 5678）
curl -sI http://127.0.0.1:5678 | head -10

# 经 Nginx 与 HTTPS 的对外域名
curl -sI https://agent.neziva.com | head -10
```

---

## 升级 n8n

```bash
sudo npm install -g n8n
sudo systemctl restart n8n
sudo systemctl status n8n
```

若使用社区汉化等覆盖 `editor-ui` 的方式，按该方案在升级后**重新应用**对应文件，再 `restart`。

---

## 更新 / 管理环境变量（env）

n8n 的进程环境由 **systemd** 注入，不要指望改 shell 的 `export` 或本仓库的 `.env` 会生效（除非单元里显式 `EnvironmentFile=` 指到某文件）。

### 修改步骤（`override.conf`）

1. 编辑：

   ```bash
   sudo nano /etc/systemd/system/n8n.service.d/override.conf
   ```

2. 在 **`[Service]`** 下维护 `Environment="键=值"`。可与现网一致，拆成多行；需改哪几项就只改那几行（如域名、语言、Webhook 等）。与当前生产**对齐的完整示例**如下（`N8N_ENCRYPTION_KEY` 请仅在服务器上填写真实值，**不要**把真值写进本文档或 git）：

   ```ini
   [Service]
   Environment="N8N_LISTEN_ADDRESS=127.0.0.1"
   Environment="N8N_PORT=5678"
   Environment="N8N_HOST=agent.neziva.com"
   Environment="N8N_PROTOCOL=https"
   Environment="WEBHOOK_URL=https://agent.neziva.com/"
   Environment="N8N_DEFAULT_LOCALE=zh-CN"
   Environment="N8N_ENCRYPTION_KEY=在此填服务器上的密钥"
   Environment="N8N_USER_FOLDER=/root/.n8n"
   Environment="N8N_PROXY_HOPS=1"
   ```

   若某行值里含空格，用一对英文双引号包住**整个** `键=值` 或仅包住值，保持与现文件格式一致。若你本机是**单行** `Environment="KEY1=... KEY2=..."`，也可继续用该写法，只改需要变的片段。

3. 应用变更：

   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart n8n
   sudo systemctl status n8n
   ```

4. 确认：

   ```bash
   sudo systemctl show n8n -p Environment --no-pager
   ```

### 方式二：独立 env 文件 + `EnvironmentFile=`

适合变量较多、希望与主单元分离管理时：

1. 例如建立 **`/etc/n8n.env`**（权限收紧：`sudo chmod 600 /etc/n8n.env`），每行 `KEY=value`，**不要**加 `export`。
2. 在 **`n8n.service` 或 `override.conf` 的 `[Service]`** 中增加一行：

   ```ini
   EnvironmentFile=/etc/n8n.env
   ```

3. 同样执行：

   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart n8n
   ```

**注意：**

- `N8N_ENCRYPTION_KEY` 一旦用于生产库，**不要随意更换**，否则易触发加密相关错误。  
- 改监听地址、域名、`WEBHOOK_URL` 时，**同步检查 Nginx** 反代与证书域名是否一致。

---

## 常用参考路径

| 路径 | 说明 |
|------|------|
| `/etc/systemd/system/n8n.service` | 主单元 |
| `/etc/systemd/system/n8n.service.d/override.conf` | 环境变量与覆盖项 |
| `/usr/bin/n8n` | 可执行入口（`which n8n` 可再确认） |
| `/root/.n8n/` | 常见数据目录（以 `N8N_USER_FOLDER` 为准） |

---

## 故障时快速查

```bash
sudo systemctl status n8n
sudo journalctl -u n8n -n 80 --no-pager
curl -sv http://127.0.0.1:5678/ 2>&1 | head -25
```

502 时优先确认：**n8n 是否在监听**、Nginx `proxy_pass` 地址与端口是否与 `N8N_LISTEN_ADDRESS` / 实际监听一致。
