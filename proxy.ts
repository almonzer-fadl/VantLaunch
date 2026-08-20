import { NextRequest, NextResponse } from "next/server";

const LOCALE_REDIRECTS: Record<string, string> = {
  US: "/us", CA: "/us",
  GB: "/uk", AU: "/uk", NZ: "/uk", IE: "/uk",
  SA: "/sa", AE: "/ae", QA: "/qa", KW: "/kw", BH: "/bh", OM: "/om",
};

const ALL_LOCALE_PATHS = "/us|/uk|/sa|/ae|/qa|/kw|/bh|/om";

function getCountry(request: NextRequest): string {
  return request.headers.get("x-vercel-ip-country") ?? "";
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
  ) return NextResponse.next();

  const country = getCountry(request);
  const localePath = LOCALE_REDIRECTS[country];
  if (localePath && pathname === "/") {
    return NextResponse.redirect(new URL(localePath, request.url));
  }
  if (localePath && !pathname.startsWith(localePath)) {
    return NextResponse.redirect(new URL(`${localePath}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|admin|meet|project-brief|checkout|favicon|brand|media|logos|portfolio|us|uk|sa|ae|qa|kw|bh|om).*)"],
};
