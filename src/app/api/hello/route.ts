export async function GET() {
  return Response.json({
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
    framework: 'Next.js 13+',
    feature: 'API Routes'
  });
}
export async function POST(request: Request) {
  // 创建新用户
  const data = await request.json();
  return Response.json({ id: 2, ...data });
}