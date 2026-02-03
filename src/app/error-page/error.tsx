'use client';

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">错误处理示例</h1>
      <div className="bg-red-50 p-8 rounded-lg border border-red-200">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-red-600 text-2xl font-bold">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-red-800">出错了！</h2>
        </div>
        <div className="mb-6">
          <p className="text-red-700 font-medium mb-2">错误信息：</p>
          <p className="text-gray-700 bg-white p-4 rounded border border-gray-200">{error.message}</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-600">
            这是一个演示 Next.js 错误边界功能的页面。
            当页面发生错误时，<code className="bg-gray-100 px-2 py-1 rounded">error.tsx</code> 组件会捕获错误并显示友好的错误信息。
          </p>
        </div>
        <button 
          onClick={() => reset()} 
          className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium"
        >
          重试
        </button>
      </div>
    </div>
  );
}