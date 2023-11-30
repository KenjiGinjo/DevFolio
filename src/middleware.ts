import { NextRequest, NextResponse } from "next/server";

const locales = ["en-US", "zh-CN"];

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) {
    return locales[0];
  }

  const requestedLocales = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0]);
  const matchedLocale =
    locales.find((locale) => requestedLocales.includes(locale)) || locales[0];
  return matchedLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  if (locale === "en-US") {
    return NextResponse.next();
  }

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
