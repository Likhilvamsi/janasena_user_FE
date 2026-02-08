import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('access_token')?.value
  const pathname = req.nextUrl.pathname

  // 🚫 Not logged in → block dashboard
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // 🚫 Logged in → block login
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
}
