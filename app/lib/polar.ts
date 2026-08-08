import { POLAR_PRODUCT_IDS } from "@/app/lib/constants";

const POLAR_API = "https://api.polar.sh";

function getAccessToken(): string {
  const token = process.env.POLAR_ACCESS_TOKEN;
  if (!token) throw new Error("POLAR_ACCESS_TOKEN not set");
  return token;
}

export interface CheckoutSession {
  id: string;
  url: string;
  customerEmail?: string;
  customerName?: string;
}

export async function createCheckoutSession(
  productId: string,
  options?: { customerEmail?: string; customerName?: string; metadata?: Record<string, string> }
): Promise<CheckoutSession> {
  const token = getAccessToken();

  const body: Record<string, unknown> = {
    product_id: productId,
  };

  if (options?.customerEmail) {
    body.customer_email = options.customerEmail;
  }
  if (options?.customerName) {
    body.customer_name = options.customerName;
  }
  if (options?.metadata) {
    body.metadata = options.metadata;
  }

  const res = await fetch(`${POLAR_API}/v1/checkouts/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Polar checkout creation failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  return {
    id: data.id,
    url: data.url,
    customerEmail: data.customer_email,
    customerName: data.customer_name,
  };
}

export function getProductCheckoutUrl(productKey: keyof typeof POLAR_PRODUCT_IDS): string {
  const id = POLAR_PRODUCT_IDS[productKey];
  return `https://buy.polar.sh/product/${id}`;
}
