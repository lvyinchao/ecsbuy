#!/bin/bash

# API 路由测试脚本

echo "🧪 测试 API 路由..."
echo ""

# 测试本地开发服务器
echo "📍 测试本地开发服务器: http://localhost:3001/api/chat"
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"你好，请简单介绍一下自己"}' \
  --max-time 30

echo ""
echo ""
echo "✅ 如果看到流式响应数据，说明 API 路由工作正常"
echo ""
echo "📝 部署到 ESA Pages 后，替换为您的线上域名进行测试："
echo "curl -X POST https://your-domain.com/api/chat \\"
echo "  -H \"Content-Type: application/json\" \\"
echo "  -d '{\"message\":\"你好\"}'"
