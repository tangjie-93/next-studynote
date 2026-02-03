import Image from 'next/image';

export default function ImageOptimizationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Next.js 图片优化</h1>
      
      <div className="space-y-8">
        <Section title="Image 组件概述">
          <p className="text-gray-600 mb-4">
            Next.js 提供了 <code className="bg-gray-100 px-2 py-1 rounded">next/image</code> 组件，用于自动优化图片加载：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>自动懒加载（延迟加载）</li>
            <li>响应式图片（根据屏幕尺寸提供合适的尺寸）</li>
            <li>WebP/AVIF 格式自动转换（现代浏览器）</li>
            <li>图片优化（压缩、质量调整）</li>
            <li>图片布局占位符（避免布局偏移）</li>
          </ul>
        </Section>

        <Section title="基本用法">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">next/image</code> 组件的基本示例：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
            <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={120}
        height={30}
      />
    </div>
  );
}`}</pre>
          </div>
          
          <div className="flex justify-center">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={30}
            />
          </div>
        </Section>

        <Section title="外部图片">
          <p className="text-gray-600 mb-4">
            要使用外部图片，需要在 <code className="bg-gray-100 px-2 py-1 rounded">next.config.js</code> 中配置 <code className="bg-gray-100 px-2 py-1 rounded">images.remotePatterns</code>：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">next.config.js</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">使用外部图片</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      <Image
        src="https://picsum.photos/id/1/800/600"
        alt="Random image"
        width={800}
        height={600}
      />
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Image
              src="https://picsum.photos/id/1/800/600"
              alt="Random image"
              width={800}
              height={600}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </Section>

        <Section title="响应式图片">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">sizes</code> 属性可以定义图片在不同屏幕尺寸下的大小：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
            <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      <Image
        src="https://picsum.photos/id/2/1200/600"
        alt="Responsive image"
        width={1200}
        height={600}
        sizes="(
          max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw
        "
        className="rounded-lg shadow-md"
      />
    </div>
  );
}`}</pre>
          </div>
          
          <div className="mt-4">
            <Image
              src="https://picsum.photos/id/2/1200/600"
              alt="Responsive image"
              width={1200}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </Section>

        <Section title="懒加载">
          <p className="text-gray-600 mb-4">
            <code className="bg-gray-100 px-2 py-1 rounded">next/image</code> 默认启用懒加载，可以通过 <code className="bg-gray-100 px-2 py-1 rounded">priority</code> 属性禁用：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">懒加载图片</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      {/* 默认懒加载 */}
      <Image
        src="https://picsum.photos/id/3/800/600"
        alt="Lazy loaded image"
        width={800}
        height={600}
      />
    </div>
  );
}`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">优先加载图片</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      {/* 优先加载（用于首屏重要图片） */}
      <Image
        src="https://picsum.photos/id/4/800/600"
        alt="Priority image"
        width={800}
        height={600}
        priority
      />
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
        </Section>

        <Section title="图片格式优化">
          <p className="text-gray-600 mb-4">
            Next.js 会自动将图片转换为现代格式（如 WebP、AVIF），可以通过 <code className="bg-gray-100 px-2 py-1 rounded">formats</code> 属性指定：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
            <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      <Image
        src="https://picsum.photos/id/5/800/600"
        alt="Optimized image"
        width={800}
        height={600}
        formats={['image/avif', 'image/webp']}
        className="rounded-lg shadow-md"
      />
    </div>
  );
}`}</pre>
          </div>
          
          <div className="mt-4">
            <Image
              src="https://picsum.photos/id/5/800/600"
              alt="Optimized image"
              width={800}
              height={600}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </Section>

        <Section title="占位符">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">placeholder</code> 属性可以提供图片加载时的占位符：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">模糊占位符</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      <Image
        src="https://picsum.photos/id/6/800/600"
        alt="Image with blur placeholder"
        width={800}
        height={600}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
        className="rounded-lg shadow-md"
      />
    </div>
  );
}`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">空占位符</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`import Image from 'next/image';

export default function MyPage() {
  return (
    <div>
      <Image
        src="https://picsum.photos/id/7/800/600"
        alt="Image with empty placeholder"
        width={800}
        height={600}
        placeholder="empty"
        className="rounded-lg shadow-md"
      />
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
        </Section>

        <Section title="图片布局">
          <p className="text-gray-600 mb-4">
            使用 <code className="bg-gray-100 px-2 py-1 rounded">object-fit</code> 和 <code className="bg-gray-100 px-2 py-1 rounded">object-position</code> CSS 属性可以控制图片的布局：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cover 布局</h3>
              <Image
                src="https://picsum.photos/id/8/800/600"
                alt="Image with cover fit"
                width={400}
                height={300}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contain 布局</h3>
              <Image
                src="https://picsum.photos/id/9/800/600"
                alt="Image with contain fit"
                width={400}
                height={300}
                className="rounded-lg shadow-md object-contain bg-gray-100"
              />
            </div>
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