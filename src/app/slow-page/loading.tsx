export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-12">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      <p className="text-xl text-gray-600">加载中...</p>
      <p className="text-sm text-gray-500 mt-2">这是一个演示加载状态的页面，请稍候...</p>
    </div>
  );
}