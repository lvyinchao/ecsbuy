import ChatAssistant from './components/ChatAssistant';

export default function Home() {
  const useCases = [
    {
      icon: "🛒",
      title: "跨境电商平台",
      description: "ECS (E-Commerce Store) - 打造国际化的跨境购物平台，连接全球买家与卖家",
      features: ["全球商品交易", "多币种支付", "国际物流追踪"]
    },
    {
      icon: "🏢",
      title: "企业采购系统",
      description: "Enterprise Commerce Solution - 为企业提供B2B采购解决方案",
      features: ["批量采购", "供应商管理", "询价报价系统"]
    },
    {
      icon: "☁️",
      title: "云服务商城",
      description: "ECS (Elastic Cloud Services) - 云计算服务与产品的一站式购买平台",
      features: ["云主机购买", "资源配置", "按需付费"]
    },
    {
      icon: "🎮",
      title: "电子产品商城",
      description: "Electronics Commerce Store - 专注于电子产品、数码设备的在线商城",
      features: ["3C数码", "智能设备", "正品保障"]
    },
    {
      icon: "🌐",
      title: "欧洲商品平台",
      description: "European Commerce Store - 专注欧洲优质商品的购物平台",
      features: ["欧洲直采", "品质保证", "海外仓储"]
    },
    {
      icon: "🏪",
      title: "电商解决方案",
      description: "E-Commerce Solutions Buy - 提供完整的电商系统解决方案与服务",
      features: ["系统定制", "技术支持", "运营指导"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-16 pb-12 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ecsbuy.com
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded"></div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            电商与购物的完美结合
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            一个简洁、易记、富有商业价值的域名，为您的电商事业赋能
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
            易于记忆
          </span>
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
            国际化
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
            商业价值
          </span>
          <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
            多场景应用
          </span>
        </div>
      </header>

      {/* Use Cases Section */}
      <main className="container mx-auto px-4 pb-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
          适用场景
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          ecsbuy.com 可以应用于多种商业模式和行业领域
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:scale-105"
            >
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {useCase.description}
              </p>
              <div className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Domain Value Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">域名价值</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">📈 品牌优势</h3>
              <ul className="space-y-2 text-sm">
                <li>• 简洁易记，便于传播</li>
                <li>• .com 顶级域名，权威性强</li>
                <li>• 国际化命名，无地域限制</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">💼 商业应用</h3>
              <ul className="space-y-2 text-sm">
                <li>• 适合电商、采购等多个行业</li>
                <li>• SEO友好，关键词明确</li>
                <li>• 扩展性强，业务发展空间大</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            准备好开启您的电商之旅了吗？
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            ecsbuy.com 正在等待成为您下一个成功项目的基石
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            了解更多
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">ecsbuy.com - 您的电商梦想，从这里开始</p>
          <p className="text-sm mb-1">© 2025 ecsbuy.com. All rights reserved.</p>
          <p className="text-sm">
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              辽ICP备15005439号-7
            </a>
          </p>
        </div>
      </footer>

      {/* 智能问答助手 */}
      <ChatAssistant />
    </div>
  );
}
