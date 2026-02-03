
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-6 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">404 - 页面未找到</h2>
      <p className="text-gray-600 mb-4">抱歉，您访问的页面不存在。</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}