export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard flex">
      <aside className="sidebar w-64 bg-gray-800 text-white h-screen p-4">
        <div className="sidebar-header mb-8">
          <h2 className="text-xl font-bold">仪表板</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a 
                href="/dashboard" 
                className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                首页
              </a>
            </li>
            <li>
              <a 
                href="/dashboard/settings" 
                className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                设置
              </a>
            </li>
            <li>
              <a 
                href="/dashboard/profile" 
                className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                个人资料
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content flex-1 p-8">
        {children} {/* 子页面内容 */}
      </main>
    </div>
  );
}