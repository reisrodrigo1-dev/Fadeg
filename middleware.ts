import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import api from "./src/utils/__api__/meu-curso";

export async function middleware(request: NextRequest) {
  const data = await api.getRedirects();

  const url = request.nextUrl.clone();

  const redirect = data.find((r) => url.pathname === r.FromUrl);

  if (redirect) {
    return NextResponse.redirect(redirect.ToUrl);
  }

  return NextResponse.next();
}
