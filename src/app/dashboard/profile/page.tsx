export default function DashboardProfile() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">个人资料</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-6">
          这是仪表板的个人资料页面，它共享了仪表板布局的侧边栏。
          嵌套路由允许我们创建层次化的页面结构，同时共享公共的布局组件。
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-3xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600 mb-4">john.doe@example.com</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">职位</h3>
                <p className="text-gray-700">前端开发工程师</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">加入时间</h3>
                <p className="text-gray-700">2023-01-15</p>
              </div>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              编辑资料
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}