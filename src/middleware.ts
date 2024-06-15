// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log("middleware")
  const url = req.nextUrl.clone();

  const username = req.cookies.get('username');
  if (!username) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/','/test'], // List of protected routes
};
