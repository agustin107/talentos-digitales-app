import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const isLogged = cookieStore.get('isLogged');

  if (isLogged?.value === 'true') {
    if (request.nextUrl.pathname !== '/dashboard') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  } else {
    if (request.nextUrl.pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/', '/login', '/dashboard/:path*']
}