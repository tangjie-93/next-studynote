// app/data-fetching/csr/page.tsx
// 客户端渲染(CSR)演示页面

'use client'; // 标记为客户端组件

import { useState, useEffect } from 'react';

// 定义数据类型
interface ClientData {
  message: string;
  timestamp: string;
  clientInfo: {
    userAgent: string;
    screenSize: string;
    browserTime: string;
  };
}

// 模拟客户端数据获取
async function fetchClientData(): Promise<ClientData> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: '这是从客户端获取的数据',
    timestamp: new Date().toLocaleString('zh-CN'),
    clientInfo: {
      userAgent: navigator.userAgent,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      browserTime: new Date().toLocaleTimeString('zh-CN')
    }
  };
}

export default function CSRPage() {
  const [data, setData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // 使用useEffect在客户端获取数据
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const result = await fetchClientData();
        setData(result);
        setError(null);
      } catch (err) {
        setError('获取数据失败，请稍后重试');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }
    
    getData();
    
    // 设置定时器，每5秒更新一次数据
    const interval = setInterval(() => {
      getData();
    }, 5000);
    
    return () => clearInterval(interval); // 清理定时器
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">客户端渲染(CSR)演示</h1>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <p className="text-xl text-gray-600">客户端加载中...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-800 mb-2">错误</h2>
          <p className="text-red-700">{error}</p>
        </div>
      ) : data ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">客户端数据</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">消息</h3>
              <p className="text-gray-700">{data.message}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">浏览器时间</h3>
                <p className="text-xl font-bold text-purple-600">{data.clientInfo.browserTime}</p>
                <p className="text-sm text-gray-500 mt-2">客户端本地时间</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">屏幕尺寸</h3>
                <p className="text-xl font-bold text-green-600">{data.clientInfo.screenSize}</p>
                <p className="text-sm text-gray-500 mt-2">客户端屏幕分辨率</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">用户代理</h3>
              <p className="text-sm text-gray-600 break-all">{data.clientInfo.userAgent}</p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>技术说明：</strong>此页面是一个客户端组件（使用 <code className="bg-gray-100 px-2 py-1 rounded">'use client'</code> 指令），
              数据在浏览器中通过 React 的 <code className="bg-gray-100 px-2 py-1 rounded">useEffect</code> 钩子获取。
              页面每5秒自动刷新一次数据。
            </p>
          </div>
        </div>
      ) : null}
      
      <div className="mt-6">
        <a href="/data-fetching" className="text-blue-600 hover:text-blue-800 underline">返回数据获取主页</a>
      </div>
    </div>
  );
}