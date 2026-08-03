"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Receipt, Package } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

interface OrderData {
  product?: string;
  amount?: string;
  orderId?: string;
  customerId?: string;
}

function useOrderParams(): OrderData {
  const [data, setData] = useState<OrderData>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setData({
      product: params.get("product") || undefined,
      amount: params.get("amount") || undefined,
      orderId: params.get("order_id") || undefined,
      customerId: params.get("customer_id") || undefined,
    });
  }, []);

  return data;
}

function SuccessContent() {
  const order = useOrderParams();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F6EF] px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg"
      >
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#004225]/10">
          <CheckCircle className="h-10 w-10 text-[#004225]" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl">
          Welcome to VantLaunch
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#74695B]">
          Your payment has been received successfully. The next step takes less than 5 minutes.
        </p>
        <p className="mt-1 text-sm font-medium text-[#11100E]">
          Complete your project brief so we can begin immediately.
        </p>

        {order.product && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-8 grid grid-cols-2 gap-3"
          >
            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-mid">
              <Package className="h-5 w-5 shrink-0 text-[#004225]" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Product</p>
                <p className="text-sm font-bold text-[#11100E]">{order.product}</p>
              </div>
            </div>
            {order.amount && (
              <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-mid">
                <Receipt className="h-5 w-5 shrink-0 text-[#004225]" />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Amount</p>
                  <p className="text-sm font-bold text-[#11100E]">{order.amount}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#74695B]">
          <Clock className="h-3.5 w-3.5" />
          <span>Estimated response time: less than 12 hours</span>
        </div>

        <div className="mt-8">
          <Link
            href={`/project-brief?${new URLSearchParams({ product: order.product || "", amount: order.amount || "", order_id: order.orderId || "", customer_id: order.customerId || "" }).toString()}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#11100E] sm:w-auto"
          >
            Start Project Brief
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-mid text-left">
          <h3 className="text-base font-bold text-[#11100E]">What happens next</h3>
          <ul className="mt-3 space-y-2.5">
            {[
              "Complete the 5-minute project brief form",
              "We review your requirements and integrations",
              "You receive a confirmation email",
              "Our team contacts you within 12 hours",
              "Build begins with regular updates",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#004225]/10 text-[10px] font-bold text-[#004225]">
                  {i + 1}
                </span>
                <span className="text-sm text-[#74695B]">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6EF]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#004225] border-t-transparent" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
