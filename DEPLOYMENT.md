# Next.js 项目 Vercel 部署指南

本指南将详细说明如何将此 Next.js 项目部署到 Vercel 平台。

## 前提条件

1. 已安装 Git
2. 已创建 Vercel 账号 (https://vercel.com)
3. 已创建 GitHub/GitLab/Bitbucket 仓库

## 项目配置检查

### 1. package.json 配置

确保项目根目录下的 `package.json` 文件包含以下脚本：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### 2. next.config.ts 配置

已更新 `next.config.ts` 文件，包含以下配置：

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用React严格模式
  reactStrictMode: true,
  // 图像优化配置
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
  // TypeScript配置
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
```

### 3. vercel.json 配置

已创建 `vercel.json` 文件，包含以下配置：

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "builds": [
    {
      "src": "next.config.ts",
      "use": "@vercel/next"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### 4. .gitignore 配置

确保 `.gitignore` 文件包含以下内容：

```
# next.js
/.next/
/out/

# vercel
.vercel

# env files
.env*

# dependencies
/node_modules
```

## 部署步骤

### 方法一：通过 Vercel 官网部署

1. **登录 Vercel 账号**
   - 访问 https://vercel.com 并登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择 "Import from Git Repository"
   - 选择你的 Git 平台 (GitHub/GitLab/Bitbucket)
   - 授权 Vercel 访问你的仓库
   - 选择要部署的仓库

3. **配置部署**
   - 选择项目名称
   - 选择部署环境 (Production/Preview/Development)
   - 配置环境变量 (如果有需要)
   - 检查构建命令和输出目录是否正确：
     - 构建命令: `npm run build`
     - 输出目录: `.next`

4. **开始部署**
   - 点击 "Deploy"
   - 等待部署完成
   - 部署完成后，你将获得一个 Vercel 提供的域名

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **初始化项目**
   ```bash
   vercel init nextjs
   ```

4. **部署项目**
   ```bash
   vercel deploy
   ```

5. **部署到生产环境**
   ```bash
   vercel deploy --prod
   ```

## 部署注意事项

### 1. 环境变量

- 如果项目使用了环境变量，需要在 Vercel 控制台中配置：
  - 进入项目 -> Settings -> Environment Variables
  - 添加所需的环境变量

### 2. API 路由

- Next.js API 路由会自动部署为 Vercel Serverless Functions
- 无需额外配置，Vercel 会自动处理

### 3. 静态资源

- 静态资源会自动优化并部署到 Vercel CDN
- 图片会自动进行响应式优化

### 4. 增量静态生成 (ISR)

- 项目中的 ISR 配置（如 `revalidate` 参数）会自动生效
- Vercel 会自动处理页面的重新生成

### 5. 自定义域名

- 部署完成后，可以在 Vercel 控制台中添加自定义域名：
  - 进入项目 -> Settings -> Domains
  - 添加你的自定义域名
  - 按照提示配置 DNS 记录

## 常见问题

### 1. 部署失败

- 检查构建日志中的错误信息
- 确保所有依赖都已正确安装
- 确保 TypeScript/ESLint 没有错误

### 2. API 路由无法访问

- 确保 API 路由文件位于 `app/api` 目录下
- 确保路由文件导出了正确的 HTTP 方法（GET、POST 等）

### 3. 环境变量不生效

- 确保环境变量已在 Vercel 控制台中正确配置
- 确保环境变量名称与代码中的使用一致
- 部署后需要重新构建才能使新的环境变量生效

## 后续维护

- 推送代码到 Git 仓库后，Vercel 会自动触发新的部署
- 可以在 Vercel 控制台中查看部署历史和日志
- 可以配置部署预览环境，在合并代码前测试变更

## 参考链接

- [Vercel Next.js 部署文档](https://vercel.com/docs/frameworks/nextjs)
- [Next.js 部署指南](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel CLI 文档](https://vercel.com/docs/cli)
