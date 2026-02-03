import Link from "next/link";

export default async function DataFetchingPage() {
  // 示例：在服务端获取数据
  const posts = await fetchPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Next.js 数据获取
      </h1>

      <div className="space-y-8">
        <Section title="数据获取方法">
          <p className="text-gray-600 mb-4">
            Next.js 提供了多种数据获取方法，适用于不同的使用场景：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>静态生成 (SSG)</strong>：构建时生成静态页面
            </li>
            <li>
              <strong>服务器端渲染 (SSR)</strong>：每个请求时渲染页面
            </li>
            <li>
              <strong>增量静态再生 (ISR)</strong>：静态页面的按需更新
            </li>
            <li>
              <strong>客户端渲染 (CSR)</strong>：在浏览器中获取数据
            </li>
          </ul>
        </Section>

        <Section title="服务端组件数据获取">
          <p className="text-gray-600 mb-4">
            在 App Router 中，默认使用 React Server
            Components，可以直接在组件中使用{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">async/await</code>{" "}
            获取数据：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default async function BlogPage() {
            // 直接在服务端获取数据
            const posts = await fetch('https://api.example.com/posts').then(res => res.json());
            
            return (
              <div>
                {posts.map(post => (
                  <div key={post.id}>{post.title}</div>
                ))}
              </div>
            );
          }`}</pre>
          </div>
        </Section>

        <Section title="静态生成 (SSG)">
          <p className="text-gray-600 mb-4">
            使用{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              generateStaticParams
            </code>{" "}
            可以在构建时预生成静态页面：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// app/blog/[id]/page.tsx

export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return posts.map(post => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await fetch('https://api.example.com/posts/' + params.id).then(res => res.json());
  
  return <div>{post.title}</div>;
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              💡 实际演示
            </h3>
            <p className="text-blue-700 mb-4">点击以下链接体验静态生成：</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/data-fetching/ssg/1"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                静态文章 #1
              </Link>
              <Link
                href="/data-fetching/ssg/2"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                静态文章 #2
              </Link>
              <Link
                href="/data-fetching/ssg/3"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                静态文章 #3
              </Link>
            </div>
          </div>
        </Section>

        <Section title="服务器端渲染 (SSR)">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">fetch</code>{" "}
            并设置{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              cache: &apos;no-store&apos;
            </code>{" "}
            可以实现服务器端渲染：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default async function DashboardPage() {
  // 每次请求都会重新获取数据
  const data = await fetch('https://api.example.com/dashboard', {
    cache: 'no-store'
  }).then(res => res.json());
  
  return <div>{data.stats}</div>;
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              💡 实际演示
            </h3>
            <p className="text-blue-700 mb-4">点击以下链接体验服务器端渲染：</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/data-fetching/ssr"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                服务器端渲染页面
              </Link>
            </div>
          </div>
        </Section>

        <Section title="增量静态再生 (ISR)">
          <p className="text-gray-600 mb-4">
            使用{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">revalidate</code>{" "}
            参数可以实现增量静态再生：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`export default async function BlogPage() {
  // 每60秒重新生成一次页面
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }
  }).then(res => res.json());
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              💡 实际演示
            </h3>
            <p className="text-blue-700 mb-4">点击以下链接体验增量静态生成：</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/data-fetching/isr"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                增量静态再生页面
              </Link>
            </div>
          </div>
        </Section>

        <Section title="客户端数据获取">
          <p className="text-gray-600 mb-4">
            对于需要在客户端获取的数据，可以使用 React 的{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">useEffect</code>{" "}
            或第三方库（如 React Query）：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// 使用客户端组件 ("use client")
"use client";

import { useState, useEffect } from "react";

export default function ClientPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.example.com/data');
      const result = await res.json();
      setData(result);
      setLoading(false);
    }
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return <div>{data.message}</div>;
}`}</pre>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              💡 实际演示
            </h3>
            <p className="text-blue-700 mb-4">
              点击以下链接体验客户端数据获取：
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/data-fetching/csr"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                客户端生成页面
              </Link>
            </div>
          </div>
        </Section>

        <Section title="数据获取示例">
          <p className="text-gray-600 mb-4">
            以下是从模拟 API 获取的博客文章：
          </p>
          <div className="space-y-4">
            {posts.map((post: Post) => (
              <div
                key={post.id}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">{post.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

// 定义文章类型
interface Post {
  id: number;
  title: string;
  body: string;
}

// 模拟数据获取函数
async function fetchPosts(): Promise<Post[]> {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      title: "Next.js 13 新特性介绍",
      body: "Next.js 13 引入了 App Router、React Server Components 等众多新特性...",
    },
    {
      id: 2,
      title: "如何使用 Next.js 的静态生成",
      body: "静态生成可以提高网站性能和 SEO，本文将介绍如何在 Next.js 中使用...",
    },
    {
      id: 3,
      title: "Next.js API 路由的最佳实践",
      body: "Next.js 内置的 API 路由系统非常强大，本文将分享一些最佳实践...",
    },
  ];
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
