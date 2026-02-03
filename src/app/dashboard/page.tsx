export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">仪表板首页</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-6">
          这是一个嵌套路由的示例页面，它使用了 <code className="bg-gray-100 px-2 py-1 rounded">dashboard/layout.tsx</code> 布局组件。
          侧边栏是通过布局组件共享的，在所有仪表板子页面中都会显示。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">总用户数</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">今日活跃</h3>
            <p className="text-3xl font-bold text-green-600">456</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">总收入</h3>
            <p className="text-3xl font-bold text-purple-600">$7,890</p>
          </div>
        </div>
      </div>
    </div>
  );
}