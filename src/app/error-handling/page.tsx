'use client';

import { useState } from 'react';

export default function ErrorHandlingPage() {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [shouldThrowServer, setShouldThrowServer] = useState(false);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Next.js 错误处理</h1>
      
      <div className="space-y-8">
        <Section title="错误处理概述">
          <p className="text-gray-600 mb-4">
            Next.js 提供了多种错误处理机制，用于处理应用中的错误：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>错误边界</strong>：使用 <code className="bg-gray-100 px-2 py-1 rounded">error.tsx</code> 文件捕获路由错误</li>
            <li><strong>全局错误页面</strong>：使用 <code className="bg-gray-100 px-2 py-1 rounded">app/global-error.tsx</code> 处理全局错误</li>
            <li><strong>加载状态</strong>：使用 <code className="bg-gray-100 px-2 py-1 rounded">loading.tsx</code> 显示加载状态</li>
            <li><strong>客户端错误处理</strong>：使用 React 的错误处理机制</li>
          </ul>
        </Section>

        <Section title="错误边界 (error.tsx)">
          <p className="text-gray-600 mb-4">
            Next.js 13+ 引入了基于文件系统的错误边界，可以在任何路由段创建 <code className="bg-gray-100 px-2 py-1 rounded">error.tsx</code> 文件：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-600">app/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">error-handling/</span></div>
            <div className="ml-8"><span className="text-blue-600">error.tsx</span> → 错误边界组件</div>
          </div>
          
          <div className="mt-4 bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`'use client';

export default function Error({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
      <h2 className="text-xl font-bold text-red-800 mb-2">出错了！</h2>
      <p className="text-red-700 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        重试
      </button>
    </div>
  );
}`}</pre>
          </div>
        </Section>

        <Section title="客户端错误示例">
          <p className="text-gray-600 mb-4">
            点击下面的按钮可以触发一个客户端错误，展示错误边界的效果：
          </p>
          
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setShouldThrow(true)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              触发客户端错误
            </button>
            
            {shouldThrow && <ErrorComponent />}
          </div>
        </Section>

        <Section title="全局错误处理 (global-error.tsx)">
          <p className="text-gray-600 mb-4">
            可以在 <code className="bg-gray-100 px-2 py-1 rounded">app</code> 目录下创建 <code className="bg-gray-100 px-2 py-1 rounded">global-error.tsx</code> 文件来处理全局错误：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`'use client';

export default function GlobalError({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="zh">
      <body className="p-6">
        <div className="max-w-4xl mx-auto p-6 bg-red-50 border border-red-200 rounded-lg">
          <h1 className="text-2xl font-bold text-red-800 mb-2">全局错误</h1>
          <p className="text-red-700 mb-4">抱歉，应用程序遇到了错误。</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            刷新页面
          </button>
        </div>
      </body>
    </html>
  );
}`}</pre>
          </div>
        </Section>

        <Section title="加载状态 (loading.tsx)">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">loading.tsx</code> 文件可以为路由段显示加载状态：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default function Loading() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="ml-4 text-gray-600">加载中...</p>
    </div>
  );
}`}</pre>
          </div>
        </Section>

        <Section title="服务器错误处理">
          <p className="text-gray-600 mb-4">
            对于服务器组件中的错误，可以使用 <code className="bg-gray-100 px-2 py-1 rounded">error.tsx</code> 捕获，也可以使用 <code className="bg-gray-100 px-2 py-1 rounded">try/catch</code> 手动处理：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// 服务器组件中的错误处理
export default async function ServerComponent() {
  try {
    const data = await fetchData();
    return <div>{data}</div>;
  } catch (error) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-bold text-yellow-800">数据获取失败</h3>
        <p className="text-yellow-700">请稍后重试</p>
      </div>
    );
  }
}`}</pre>
          </div>
        </Section>

        <Section title="not-found.tsx (404 页面)">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">not-found.tsx</code> 文件可以创建自定义的 404 页面：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">404 - 页面未找到</h2>
      <p className="text-gray-600 mb-4">抱歉，您访问的页面不存在。</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        返回首页
      </a>
    </div>
  );
}`}</pre>
          </div>
        </Section>

        <Section title="错误恢复">
          <p className="text-gray-600 mb-4">
            错误边界组件提供了 <code className="bg-gray-100 px-2 py-1 rounded">reset</code> 函数，可以用于恢复错误状态：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`'use client';

export default function Error({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
      <h2 className="text-xl font-bold text-red-800 mb-2">出错了！</h2>
      <p className="text-red-700 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        重试
      </button>
    </div>
  );
}`}</pre>
          </div>
        </Section>
      </div>
    </div>
  );
}

// 用于触发错误的组件
function ErrorComponent(): React.ReactNode {
  // 这将抛出一个错误
  throw new Error('这是一个客户端错误示例');
  // 以下返回语句永远不会执行，但为了TypeScript类型检查需要添加
  return null;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200 pb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {children}
    </div>
  );
}