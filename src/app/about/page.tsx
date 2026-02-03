export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">关于我们</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          这是一个演示 Next.js 基础路由功能的页面。
          该页面通过在 <code className="bg-gray-100 px-2 py-1 rounded">app/about/</code> 目录下创建 <code className="bg-gray-100 px-2 py-1 rounded">page.tsx</code> 文件实现。
        </p>
        <p className="text-gray-600">
          基础路由是 Next.js 中最简单的路由形式，每个文件夹对应一个路由路径，
          <code className="bg-gray-100 px-2 py-1 rounded">page.tsx</code> 文件则是该路由的入口组件。
        </p>
      </div>
    </div>
  );
}