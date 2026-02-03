import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Image
          className="mx-auto dark:invert mb-6"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Next.js 核心知识点</h1>
        <p className="text-lg text-gray-600">
          探索 Next.js 框架的所有核心功能和最佳实践
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="路由系统"
          description="了解 App Router 的文件系统路由、动态路由、嵌套路由和布局等功能"
          href="/routing"
        />
        <Card
          title="数据获取"
          description="掌握静态生成(SSG)、服务器端渲染(SSR)和增量静态再生(ISR)等数据获取方法"
          href="/data-fetching"
        />
        <Card
          title="API 路由"
          description="学习如何创建和使用 Next.js 内置的 API 路由系统"
          href="/api"
        />
        <Card
          title="样式方案"
          description="探索 Tailwind CSS、CSS Modules、styled-jsx 等样式解决方案"
          href="/styling"
        />
        <Card
          title="图片优化"
          description="使用 next/image 组件实现图片懒加载、响应式和优化"
          href="/image-opt"
        />
        <Card
          title="元数据管理"
          description="学习如何配置页面元数据、Open Graph 和 Twitter 卡片"
          href="/metadata"
        />
        <Card
          title="错误处理"
          description="了解如何处理错误、创建自定义错误页面和实现错误边界"
          href="/error-handling"
        />
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}