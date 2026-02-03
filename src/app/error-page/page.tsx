'use client';

import { useEffect } from 'react';

export default function ErrorPage() {
  // 在客户端渲染时抛出错误来演示错误边界
  useEffect(() => {
    // 故意抛出一个错误来演示错误边界
    throw new Error('这是一个演示错误边界功能的示例错误！');
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">错误页面</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">这个页面不会显示，因为上面的代码会抛出一个错误。</p>
      </div>
    </div>
  );
}