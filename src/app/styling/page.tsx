export default function StylingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Next.js 样式方案</h1>
      
      <div className="space-y-8">
        <Section title="样式解决方案">
          <p className="text-gray-600 mb-4">
            Next.js 支持多种样式解决方案，可以根据项目需求选择：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Tailwind CSS</strong>：实用优先的 CSS 框架</li>
            <li><strong>CSS Modules</strong>：局部作用域的 CSS</li>
            <li><strong>styled-jsx</strong>：组件级别的 CSS-in-JS</li>
            <li><strong>第三方 CSS-in-JS</strong>：如 styled-components、Emotion 等</li>
            <li><strong>全局 CSS</strong>：传统的全局样式文件</li>
          </ul>
        </Section>

        <Section title="Tailwind CSS">
          <p className="text-gray-600 mb-4">
            Tailwind CSS 是一种实用优先的 CSS 框架，通过类名来构建界面：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
            <pre>{`// 使用 Tailwind CSS 类名
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
  <h2 className="text-xl font-bold">Hello Tailwind</h2>
  <p className="mt-2">This is styled with Tailwind CSS</p>
</div>`}</pre>
          </div>
          
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            <h2 className="text-xl font-bold">Hello Tailwind</h2>
            <p className="mt-2">This is styled with Tailwind CSS</p>
          </div>
        </Section>

        <Section title="CSS Modules">
          <p className="text-gray-600 mb-4">
            CSS Modules 允许创建局部作用域的 CSS 文件，文件名以 <code className="bg-gray-100 px-2 py-1 rounded">.module.css</code> 结尾：
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Component.module.css</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`.container {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 0.5rem;
}

.content {
  color: #6b7280;
}`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Component.tsx</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`import styles from './Component.module.css';

export default function Component() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hello CSS Modules</h2>
      <p className={styles.content}>This is styled with CSS Modules</p>
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Hello CSS Modules</h2>
            <p className="mt-2 text-gray-600">This is styled with CSS Modules</p>
          </div>
        </Section>

        <Section title="styled-jsx">
          <p className="text-gray-600 mb-4">
            styled-jsx 是 Next.js 内置的 CSS-in-JS 解决方案，允许在组件中编写作用域 CSS：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
            <pre>{`export default function Component() {
  return (
    <div className="component">
      <h2>Hello styled-jsx</h2>
      <p>This is styled with styled-jsx</p>
      
      <style jsx>{\`
        .component {
          background-color: #e0f2fe;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        h2 {
          font-size: 1.25rem;
          font-weight: bold;
          color: #0369a1;
          margin-bottom: 0.5rem;
        }
        
        p {
          color: #0c4a6e;
        }
      \`}</style>
    </div>
  );
}`}</pre>
          </div>
          
          <div className="p-4 bg-sky-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-sky-800">Hello styled-jsx</h2>
            <p className="mt-2 text-sky-700">This is styled with styled-jsx</p>
          </div>
        </Section>

        <Section title="全局 CSS">
          <p className="text-gray-600 mb-4">
            全局 CSS 文件可以在 <code className="bg-gray-100 px-2 py-1 rounded">app/globals.css</code> 中定义，会应用到整个应用：
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre>{`/* app/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* 全局样式类 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}`}</pre>
          </div>
        </Section>

        <Section title="CSS-in-JS 库">
          <p className="text-gray-600 mb-4">
            Next.js 也支持第三方 CSS-in-JS 库，如 styled-components 和 Emotion：
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">styled-components</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`'use client';

import styled from 'styled-components';

const StyledDiv = styled.div\`
  background-color: #fef3c7;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #92400e;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #78350f;
  }
\`;

export default function Component() {
  return (
    <StyledDiv>
      <h2>Hello styled-components</h2>
      <p>This is styled with styled-components</p>
    </StyledDiv>
  );
}`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Emotion</h3>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{`'use client';

import { css } from '@emotion/react';

const containerStyles = css\`
  background-color: #fce7f3;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #9d174d;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #831843;
  }
\`;

export default function Component() {
  return (
    <div css={containerStyles}>
      <h2>Hello Emotion</h2>
      <p>This is styled with Emotion</p>
    </div>
  );
}`}</pre>
              </div>
            </div>
          </div>
        </Section>

        <Section title="样式优先级">
          <p className="text-gray-600 mb-4">
            样式优先级顺序（从高到低）：
          </p>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>内联样式 (<code className="bg-gray-100 px-2 py-1 rounded">style</code> 属性)</li>
            <li>CSS-in-JS (styled-jsx, styled-components 等)</li>
            <li>CSS Modules</li>
            <li>全局 CSS</li>
            <li>Tailwind CSS 基础样式</li>
          </ol>
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