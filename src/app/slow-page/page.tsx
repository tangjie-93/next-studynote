export default async function SlowPage() {
  // 增加延迟时间让加载状态更明显
  await new Promise(resolve => setTimeout(resolve, 3000));

  // 模拟获取的数据
  const data = {
    title: "慢加载页面示例",
    description: "这个页面演示了 Next.js 的加载状态功能。当页面需要较长时间加载时，loading.tsx 组件会显示一个加载指示器。",
    stats: {
      visitors: 1234,
      pageviews: 5678,
      averageTime: "3.2s"
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">慢加载页面</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{data.title}</h2>
        <p className="text-gray-600 mb-6">{data.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">总访客数</h3>
            <p className="text-3xl font-bold text-blue-600">{data.stats.visitors}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">页面浏览量</h3>
            <p className="text-3xl font-bold text-green-600">{data.stats.pageviews}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">平均停留时间</h3>
            <p className="text-3xl font-bold text-purple-600">{data.stats.averageTime}</p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            这个页面使用了 <code className="bg-gray-100 px-2 py-1 rounded">loading.tsx</code> 组件来显示加载状态，
            当数据获取需要较长时间时，会显示一个旋转加载动画。
          </p>
        </div>
      </div>
    </div>
  );
}