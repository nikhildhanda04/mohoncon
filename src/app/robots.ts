import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse(
    [
      "User-agent: *",
      "Allow: /",
      "Sitemap: https://mohonconbuilds.co.in/sitemap.xml"
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}