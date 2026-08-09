import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/app/lib/polar";

const PRODUCT_KEY_TO_ID: Record<string, string> = {
  executive: "e1caeeda-8223-4df9-a0fc-adbcba65ea55",
  "dashboard-pro": "83802323-2db4-4fb7-bc2b-e138b96daaef",
  "business-os": "cdab126e-5475-48b0-8304-473cf8e4e53f",
};

export async function GET(request: NextRequest) {
  const product = request.nextUrl.searchParams.get("product");
  
  if (!product || !PRODUCT_KEY_TO_ID[product]) {
    return NextResponse.redirect(new URL("/#solutions", request.url));
  }

  try {
    const session = await createCheckoutSession(PRODUCT_KEY_TO_ID[product]);
    return NextResponse.redirect(session.url);
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.redirect(new URL("/#solutions", request.url));
  }
}
