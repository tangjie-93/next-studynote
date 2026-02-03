'use client';

import { useState, useEffect } from 'react';

export default function ApiPage() {
  const [helloData, setHelloData] = useState<Record<string, any> | null>(null);
  const [postData, setPostData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 示例1：调用内部API路由的GET方法
        const helloResponse = await fetch('/api/hello');
        const helloResult = await helloResponse.json();
        setHelloData(helloResult);
        
        // 示例2：调用内部API路由的POST方法
        const postResponse = await fetch('/api/hello', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
        });
        const postResult = await postResponse.json();
        setPostData(postResult);
        
        setLoading(false);
      } catch (err) {
        setError('获取API数据失败');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Next.js API 路由</h1>
      
      <div className="space-y-8">
        <Section title="API 路由概述">
          <p className="text-gray-600 mb-4">
            Next.js 允许在 <code className="bg-gray-100 px-2 py-1 rounded">app/api</code> 目录下创建 API 路由，用于构建后端 API 端点。
          </p>
          <p className="text-gray-600">
            主要特点：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>基于文件系统的 API 路由</li>
            <li>支持所有 HTTP 方法（GET、POST、PUT、DELETE 等）</li>
            <li>内置的 CORS 支持</li>
            <li>与 Next.js 应用共享代码和环境变量</li>
          </ul>
        </Section>

        <Section title="创建 API 路由">
          <p className="text-gray-600 mb-4">
            API 路由通过在 <code className="bg-gray-100 px-2 py-1 rounded">app/api</code> 目录下创建 <code className="bg-gray-100 px-2 py-1 rounded">route.ts</code> 文件来定义：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-600">app/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">api/</span></div>
            <div className="ml-8 mb-2"><span className="text-blue-600">hello/</span></div>
            <div className="ml-12"><span className="text-blue-600">route.ts</span> → <span className="text-green-600">/api/hello</span></div>
          </div>
        </Section>

        <Section title="基本 API 路由示例">
          <p className="text-gray-600 mb-4">
            以下是一个简单的 API 路由示例：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// app/api/hello/route.ts

export async function GET() {
  return Response.json({
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString()
  });
}`}</pre>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            {loading && (
              <div className="text-center py-4 text-gray-600">加载API数据中...</div>
            )}
            
            {error && (
              <div className="text-center py-4 text-red-600">{error}</div>
            )}
            
            {!loading && !error && (
              <>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Get API 响应示例：</h3>
                <pre className="bg-white p-3 rounded text-gray-800 font-mono text-sm">
{JSON.stringify(helloData, null, 2)}
                </pre>
                 <h3 className="text-lg font-semibold text-green-800 mb-2">Post API 响应示例：</h3>
                <pre className="bg-white p-3 rounded text-gray-800 font-mono text-sm">
{JSON.stringify(postData, null, 2)}
                </pre>
              </>
            )}
          </div>
        </Section>

        <Section title="支持多种 HTTP 方法">
          <p className="text-gray-600 mb-4">
            API 路由可以通过导出不同的函数来支持多种 HTTP 方法：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// app/api/users/route.ts

export async function GET() {
  // 获取用户列表
  return Response.json([{ id: 1, name: 'John' }]);
}

export async function POST(request: Request) {
  // 创建新用户
  const data = await request.json();
  return Response.json({ id: 2, ...data });
}

export async function PUT(request: Request) {
  // 更新用户
  const data = await request.json();
  return Response.json({ id: 1, ...data });
}

export async function DELETE(request: Request) {
  // 删除用户
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  return Response.json({ message: 'User ' + id + ' deleted' });
}`}</pre>
          </div>
        </Section>

        <Section title="动态 API 路由">
          <p className="text-gray-600 mb-4">
            与页面路由类似，API 路由也支持动态参数：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"><span className="text-blue-600">app/</span></div>
            <div className="ml-4 mb-2"><span className="text-blue-600">api/</span></div>
            <div className="ml-8 mb-2"><span className="text-blue-600">users/</span></div>
            <div className="ml-12 mb-2"><span className="text-blue-600">[id]/</span></div>
            <div className="ml-16"><span className="text-blue-600">route.ts</span> → <span className="text-green-600">/api/users/123</span></div>
          </div>
          
          <div className="mt-4 bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// app/api/users/[id]/route.ts

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return Response.json({ id, name: 'User ' + id });
}`}</pre>
          </div>
        </Section>

        <Section title="请求处理">
          <p className="text-gray-600 mb-4">
            API 路由可以处理请求的查询参数、请求体和头信息：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// app/api/search/route.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const limit = searchParams.get('limit');
  
  // 使用查询参数进行搜索
  const results = await searchItems(query, parseInt(limit || '10'));
  
  return Response.json(results);
}

export async function POST(request: Request) {
  // 获取请求体
  const data = await request.json();
  
  // 获取请求头
  const contentType = request.headers.get('content-type');
  
  return Response.json({ data, contentType });
}`}</pre>
          </div>
        </Section>

        <Section title="响应配置">
          <p className="text-gray-600 mb-4">
            可以自定义响应的状态码、头信息等：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`// app/api/custom-response/route.ts

export async function GET() {
  return new Response(JSON.stringify({ message: 'Custom Response' }), {
    status: 201, // 自定义状态码
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'value'
    }
  });
}

// 使用 Response.json() 简写
export async function POST() {
  return Response.json(
    { message: 'Created' },
    { status: 201, headers: { 'X-Custom': 'header' } }
  );
}`}</pre>
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