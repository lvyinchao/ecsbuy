# 阿里云 ESA Pages 部署指南

## 🚀 部署前准备

### 1. 修改 Next.js 配置

已将 `next.config.ts` 中的 `output: "export"` 注释掉，因为：
- ✅ 静态导出模式不支持 API Routes
- ✅ ESA Pages 支持 Next.js 的服务器端功能
- ✅ 需要 API Routes 来实现智能问答功能

### 2. 环境变量配置

在阿里云 ESA Pages 控制台配置以下环境变量：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `DASHSCOPE_API_KEY` | 您的阿里云 API Key | 用于调用通义千问模型 |

**配置步骤：**
1. 登录阿里云 ESA Pages 控制台
2. 进入项目设置 → 环境变量
3. 添加 `DASHSCOPE_API_KEY` 变量
4. 粘贴您的 API Key
5. 保存并重新部署

## 📦 部署方式

### 方式一：通过 Git 自动部署（推荐）

1. **推送代码到 Git 仓库**
   ```bash
   git add .
   git commit -m "部署到 ESA Pages"
   git push
   ```

2. **在 ESA Pages 控制台关联仓库**
   - 选择 GitHub/Gitee/GitLab
   - 授权并选择仓库
   - 选择分支（如 main）

3. **配置构建设置**
   - 构建命令：`npm run build`
   - 输出目录：`.next`
   - Node.js 版本：18.x 或更高

4. **添加环境变量**
   - 按照上述环境变量配置步骤添加

5. **触发部署**
   - 保存配置后会自动触发首次部署
   - 后续每次推送代码都会自动部署

### 方式二：通过 CLI 部署

```bash
# 安装 ESA Pages CLI（如果还未安装）
npm install -g @alicloud/esa-pages-cli

# 登录
esa login

# 初始化项目
esa init

# 部署
esa deploy
```

## 🔍 常见问题排查

### 1. API 路由返回 404

**原因：**
- ✅ 已修复：移除了 `output: "export"` 配置
- 环境变量未正确配置

**解决方案：**
```bash
# 本地测试 API 路由
curl http://localhost:3000/api/chat -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"你好"}'
```

### 2. 环境变量未生效

**检查清单：**
- [ ] 是否在 ESA Pages 控制台正确添加了环境变量
- [ ] 变量名是否完全匹配（区分大小写）
- [ ] 添加环境变量后是否重新部署了项目

**验证方法：**
在 API 路由中添加日志：
```typescript
console.log('API Key exists:', !!process.env.DASHSCOPE_API_KEY);
```

### 3. 构建失败

**常见原因：**
- Node.js 版本过低（需要 18.x+）
- 依赖安装失败
- 构建命令错误

**解决方案：**
```bash
# 本地清理并重新构建
rm -rf node_modules .next
npm install
npm run build
```

### 4. CORS 错误

如果遇到跨域问题，在 `next.config.ts` 中添加：

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};
```

## 📝 部署检查清单

部署前请确认：

- [ ] ✅ `next.config.ts` 中已移除或注释 `output: "export"`
- [ ] ✅ 在 ESA Pages 控制台配置了 `DASHSCOPE_API_KEY`
- [ ] ✅ 本地构建成功（`npm run build`）
- [ ] ✅ 本地测试成功（`npm run dev`）
- [ ] ✅ API 路由本地可访问
- [ ] ✅ Git 仓库已推送最新代码
- [ ] ✅ ESA Pages 构建设置正确

## 🔗 有用的链接

- [阿里云 ESA Pages 文档](https://help.aliyun.com/zh/esa/)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [阿里云百炼平台](https://bailian.console.aliyun.com/)

## 🎯 验证部署成功

部署完成后，访问您的 ESA Pages 域名：

1. **检查首页加载**
   - 页面正常显示
   - 样式正确渲染

2. **测试聊天功能**
   - 点击右下角聊天图标
   - 发送测试消息
   - 确认收到 AI 回复

3. **检查控制台**
   - 打开浏览器开发者工具
   - 查看 Network 标签
   - 确认 `/api/chat` 请求成功（状态码 200）

## ⚡ 性能优化建议

1. **启用边缘缓存**
   - 静态资源自动缓存
   - API 响应考虑添加缓存策略

2. **CDN 加速**
   - ESA Pages 自带全球 CDN
   - 自动优化资源分发

3. **监控和日志**
   - 在 ESA Pages 控制台查看访问日志
   - 监控 API 调用量和性能

## 📞 技术支持

如遇到问题：
1. 查看 ESA Pages 控制台的构建日志
2. 检查运行时日志
3. 联系阿里云技术支持

---

**重要提示：** 部署到生产环境前，请务必在本地完整测试所有功能！
