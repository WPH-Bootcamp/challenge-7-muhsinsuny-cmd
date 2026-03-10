// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('access_token');

  const isAuthPage =
    request.nextUrl.pathname.startsWith('/auth/login') ||
    request.nextUrl.pathname.startsWith('/auth/register');

  // Jika sudah login, jangan balik ke login/register
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Protect halaman tertentu
  if (!token && request.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}
