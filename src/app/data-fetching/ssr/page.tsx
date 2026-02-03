// app/data-fetching/ssr/page.tsx
// 服务器端渲染(SSR)演示页面

// 模拟获取实时数据的API
async function fetchRealtimeData() {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 生成随机数据，确保每次请求都不同
  const randomNumber = Math.floor(Math.random() * 1000);
  const timestamp = new Date().toLocaleString("zh-CN");

  return {
    randomNumber,
    timestamp,
    serverInfo: {
      name: "Next.js Server",
      version: "16.1.6",
      environment: "development",
    },
  };
}

export default async function SSRPage() {
  // 使用cache: 'no-store'确保每次请求都重新获取数据
  // 这是SSR的核心特性
  // const data = await fetch("https://api.example.com/realtime", {
  //   cache: "no-store",
  //   // 注意：由于是模拟环境，我们直接调用本地函数
  //   // 在实际项目中，这里应该是真实的API请求
  // }).then(() => fetchRealtimeData()); // 使用本地模拟数据
  const data = await fetchRealtimeData();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        服务器端渲染(SSR)演示
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">实时数据</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                随机数
              </h3>
              <p className="text-4xl font-bold text-blue-600">
                {data.randomNumber}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                每次刷新页面都会生成新的随机数
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                服务器时间
              </h3>
              <p className="text-xl font-bold text-purple-600">
                {data.timestamp}
              </p>
              <p className="text-sm text-gray-500 mt-2">显示服务器当前时间</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              服务器信息
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">服务器名称:</span>
                <span className="font-semibold">{data.serverInfo.name}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Next.js 版本:</span>
                <span className="font-semibold">{data.serverInfo.version}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">运行环境:</span>
                <span className="font-semibold">
                  {data.serverInfo.environment}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <strong>技术说明：</strong>此页面使用服务器端渲染(SSR)技术，通过设置{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              cache: &apos;no-store&apos;
            </code>
            确保每次请求都会在服务器端重新渲染页面并获取最新数据。
          </p>
        </div>
      </div>
      <div className="mt-6">
        <a
          href="/data-fetching"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          返回数据获取主页
        </a>
      </div>
    </div>
  );
}
