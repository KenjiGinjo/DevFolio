import { $ } from 'bun'

// Personal Nginx upload. Forkers: skip this and deploy `dist/` with Vercel or any static host.
const SERVER_CONFIG = {
  host: process.env.SERVER_IP,
  username: process.env.SERVER_USERNAME,
  password: process.env.SERVER_PASSWORD,
  port: process.env.SERVER_PORT,
  remotePath: '/var/www/devfolio/dist',
}

// 确保远程目录存在
await $`sshpass -p "${SERVER_CONFIG.password}" ssh -p ${SERVER_CONFIG.port} ${SERVER_CONFIG.username}@${SERVER_CONFIG.host} "mkdir -p ${SERVER_CONFIG.remotePath}"`

// 上传整个 dist 目录
await $`sshpass -p "${SERVER_CONFIG.password}" scp -P ${SERVER_CONFIG.port} -r ./dist/* ${SERVER_CONFIG.username}@${SERVER_CONFIG.host}:${SERVER_CONFIG.remotePath}/`

console.log('Deployment completed!')
