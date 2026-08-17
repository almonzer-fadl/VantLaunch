import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/app/lib/polar";
import { CHECKOUT_PRODUCT_MAP } from "@/app/lib/constants";

const PRODUCT_META: Record<string, { name: string; amount: string }> = {
  starter: { name: "Starter", amount: "$999" },
  pro: { name: "Pro", amount: "$1,699" },
  mobile: { name: "Mobile", amount: "$2,499" },
};

export async function GET(request: NextRequest) {
  const product = request.nextUrl.searchParams.get("product");

  if (!product || !CHECKOUT_PRODUCT_MAP[product]) {
    return NextResponse.redirect(new URL("/#engagement-options", request.url));
  }

  const meta = PRODUCT_META[product];

  try {
    const session = await createCheckoutSession(CHECKOUT_PRODUCT_MAP[product], {
      metadata: { product_key: product, product_name: meta.name, product_amount: meta.amount },
    });
    return NextResponse.redirect(session.url);
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.redirect(new URL("/#engagement-options", request.url));
  }
}
