// app/data-fetching/ssg/[id]/page.tsx
// 静态生成(SSG)演示页面

// 模拟博客文章数据
interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

// 模拟获取所有文章ID的API
async function fetchAllPostIds() {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

// 模拟获取单个文章的API
async function fetchPostById(id: string): Promise<Post> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const posts: Post[] = [
    {
      id: '1',
      title: '静态生成文章 #1',
      content: '这是一篇使用静态生成(SSG)技术创建的文章。在构建时，Next.js会预先生成这个页面。',
      date: '2024-01-20'
    },
    {
      id: '2',
      title: '静态生成文章 #2',
      content: '静态生成的页面具有极高的性能，因为它们在构建时就已经生成并可以直接提供给用户。',
      date: '2024-01-21'
    },
    {
      id: '3',
      title: '静态生成文章 #3',
      content: '使用generateStaticParams可以在构建时为动态路由预先生成所有可能的页面。',
      date: '2024-01-22'
    }
  ];
  
  const post = posts.find(p => p.id === id);
  if (!post) {
    throw new Error(`Post with id ${id} not found`);
  }
  
  return post;
}

// 在构建时预生成所有可能的页面
// 这是SSG的核心特性

export async function generateStaticParams() {
  const postIds = await fetchAllPostIds();
  
  return postIds.map(({ id }) => ({
    id,
  }));
}

export default async function SSGPostPage({ params }: { params: Promise<{ id: string }> }) {
  // 在Next.js 16+中，params是一个Promise，需要解包
  const resolvedParams = await params;
  const post = await fetchPostById(resolvedParams.id);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">静态生成(SSG)演示</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-2">
            文章 ID: {post.id}
          </span>
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm ml-2">
            {post.date}
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
        <p className="text-gray-600 leading-relaxed">{post.content}</p>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <strong>技术说明：</strong>此页面使用 <code className="bg-gray-100 px-2 py-1 rounded">generateStaticParams</code> 在构建时预生成，
            属于静态生成(SSG)技术。页面内容在构建时就已确定，不会在请求时重新生成。
          </p>
        </div>
      </div>
      <div className="mt-6">
        <a href="/data-fetching" className="text-blue-600 hover:text-blue-800 underline">返回数据获取主页</a>
      </div>
    </div>
  );
}