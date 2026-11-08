// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
// };

import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const protectedRoutes = ["/profile", "/cart", "/checkout", "/orders"];

export default function proxy(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  // =========================
  // Auth Pages
  // =========================

  if (pathname === "/login" || pathname === "/register") {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  // =========================
  // Protected Pages
  // =========================

  const pathnameWithoutLocale = pathname.replace(/^\/(ar|en)/, "");

  const isProtectedRoute = protectedRoutes.some(
    (route) =>
      pathnameWithoutLocale === route ||
      pathnameWithoutLocale.startsWith(`${route}/`),
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // =========================
  // next-intl
  // =========================

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
