export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  // 在Next.js 16+中，params是一个Promise，需要解包
  const resolvedParams = await params;
  console.log(resolvedParams);
  
  // 模拟博客文章数据
  const posts = [
    { id: '1', title: 'Next.js 13 新特性介绍', content: 'Next.js 13 引入了 App Router、React Server Components 等众多新特性，彻底改变了 Next.js 的开发方式。' },
    { id: '2', title: '如何使用 Next.js 的静态生成', content: '静态生成可以提高网站性能和 SEO，本文将详细介绍如何在 Next.js 中使用 SSG 技术。' },
    { id: '3', title: 'Next.js API 路由的最佳实践', content: 'Next.js 内置的 API 路由系统非常强大，本文将分享一些 API 路由的最佳实践。' }
  ];
  
  // 根据动态路由参数查找文章
  const post = posts.find(p => p.id === resolvedParams.id);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">博客文章</h1>
      {post ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-2">
              文章 ID: {post.id}
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              这是一个动态路由示例，路径为 <code className="bg-gray-100 px-2 py-1 rounded">/blog/{resolvedParams.id}</code>
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">文章未找到</h2>
          <p className="text-yellow-700">没有找到 ID 为 {resolvedParams.id} 的博客文章。</p>
        </div>
      )}
    </div>
  );
}