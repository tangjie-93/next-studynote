import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '社交媒体元数据示例',
  description: '展示如何配置 Open Graph 和 Twitter 卡片元数据',
  openGraph: {
    title: '社交媒体元数据示例',
    description: '学习如何在 Next.js 中配置优化的社交媒体分享元数据',
    url: 'https://example.com/metadata/social',
    siteName: 'Next.js 元数据演示',
    images: [
      {
        url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Social%20media%20metadata%20example%20with%20Next.js%20and%20modern%20design&image_size=landscape_16_9',
        width: 1200,
        height: 630,
        alt: '社交媒体元数据示例',
      },
      {
        url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Next.js%20social%20sharing%20preview&image_size=square',
        width: 600,
        height: 600,
        alt: 'Next.js 社交媒体分享预览',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '社交媒体元数据示例',
    description: '学习如何在 Next.js 中配置优化的社交媒体分享元数据',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Social%20media%20metadata%20example%20with%20Next.js%20and%20modern%20design&image_size=landscape_16_9'
    ],
    creator: '@nextjsdemo',
    site: '@nextjsdemo',
  },
  keywords: ['Next.js', '元数据', 'Open Graph', 'Twitter 卡片', 'SEO'],
  authors: [
    { name: 'Next.js 示例团队' },
  ],
};

export default function SocialMetadataPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">社交媒体元数据示例</h1>
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Open Graph 配置</h2>
          <p className="text-gray-600 mb-4">
            Open Graph 协议允许网页成为社交媒体上的富媒体对象。以下是配置的主要字段：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">基本信息</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>标题：</strong>社交媒体元数据示例</li>
                <li><strong>描述：</strong>学习如何在 Next.js 中配置优化的社交媒体分享元数据</li>
                <li><strong>站点名称：</strong>Next.js 元数据演示</li>
                <li><strong>类型：</strong>website</li>
                <li><strong>区域设置：</strong>zh_CN</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">图片配置</h3>
              <div className="space-y-4">
                <div>
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Social%20media%20metadata%20example%20with%20Next.js%20and%20modern%20design&image_size=landscape_16_9" 
                    alt="主要分享图片" 
                    className="w-full h-auto rounded-md shadow-sm"
                  />
                  <p className="text-sm text-gray-500 mt-2">1200×630px - 主要分享图片</p>
                </div>
                <div>
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Next.js%20social%20sharing%20preview&image_size=square" 
                    alt="方形分享图片" 
                    className="w-full h-auto rounded-md shadow-sm"
                  />
                  <p className="text-sm text-gray-500 mt-2">600×600px - 方形分享图片</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Twitter 卡片配置</h2>
          <p className="text-gray-600 mb-4">
            Twitter 卡片允许在推文上附加媒体内容。以下是配置的主要字段：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">卡片设置</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>卡片类型：</strong>summary_large_image</li>
                <li><strong>标题：</strong>社交媒体元数据示例</li>
                <li><strong>描述：</strong>学习如何在 Next.js 中配置优化的社交媒体分享元数据</li>
                <li><strong>创建者：</strong>@nextjsdemo</li>
                <li><strong>站点：</strong>@nextjsdemo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">卡片预览</h3>
              <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                <div className="aspect-video bg-gray-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Social%20media%20metadata%20example%20with%20Next.js%20and%20modern%20design&image_size=landscape_16_9" 
                    alt="Twitter 卡片图片" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-800 mb-1">社交媒体元数据示例</h4>
                <p className="text-gray-600 text-sm mb-2">学习如何在 Next.js 中配置优化的社交媒体分享元数据</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <span>nextjsdemo.com</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Twitter summary_large_image 卡片预览</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">元数据配置代码</h2>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '社交媒体元数据示例',
  description: '展示如何配置 Open Graph 和 Twitter 卡片元数据',
  openGraph: {
    title: '社交媒体元数据示例',
    description: '学习如何在 Next.js 中配置优化的社交媒体分享元数据',
    url: 'https://example.com/metadata/social',
    siteName: 'Next.js 元数据演示',
    images: [
      {
        url: 'https://example.com/social-image.jpg',
        width: 1200,
        height: 630,
        alt: '社交媒体元数据示例',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '社交媒体元数据示例',
    description: '学习如何在 Next.js 中配置优化的社交媒体分享元数据',
    images: ['https://example.com/social-image.jpg'],
    creator: '@nextjsdemo',
  },
};`}</pre>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">最佳实践</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>使用高质量、相关的图片，尺寸至少为 1200×630px</li>
            <li>标题长度控制在 60 个字符以内，确保在所有平台上完整显示</li>
            <li>描述长度控制在 150-200 个字符之间</li>
            <li>为不同的社交媒体平台优化内容</li>
            <li>使用绝对 URL 而不是相对 URL</li>
            <li>定期测试元数据在不同平台上的显示效果</li>
          </ul>
          <div className="mt-6">
            <p className="text-gray-600 mb-4">
              可以使用以下工具测试元数据：
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://developers.facebook.com/tools/debug/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Facebook 调试工具
              </a>
              <a 
                href="https://cards-dev.twitter.com/validator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-colors"
              >
                Twitter 卡片验证器
              </a>
              <a 
                href="https://metatags.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Meta Tags 测试工具
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
