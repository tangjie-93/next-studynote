export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">联系我们</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          这是一个演示 Next.js 基础路由功能的页面。
          该页面通过在 <code className="bg-gray-100 px-2 py-1 rounded">app/contact/</code> 目录下创建 <code className="bg-gray-100 px-2 py-1 rounded">page.tsx</code> 文件实现。
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">联系方式</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="w-12 text-gray-500">邮箱：</span>
              <span className="text-gray-700">contact@example.com</span>
            </div>
            <div className="flex items-center">
              <span className="w-12 text-gray-500">电话：</span>
              <span className="text-gray-700">+86 123 4567 8910</span>
            </div>
            <div className="flex items-center">
              <span className="w-12 text-gray-500">地址：</span>
              <span className="text-gray-700">北京市海淀区示例路123号</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}