# ecsbuy.com - 电商域名展示与智能问答平台

基于 Next.js 15 构建的现代化域名展示网站，集成阿里云百炼 AI 智能问答助手。

## ✨ 功能特性

- 🎨 **精美的域名展示页面** - 专业展示 ecsbuy.com 的商业价值和应用场景
- 🤖 **AI 智能问答助手** - 基于阿里云通义千问，支持流式输出和 Markdown 渲染
- 🌐 **联网搜索** - AI 可以获取实时信息回答问题
- 🎯 **六大应用场景** - 跨境电商、企业采购、云服务、电子产品等
- 🌙 **深色模式** - 完整支持明暗主题切换
- 📱 **响应式设计** - 完美适配移动端和桌面端
- ⚡ **边缘渲染** - 支持全球 CDN 加速

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 配置环境变量

创建 `.env.local` 文件：

```env
DASHSCOPE_API_KEY=your_api_key_here
```

获取 API Key：[阿里云百炼平台](https://bailian.console.aliyun.com/)

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 生产构建

```bash
npm run build
npm run start
```

## 📦 部署到阿里云 ESA Pages

### 重要修改

✅ **已修复 404 问题**：移除了 `next.config.ts` 中的 `output: "export"` 配置，以支持 API Routes。

### 部署步骤

1. **推送代码到 Git 仓库**
   ```bash
   git add .
   git commit -m "Deploy to ESA Pages"
   git push
   ```

2. **在 ESA Pages 控制台配置**
   - 构建命令：`npm run build`
   - 输出目录：`.next`
   - Node.js 版本：18.x 或更高

3. **配置环境变量**
   - 添加 `DASHSCOPE_API_KEY` 及其值
   - 保存后重新部署

4. **验证部署**
   - 访问分配的域名
   - 测试聊天功能

📖 详细说明请查看：[部署指南](./DEPLOY_ESA.md)

## 🔍 故障排查

如果遇到 API 404 错误，请查看：[故障排查指南](./TROUBLESHOOTING.md)

### 快速检查

```bash
# 1. 验证本地构建
npm run build

# 2. 检查 API 路由（应该显示 ƒ 符号）
# 输出应包含：
# └ ƒ /api/chat

# 3. 测试 API
npm run dev
# 然后运行 test-api.bat (Windows) 或 test-api.sh (Linux/Mac)
```

## 📁 项目结构

```
ecsbuy/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI 对话 API（流式输出）
│   ├── components/
│   │   └── ChatAssistant.tsx     # 智能问答组件
│   ├── globals.css               # 全局样式（含 Markdown 优化）
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 首页
├── .env.local                    # 环境变量（本地）
├── .env.local.example            # 环境变量示例
├── next.config.ts                # Next.js 配置
├── DEPLOY_ESA.md                 # ESA Pages 部署指南
├── TROUBLESHOOTING.md            # 故障排查指南
└── README.md                     # 本文件
```

## 🛠️ 技术栈

- **框架：** Next.js 15 (App Router)
- **语言：** TypeScript
- **样式：** Tailwind CSS v4
- **AI 模型：** 阿里云通义千问 (Qwen-Plus)
- **Markdown：** react-markdown + remark-gfm + rehype-highlight
- **部署：** 阿里云 ESA Pages / Vercel

## 🎯 核心功能

### 1. 域名展示

- 6 个精心设计的应用场景卡片
- 渐变色设计语言
- 动画过渡效果
- 备案号显示

### 2. AI 智能助手

**特性：**
- ✅ 流式输出（打字机效果）
- ✅ Markdown 格式支持
- ✅ 代码高亮显示
- ✅ 联网搜索能力
- ✅ 引用来源标注
- ✅ 自动滚动
- ✅ 错误处理

**支持的 Markdown 语法：**
- 标题 (H1-H6)
- 列表（有序/无序）
- 代码块（带语法高亮）
- 行内代码
- 粗体/斜体
- 链接
- 引用
- 表格

## 🔐 安全性

- ✅ API Key 存储在服务器端环境变量
- ✅ 前端代码不包含任何敏感信息
- ✅ API Routes 作为安全中间层
- ✅ .env 文件已被 .gitignore 忽略

## 📊 性能优化

- ✅ Turbopack 构建加速
- ✅ 组件懒加载
- ✅ 图片优化
- ✅ CSS 最小化
- ✅ 边缘缓存支持

## 🧪 测试

### 本地测试 API

**Windows:**
```bash
test-api.bat
```

**Linux/Mac:**
```bash
chmod +x test-api.sh
./test-api.sh
```

### 手动测试

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"你好，介绍一下 ecsbuy.com"}'
```

## 📄 许可证

本项目仅供学习和参考使用。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 技术支持

- 阿里云 ESA Pages：[文档](https://help.aliyun.com/zh/esa/)
- Next.js：[官方文档](https://nextjs.org/docs)
- 阿里云百炼：[控制台](https://bailian.console.aliyun.com/)

## 🎉 致谢

- Next.js 团队
- 阿里云百炼平台
- React Markdown 社区

---

**备案号：** 辽ICP备15005439号-7

**域名：** ecsbuy.com

**构建时间：** 2025-12-18
