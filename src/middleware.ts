import { NextRequest, NextResponse } from "next/server";

import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    "/((?!api|admin|splash_screens*|images*|manifest.json|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};

export function middleware(req: NextRequest) {
  let lang;
  if (req.cookies.has(cookieName))
    lang = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lang) lang = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lang) lang = fallbackLng;

  // Redirect if lang in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has("referer")) {
    const referer = req.headers.get("referer");
    if (referer) {
      const refererUrl = new URL(referer);
      const lngInReferer = languages.find((l) =>
        refererUrl.pathname.startsWith(`/${l}`),
      );
      const response = NextResponse.next();
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}
