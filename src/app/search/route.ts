import { NextResponse } from 'next/server';

const mockData = [
  { name: 'ChatGPT', category: 'AI 助手' },
  { name: 'DALL·E', category: '生成式 AI' },
  { name: 'Copilot', category: 'AI 工具' },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get('q') || '';
  
  const results = mockData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(results);
}