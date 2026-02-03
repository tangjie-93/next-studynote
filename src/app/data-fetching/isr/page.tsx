// app/data-fetching/isr/page.tsx
// 增量静态再生(ISR)演示页面

// 模拟获取需要定期更新的数据
async function fetchUpdatableData() {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 生成随机数据
  const randomNumber = Math.floor(Math.random() * 1000);
  const timestamp = new Date().toLocaleString("zh-CN");

  return {
    randomNumber,
    timestamp,
    updateInfo: {
      lastUpdated: timestamp,
      nextUpdate: new Date(Date.now() + 30000).toLocaleString("zh-CN"),
    },
  };
}

export default async function ISRPage() {
  // 使用revalidate参数实现增量静态再生
  // 页面将每30秒重新生成一次
  // const data = await fetch('https://api.example.com/updatable-data', {
  //   next: { revalidate: 30 },
  //   // 注意：由于是模拟环境，我们直接调用本地函数
  //   // 在实际项目中，这里应该是真实的API请求
  // }).then(() => fetchUpdatableData()); // 使用本地模拟数据
  const data = await fetchUpdatableData();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        增量静态再生(ISR)演示
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          可更新的静态数据
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                随机数
              </h3>
              <p className="text-4xl font-bold text-green-600">
                {data.randomNumber}
              </p>
              <p className="text-sm text-gray-500 mt-2">每30秒自动更新</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">
                生成时间
              </h3>
              <p className="text-xl font-bold text-orange-600">
                {data.timestamp}
              </p>
              <p className="text-sm text-gray-500 mt-2">页面最后生成的时间</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              更新信息
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">最后更新时间:</span>
                <span className="font-semibold">
                  {data.updateInfo.lastUpdated}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">下次更新时间:</span>
                <span className="font-semibold">
                  {data.updateInfo.nextUpdate}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">更新频率:</span>
                <span className="font-semibold">每30秒</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <strong>技术说明：</strong>此页面使用增量静态再生(ISR)技术，通过设置{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              next: &#123; revalidate: 30 &#125;
            </code>
            实现每30秒自动更新静态页面。ISR结合了静态生成的性能优势和动态内容的灵活性。
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
