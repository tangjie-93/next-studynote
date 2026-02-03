import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '高级元数据配置示例',
  description: '展示 robots 元标签和其他高级元数据配置',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    {
      color: '#ffffff',
      media: '(prefers-color-scheme: light)',
    },
    {
      color: '#000000',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '高级元数据示例',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  authors: [
    { name: 'Next.js 示例团队' },
  ],
  creator: 'Next.js 示例团队',
  publisher: 'Next.js 示例团队',
  keywords: ['Next.js', '元数据', 'robots', 'SEO', '高级配置'],
  category: '技术教程',
  other: {
    'application-name': 'Next.js 元数据演示',
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/favicon.ico',
    'google-site-verification': 'example-verification-code',
    'bing-site-verification': 'example-bing-verification',
    'yandex-verification': 'example-yandex-verification',
  },
};

export default function AdvancedMetadataPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">高级元数据配置示例</h1>
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Robots 元标签配置</h2>
          <p className="text-gray-600 mb-4">
            Robots 元标签告诉搜索引擎如何爬取和索引页面内容：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6">
            <pre>{`export const metadata: Metadata = {
  robots: {
    index: true,      // 是否索引页面
    follow: true,     // 是否跟踪页面中的链接
    nocache: false,   // 是否允许缓存
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,  // 视频预览长度（-1 表示无限制）
      'max-image-preview': 'large',  // 图片预览大小
      'max-snippet': -1,  // 摘要长度（-1 表示无限制）
    },
  },
};`}</pre>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Robots 指令说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2 text-gray-600">
                <li><strong>index</strong>: 允许搜索引擎索引此页面</li>
                <li><strong>follow</strong>: 允许搜索引擎跟踪此页面上的链接</li>
                <li><strong>nocache</strong>: 告诉搜索引擎不要缓存页面内容</li>
                <li><strong>noarchive</strong>: 阻止搜索引擎显示缓存版本</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-gray-600">
                <li><strong>nosnippet</strong>: 阻止搜索引擎显示页面摘要</li>
                <li><strong>notranslate</strong>: 阻止搜索引擎翻译页面</li>
                <li><strong>noimageindex</strong>: 阻止搜索引擎索引页面上的图片</li>
                <li><strong>unavailable_after</strong>: 指定页面过期时间</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Viewport 配置</h2>
          <p className="text-gray-600 mb-4">
            Viewport 元标签控制页面在移动设备上的显示方式：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <pre>{`export const metadata: Metadata = {
  viewport: {
    width: 'device-width',      // 宽度设置为设备宽度
    initialScale: 1,            // 初始缩放比例
    maximumScale: 1,            // 最大缩放比例
    userScalable: false,        // 是否允许用户缩放
  },
};`}</pre>
          </div>
          <p className="text-gray-600">
            对于响应式网站，推荐使用上述配置以确保在移动设备上的正确显示。
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">主题颜色配置</h2>
          <p className="text-gray-600 mb-4">
            主题颜色元标签可以根据用户的颜色方案偏好设置浏览器 UI 颜色：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <pre>{`export const metadata: Metadata = {
  themeColor: [
    {
      color: '#ffffff',
      media: '(prefers-color-scheme: light)',  // 浅色模式
    },
    {
      color: '#000000',
      media: '(prefers-color-scheme: dark)',   // 深色模式
    },
  ],
};`}</pre>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white border border-gray-300 rounded mr-2"></div>
              <span className="text-gray-600">浅色模式主题色</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black border border-gray-300 rounded mr-2"></div>
              <span className="text-gray-600">深色模式主题色</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Apple Web App 配置</h2>
          <p className="text-gray-600 mb-4">
            这些元标签优化在 iOS 设备上添加到主屏幕的网页应用：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <pre>{`export const metadata: Metadata = {
  appleWebApp: {
    capable: true,               // 启用 Web App 模式
    statusBarStyle: 'black-translucent',  // 状态栏样式
    title: '高级元数据示例',       // 应用标题
  },
};`}</pre>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">自定义元标签</h2>
          <p className="text-gray-600 mb-4">
            对于不包含在标准 Metadata 类型中的自定义标签，可以使用 other 字段：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <pre>{`export const metadata: Metadata = {
  other: {
    'application-name': 'Next.js 元数据演示',
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/favicon.ico',
    'google-site-verification': 'example-verification-code',
    'bing-site-verification': 'example-bing-verification',
    'yandex-verification': 'example-yandex-verification',
  },
};`}</pre>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">最佳实践</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>根据页面内容和用途合理配置 robots 指令</li>
            <li>对于重要页面，确保 index 和 follow 都设置为 true</li>
            <li>对于重复内容或临时页面，使用 noindex 指令</li>
            <li>始终为移动设备优化 viewport 配置</li>
            <li>根据网站设计设置合适的主题颜色</li>
            <li>使用 other 字段添加必要的验证标签和自定义元数据</li>
            <li>定期检查元数据配置是否符合最新的搜索引擎要求</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
