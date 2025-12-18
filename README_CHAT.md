# ecsbuy.com - 智能问答助手配置指南

## 📋 功能概述

本项目集成了基于阿里云百炼平台 Qwen-Flash 模型的智能问答助手，用户可以通过聊天界面了解 ecsbuy.com 域名的商业价值和应用场景。

## 🔐 安全特性

- ✅ API 密钥存储在服务器端环境变量中
- ✅ 前端代码永远不会接触到敏感信息
- ✅ 使用 Next.js API Routes 作为安全中间层
- ✅ .env.local 文件已被 .gitignore 忽略，不会提交到代码库

## 🚀 快速开始

### 1. 获取阿里云百炼 API 密钥

1. 访问 [阿里云百炼控制台](https://bailian.console.aliyun.com/)
2. 登录您的阿里云账号
3. 在控制台中创建应用
4. 获取 API Key (DashScope API Key)

### 2. 配置环境变量

复制环境变量示例文件：

```bash
cp .env.local.example .env.local
```

编辑 `.env.local` 文件，填入您的真实 API Key：

```env
DASHSCOPE_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. 安装依赖并启动项目

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 4. 测试智能助手

1. 在浏览器中打开 http://localhost:3000
2. 点击右下角的聊天图标
3. 开始与 AI 助手对话

## 📂 项目结构

```
ecsbuy/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API 路由，安全调用阿里云 API
│   ├── components/
│   │   └── ChatAssistant.tsx     # 智能问答组件
│   ├── page.tsx                  # 首页
│   └── layout.tsx                # 布局
├── .env.local                    # 环境变量（不提交到 Git）
├── .env.local.example            # 环境变量示例
└── README_CHAT.md                # 本文档
```

## 🎯 功能特点

### 用户体验
- 浮动聊天按钮，不影响页面浏览
- 可展开/收起的聊天窗口
- 实时消息流显示
- 加载状态动画
- 支持回车键发送消息

### 技术特性
- 基于 Next.js 15 App Router
- TypeScript 类型安全
- Tailwind CSS 样式
- 深色模式支持
- 响应式设计

### AI 能力
- 基于阿里云通义千问大模型
- 专门针对 ecsbuy.com 定制的系统提示词
- 智能理解用户意图
- 专业友好的回答风格

## 🔧 自定义配置

### 修改 AI 助手的角色设定

编辑 `app/api/chat/route.ts` 文件中的系统提示词：

```typescript
{
  role: 'system',
  content: '你是 ecsbuy.com 的智能客服助手，专门帮助用户了解该域名的商业价值和应用场景。请用友好、专业的语气回答用户问题。'
}
```

### 调整模型参数

在 `app/api/chat/route.ts` 中修改：

```typescript
{
  model: 'qwen-plus',           // 模型选择
  temperature: 0.7,             // 创造性（0-1）
  max_tokens: 800,              // 最大输出长度
  stream: false                 // 是否流式输出
}
```

### 样式定制

智能助手组件使用 Tailwind CSS，可以在 `app/components/ChatAssistant.tsx` 中自定义样式。

## ⚠️ 注意事项

1. **API 密钥安全**
   - 永远不要将 `.env.local` 文件提交到代码库
   - 不要在客户端代码中使用 API 密钥
   - 定期更换 API 密钥

2. **成本控制**
   - 阿里云百炼 API 按调用次数计费
   - 建议设置月度预算限制
   - 在生产环境中考虑添加速率限制

3. **生产部署**
   - 在 Vercel/AWS 等平台的环境变量设置中配置 `DASHSCOPE_API_KEY`
   - 确保环境变量在生产环境中正确设置
   - 测试 API 调用是否正常工作

## 🐛 故障排除

### API 调用失败

1. 检查 API Key 是否正确配置
2. 确认 `.env.local` 文件位于项目根目录
3. 重启开发服务器以加载新的环境变量
4. 检查控制台是否有错误信息

### 聊天窗口无响应

1. 打开浏览器开发者工具查看网络请求
2. 检查 `/api/chat` 接口是否返回错误
3. 查看服务器控制台日志

### 环境变量未生效

```bash
# 停止服务器（Ctrl+C）
# 重新启动
npm run dev
```

## 📞 技术支持

如有问题，请查看：
- [阿里云百炼文档](https://help.aliyun.com/zh/dashscope/)
- [Next.js 文档](https://nextjs.org/docs)

## 📄 许可证

本项目仅供学习和参考使用。
