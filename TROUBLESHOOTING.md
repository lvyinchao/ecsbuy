# ESA Pages 部署故障排查指南

## 🔴 问题：API 路由返回 404

### ✅ 已解决的问题

**原因：** `next.config.ts` 中配置了 `output: "export"`，这会导致 Next.js 构建为纯静态站点，不支持 API Routes。

**解决方案：** 已将该配置注释掉。

```typescript
// ❌ 错误配置（会导致 API 404）
const nextConfig: NextConfig = {
  output: "export",  // 这会禁用 API Routes
};

// ✅ 正确配置
const nextConfig: NextConfig = {
  // 不设置 output，或设置为 undefined
};
```

---

## 📋 部署前检查清单

### 1. 本地验证

```bash
# 1. 清理并重新安装依赖
rm -rf node_modules .next
npm install

# 2. 本地构建
npm run build

# 3. 启动生产服务器
npm run start

# 4. 测试 API 路由
# Windows:
test-api.bat

# Linux/Mac:
chmod +x test-api.sh
./test-api.sh
```

### 2. 配置文件检查

- [ ] `next.config.ts` 中 **没有** `output: "export"`
- [ ] `.env.local` 包含 `DASHSCOPE_API_KEY`
- [ ] `package.json` scripts 正确配置

### 3. ESA Pages 控制台检查

- [ ] 构建命令: `npm run build`
- [ ] 输出目录: `.next`
- [ ] Node.js 版本: >= 18.0.0
- [ ] 环境变量 `DASHSCOPE_API_KEY` 已配置

---

## 🔍 详细排查步骤

### 步骤 1: 验证本地构建

```bash
npm run build
```

**检查输出：**
```
Route (app)                         Size  First Load JS
┌ ○ /                            93.3 kB         206 kB
├ ○ /_not-found                      0 B         113 kB
└ ƒ /api/chat                        0 B            0 B    ← 这里应该有 ƒ 符号
```

- ✅ **正确：** `/api/chat` 前面有 `ƒ` 符号（表示动态路由）
- ❌ **错误：** 如果没有 `ƒ` 或没有 `/api/chat` 这一行

### 步骤 2: 本地测试 API

```bash
# 启动开发服务器
npm run dev

# 在另一个终端测试 API
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"测试消息"}'
```

**预期结果：**
- 应该看到流式数据输出（以 `data:` 开头的多行）
- 不应该返回 404

### 步骤 3: 检查环境变量

**本地：**
```bash
# 检查 .env.local 文件
cat .env.local

# 应该包含：
DASHSCOPE_API_KEY=sk-xxxxxx
```

**ESA Pages：**
1. 登录 ESA Pages 控制台
2. 进入项目 → 设置 → 环境变量
3. 确认 `DASHSCOPE_API_KEY` 存在且值正确
4. **重要：** 修改环境变量后需要重新部署！

### 步骤 4: 检查部署日志

在 ESA Pages 控制台查看：
1. **构建日志：** 确认构建成功
2. **运行时日志：** 查看是否有错误信息

**常见错误：**
```
Error: Cannot find module 'next/dist/...'
→ 解决：确保 Node.js 版本 >= 18

Error: DASHSCOPE_API_KEY is not defined
→ 解决：在控制台添加环境变量并重新部署

404 on /api/chat
→ 解决：检查 next.config.ts，移除 output: "export"
```

---

## 🛠️ 常见问题解决方案

### 问题 1: 本地正常，部署后 404

**可能原因：**
1. ESA Pages 的构建配置不正确
2. 环境变量未配置
3. 部署时使用了错误的构建命令

**解决方案：**
```bash
# 确保 ESA Pages 控制台配置：
构建命令: npm run build
输出目录: .next
安装命令: npm install
```

### 问题 2: API 调用超时

**可能原因：**
1. 阿里云 API Key 无效或额度不足
2. 网络连接问题

**解决方案：**
```bash
# 1. 验证 API Key
# 访问：https://bailian.console.aliyun.com/
# 检查 API Key 状态和剩余额度

# 2. 测试网络连接
curl https://dashscope.aliyuncs.com
```

### 问题 3: CORS 错误

如果前端调用 API 时出现 CORS 错误，添加以下配置到 `next.config.ts`：

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
        ],
      },
    ];
  },
};
```

### 问题 4: 构建失败

**错误：** `Error: Module not found`

**解决方案：**
```bash
# 清理并重新安装
rm -rf node_modules package-lock.json
npm install
npm run build
```

**错误：** `TypeError: Cannot read property 'ReactNode'`

**解决方案：**
```bash
# 更新 React 类型定义
npm install --save-dev @types/react@latest @types/react-dom@latest
```

---

## 🧪 完整测试流程

### 1. 本地测试
```bash
# 终端 1: 启动服务器
npm run dev

# 终端 2: 测试 API
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"你好"}'

# 终端 3: 测试前端
# 打开浏览器访问 http://localhost:3000
# 点击聊天图标，发送消息
```

### 2. 生产构建测试
```bash
npm run build
npm run start

# 测试生产环境 API（端口 3000）
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"测试生产环境"}'
```

### 3. 部署后测试
```bash
# 替换为您的实际域名
curl -X POST https://your-domain.esa.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"测试线上环境"}'
```

---

## 📞 获取帮助

如果以上步骤都无法解决问题：

1. **查看完整错误日志**
   - ESA Pages 控制台 → 部署记录 → 查看日志
   - 浏览器开发者工具 → Console/Network 标签

2. **提供以下信息**
   - 错误截图
   - 构建日志
   - 浏览器 Network 请求详情
   - `next.config.ts` 内容
   - 部署平台配置

3. **联系技术支持**
   - 阿里云 ESA Pages 工单
   - Next.js GitHub Issues
   - 相关技术社区

---

## ✅ 成功部署的标志

部署成功后，您应该能：

1. ✅ 访问首页，看到完整的 ecsbuy.com 介绍页面
2. ✅ 点击右下角聊天图标，打开对话窗口
3. ✅ 发送消息，收到 AI 流式回复
4. ✅ 浏览器 Network 标签显示 `/api/chat` 返回 200 状态码
5. ✅ 看到 `data:` 开头的流式响应数据

**祝您部署顺利！** 🎉
