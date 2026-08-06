import { NextRequest, NextResponse } from "next/server";

const LOCALE_REDIRECTS: Record<string, string> = {
  US: "/us", CA: "/ca",
  GB: "/uk", AU: "/au", NZ: "/nz",
  IE: "/ie", DE: "/de", NL: "/nl",
  SE: "/se", NO: "/no", DK: "/dk",
  SG: "/sg", MY: "/my", TR: "/tr",
  SA: "/sa", AE: "/ae", QA: "/qa", KW: "/kw", BH: "/bh", OM: "/om",
};

const ALL_LOCALE_PATHS = "/us|/uk|/ca|/au|/nz|/sg|/my|/tr|/ie|/de|/nl|/se|/no|/dk|/sa|/ae|/qa|/kw|/bh|/om";

function getCountry(request: NextRequest): string {
  return request.headers.get("x-vercel-ip-country") ?? "";
}

function getLocaleForCountry(country: string): string {
  return LOCALE_REDIRECTS[country]?.replace("/", "") || "";
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const localePrefix = pathname.match(new RegExp(`^(${ALL_LOCALE_PATHS})(/|$)`));
  if (localePrefix) return NextResponse.next();

  if (
    pathname.startsWith("/admin") || pathname.startsWith("/api") ||
    pathname.startsWith("/_next") || pathname.startsWith("/meet") ||
    pathname.startsWith("/project-brief") || pathname.startsWith("/checkout") ||
    pathname.includes(".")
  ) {
    const country = getCountry(request);
    const locale = getLocaleForCountry(country);
    const response = NextResponse.next();
    if (locale) response.cookies.set("vl_locale", locale, { path: "/", maxAge: 86400, sameSite: "lax" });
    return response;
  }

  const country = getCountry(request);
  const localePath = LOCALE_REDIRECTS[country];

  if (localePath && pathname === "/") {
    const response = NextResponse.redirect(new URL(localePath, request.url));
    response.cookies.set("vl_locale", localePath.replace("/", ""), { path: "/", maxAge: 86400, sameSite: "lax" });
    return response;
  }

  const locale = getLocaleForCountry(country);
  const response = localePath && !pathname.startsWith(localePath)
    ? NextResponse.redirect(new URL(`${localePath}${pathname}`, request.url))
    : NextResponse.next();
  if (locale) response.cookies.set("vl_locale", locale, { path: "/", maxAge: 86400, sameSite: "lax" });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|admin|meet|project-brief|checkout|favicon|brand|media|logos|portfolio|us|uk|ca|au|nz|sg|my|tr|ie|de|nl|se|no|dk|sa|ae|qa|kw|bh|om).*)"],
};
