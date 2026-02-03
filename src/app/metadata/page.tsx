export default function MetadataPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Next.js 元数据管理</h1>
      
      <div className="space-y-8">
        <Section title="元数据概述">
          <p className="text-gray-600 mb-4">
            Next.js 允许通过 <code className="bg-gray-100 px-2 py-1 rounded">metadata</code> 对象和 <code className="bg-gray-100 px-2 py-1 rounded">generateMetadata</code> 函数来管理页面的元数据，包括：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>页面标题和描述</li>
            <li>Open Graph 标签（用于社交媒体分享）</li>
            <li>Twitter 卡片</li>
            <li>其他 HTML 元标签</li>
          </ul>
        </Section>

        <Section title="静态元数据">
          <p className="text-gray-600 mb-4">
            可以通过导出 <code className="bg-gray-100 px-2 py-1 rounded">metadata</code> 对象来定义静态元数据：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js 元数据示例',
  description: '学习如何在 Next.js 中管理元数据',
};

export default function Page() {
  return <div>Page content</div>;
}`}</pre>
          </div>
        </Section>

        <Section title="动态元数据">
          <p className="text-gray-600 mb-4">
            对于需要动态生成的元数据，可以使用 <code className="bg-gray-100 px-2 py-1 rounded">generateMetadata</code> 函数：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // 从数据库获取数据
  const post = await fetchPost(params.id);
  
  // 可以从父布局继承元数据
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [...previousImages, post.image],
    },
  };
}

export default function Post({ params }: Props) {
  // ...
}`}</pre>
          </div>
        </Section>

        <Section title="元数据字段">
          <p className="text-gray-600 mb-4">
            <code className="bg-gray-100 px-2 py-1 rounded">Metadata</code> 类型支持多种字段：
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">基本字段</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
  keywords: ['关键词1', '关键词2'],
  authors: [
    { name: '作者名称' },
  ],
  creator: '创建者',
  publisher: '发布者',
  alternates: {
    canonical: 'https://example.com/page',
  },
  robots: {
    index: true,
    follow: true,
  },
};`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Open Graph</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`export const metadata: Metadata = {
  openGraph: {
    title: 'Open Graph 标题',
    description: 'Open Graph 描述',
    url: 'https://example.com/page',
    siteName: '网站名称',
    images: [
      {
        url: 'https://example.com/image.jpg',
        width: 1200,
        height: 630,
        alt: '图片描述',
      },
    ],
    locale: 'zh_CN',
    type: 'article',
  },
};`}</pre>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Twitter 卡片</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`export const metadata: Metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter 标题',
    description: 'Twitter 描述',
    images: ['https://example.com/image.jpg'],
    creator: '@username',
  },
};`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">视图端口和主题</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: {
    color: '#000000',
    media: '(prefers-color-scheme: dark)',
  },
};`}</pre>
              </div>
            </div>
          </div>
        </Section>

        <Section title="标题模板">
          <p className="text-gray-600 mb-4">
            可以在布局组件中定义标题模板，为所有子页面统一添加前缀或后缀：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | 我的网站',
    default: '我的网站', // 默认标题
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}

// app/about/page.tsx
export const metadata: Metadata = {
  title: '关于我们', // 最终标题: "关于我们 | 我的网站"
};

export default function AboutPage() {
  return <div>关于我们</div>;
}`}</pre>
          </div>
        </Section>

        <Section title="自定义元标签">
          <p className="text-gray-600 mb-4">
            对于不包含在 <code className="bg-gray-100 px-2 py-1 rounded">Metadata</code> 类型中的自定义标签，可以使用 <code className="bg-gray-100 px-2 py-1 rounded">other</code> 字段：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export const metadata: Metadata = {
  other: {
    'application-name': '我的应用',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'google-site-verification': 'verification-code',
  },
};`}</pre>
          </div>
        </Section>

        <Section title=" robots 元标签">
          <p className="text-gray-600 mb-4">
            可以使用 <code className="bg-gray-100 px-2 py-1 rounded">robots</code> 字段控制搜索引擎的爬取和索引行为：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export const metadata: Metadata = {
  robots: {
    index: true,      // 是否索引页面
    follow: true,     // 是否跟踪页面中的链接
    nocache: true,    // 是否允许缓存
    googleBot: {
      index: true,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
};`}</pre>
          </div>
        </Section>

        <Section title=" favicon 和图标">
          <p className="text-gray-600 mb-4">
            可以在 <code className="bg-gray-100 px-2 py-1 rounded">app</code> 目录中添加 <code className="bg-gray-100 px-2 py-1 rounded">favicon.ico</code>、<code className="bg-gray-100 px-2 py-1 rounded">icon.png</code> 和 <code className="bg-gray-100 px-2 py-1 rounded">apple-icon.png</code> 等文件，Next.js 会自动识别并使用它们：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-600">app/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">favicon.ico</span> → Favicon</div>
            <div className="ml-4 mb-2"><span className="text-blue-600">icon.png</span> → 16x16, 32x32, 48x48 图标</div>
            <div className="ml-4"><span className="text-blue-600">apple-icon.png</span> → Apple Touch 图标</div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200 pb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {children}
    </div>
  );
}