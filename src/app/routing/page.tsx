import Link from "next/link";

export default function RoutingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Next.js 路由系统</h1>
      
      <div className="space-y-8">
        <Section title="App Router 概述">
          <p className="text-gray-600 mb-4">
            Next.js 13+ 引入了 App Router，使用文件系统路由，基于 React Server Components。
          </p>
          <p className="text-gray-600">
            主要特点：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>文件系统驱动的路由</li>
            <li>React Server Components (默认)</li>
            <li>嵌套布局和模板</li>
            <li>加载状态和错误处理</li>
            <li>API 路由集成</li>
          </ul>
        </Section>

        <Section title="基础路由">
          <p className="text-gray-600 mb-4">
            基础路由通过在 <code className="bg-gray-100 px-2 py-1 rounded">app</code> 目录下创建文件和文件夹来定义：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-600">app/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">page.tsx</span> → <span className="text-green-600">/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">about/</span></div>
            <div className="ml-8 mb-2"><span className="text-blue-600">page.tsx</span> → <span className="text-green-600">/about</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">contact/</span></div>
            <div className="ml-8"><span className="text-blue-600">page.tsx</span> → <span className="text-green-600">/contact</span></div>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 实际演示</h3>
            <p className="text-blue-700 mb-4">点击以下链接体验基础路由：</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">首页</Link>
              <Link href="/about" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">关于我们</Link>
              <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">联系我们</Link>
            </div>
          </div>
        </Section>

        <Section title="动态路由">
          <p className="text-gray-600 mb-4">
            动态路由使用方括号 <code className="bg-gray-100 px-2 py-1 rounded">[]</code> 来定义：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-600">app/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">blog/</span></div>
            <div className="ml-8 mb-2"><span className="text-blue-600">[id]/</span></div>
            <div className="ml-12"><span className="text-blue-600">page.tsx</span> → <span className="text-green-600">/blog/123</span></div>
          </div>
          <p className="text-gray-600 mt-4">
            在页面组件中，可以通过 <code className="bg-gray-100 px-2 py-1 rounded">params</code> 属性访问动态路由参数：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default function BlogPost({ params }: { params: { id: string } }) {
  return <div>Blog Post ID: {params.id}</div>;
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 实际演示</h3>
            <p className="text-blue-700 mb-4">点击以下链接体验动态路由：</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog/1" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">博客文章 #1</Link>
              <Link href="/blog/2" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">博客文章 #2</Link>
              <Link href="/blog/3" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">博客文章 #3</Link>
            </div>
          </div>
        </Section>

        <Section title="嵌套路由">
          <p className="text-gray-600 mb-4">
            嵌套路由允许创建层次化的路由结构：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-600">app/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">dashboard/</span></div>
            <div className="ml-8 mb-2"><span className="text-blue-600">layout.tsx</span> → 仪表板布局</div>
            <div className="ml-8 mb-2"><span className="text-blue-600">page.tsx</span> → <span className="text-green-600">/dashboard</span></div>
            <div className="ml-8 mb-2"><span className="text-blue-600">settings/</span></div>
            <div className="ml-12"><span className="text-blue-600">page.tsx</span> → <span className="text-green-600">/dashboard/settings</span></div>
            <div className="ml-8"><span className="text-blue-600">profile/</span></div>
            <div className="ml-12"><span className="text-blue-600">page.tsx</span> → <span className="text-green-600">/dashboard/profile</span></div>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 实际演示</h3>
            <p className="text-blue-700 mb-4">点击以下链接体验嵌套路由：</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">仪表板首页</Link>
              <Link href="/dashboard/settings" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">设置页面</Link>
              <Link href="/dashboard/profile" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">个人资料</Link>
            </div>
          </div>
        </Section>

        <Section title="布局组件">
          <p className="text-gray-600 mb-4">
            布局组件 (<code className="bg-gray-100 px-2 py-1 rounded">layout.tsx</code>) 用于共享 UI 元素：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default function DashboardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="/dashboard">首页</a></li>
            <li><a href="/dashboard/settings">设置</a></li>
            <li><a href="/dashboard/profile">个人资料</a></li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        {children} {/* 子页面内容 */}
      </main>
    </div>
  );
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 实际演示</h3>
            <p className="text-blue-700">访问 <Link href="/dashboard" className="text-blue-600 underline">仪表板</Link> 页面可以看到布局组件的实际效果，侧边栏会在所有子页面中共享显示。</p>
          </div>
        </Section>

        <Section title="加载状态">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">loading.tsx</code> 可以为路由添加加载状态：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">加载中...</p>
    </div>
  );
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 实际演示</h3>
            <p className="text-blue-700 mb-4">请通过以下链接（客户端导航）访问慢加载页面，以看到加载状态：</p>
            <Link href="/slow-page" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">慢加载页面</Link>
            <p className="text-blue-700 mt-4">
              <strong>注意：</strong>如果直接刷新 <code className="bg-gray-100 px-2 py-1 rounded">/slow-page</code> 页面，可能不会看到加载状态，
              因为这是服务端渲染的直接请求。请从本页面点击链接导航过去。
            </p>
          </div>
        </Section>

        <Section title="错误处理">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">error.tsx</code> 可以为路由添加错误处理：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`'use client';

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-red-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-red-800 mb-2">出错了！</h2>
      <p className="text-red-700 mb-4">{error.message}</p>
      <button 
        onClick={() => reset()} 
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        重试
      </button>
    </div>
  );
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 实际演示</h3>
            <p className="text-blue-700 mb-4">访问会出错的页面：</p>
            <Link href="/error-page" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">错误页面</Link>
          </div>
        </Section>
      </div>
    </div>
  );
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