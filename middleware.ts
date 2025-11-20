import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl;

  // Extract subdomain from hostname
  // Expected format: subdomain.portfolio.knurdz.org
  const subdomainMatch = hostname.match(/^([^.]+)\.portfolio\.knurdz\.org$/);
  
  if (subdomainMatch) {
    const subdomain = subdomainMatch[1];
    
    // Rewrite to dynamic route
    url.pathname = `/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
