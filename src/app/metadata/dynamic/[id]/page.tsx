import type { Metadata, ResolvingMetadata } from 'next';

// 模拟从数据库获取数据
async function fetchPost(id: string) {
  // 模拟API调用延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // 模拟数据
  const posts: Record<string, {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
  }> = {
    '1': {
      id: '1',
      title: 'Next.js 13 新特性介绍',
      excerpt: '探索 Next.js 13 中的 App Router、服务器组件等新特性',
      author: '张三',
      date: '2024-01-15',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Next.js%2013%20features%20showcase%20with%20modern%20UI&image_size=landscape_16_9'
    },
    '2': {
      id: '2',
      title: 'React Server Components 实践指南',
      excerpt: '学习如何在 Next.js 中使用 React Server Components 提升性能',
      author: '李四',
      date: '2024-01-10',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=React%20Server%20Components%20tutorial&image_size=landscape_16_9'
    },
    '3': {
      id: '3',
      title: 'Next.js 性能优化技巧',
      excerpt: '掌握 Next.js 应用性能优化的关键技巧和最佳实践',
      author: '王五',
      date: '2024-01-05',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Next.js%20performance%20optimization%20tips&image_size=landscape_16_9'
    }
  };
  
  return posts[id] || null;
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // 解包params Promise
  const resolvedParams = await params;
  // 从数据库获取数据
  const post = await fetchPost(resolvedParams.id);
  
  if (!post) {
    return {
      title: '文章不存在',
      description: '抱歉，您访问的文章不存在',
    };
  }
  
  // 可以从父布局继承元数据
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: post.title,
    description: post.excerpt,
    authors: [
      { name: post.author },
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://example.com/metadata/dynamic/${resolvedParams.id}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
      locale: 'zh_CN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function DynamicMetadataPage({ params }: Props) {
  // 解包params Promise
  const resolvedParams = await params;
  const post = await fetchPost(resolvedParams.id);
  
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">文章不存在</h1>
        <p className="text-gray-600">抱歉，您访问的文章不存在。</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 mb-6">
          <span className="mr-4">作者：{post.author}</span>
          <span>发布日期：{post.date}</span>
        </div>
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-600 text-lg mb-6">{post.excerpt}</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">动态元数据示例说明：</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>页面标题和描述根据文章内容动态生成</li>
            <li>Open Graph 标签包含文章的标题、描述、图片等信息</li>
            <li>Twitter 卡片配置为 summary_large_image 类型</li>
            <li>作者信息也包含在元数据中</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">其他文章：</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/metadata/dynamic/1" className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800">Next.js 13 新特性介绍</h3>
          </a>
          <a href="/metadata/dynamic/2" className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800">React Server Components 实践指南</h3>
          </a>
          <a href="/metadata/dynamic/3" className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800">Next.js 性能优化技巧</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
