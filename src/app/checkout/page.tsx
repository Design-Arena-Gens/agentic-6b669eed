"use client";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/ui/NavBar";
import { useCart } from "@/components/cart/CartContext";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const cart = useCart();
  const router = useRouter();

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl pb-24">
      <NavBar title="Checkout" leftAction={{ icon: "chevron-left", onClick: () => router.back() }} />

      <main className="px-4 py-4 space-y-4">
        <section className="card p-4">
          <h2 className="text-[--text-lg] font-semibold">Delivery</h2>
          <p className="mt-1 text-[--neutral-300]">Set your delivery address to proceed.</p>
          <Button className="mt-3" variant="secondary">Use current location</Button>
        </section>

        <section className="card p-4">
          <h2 className="text-[--text-lg] font-semibold">Payment</h2>
          <p className="mt-1 text-[--neutral-300]">Card ending ??42</p>
          <Button className="mt-3" variant="secondary">Change payment method</Button>
        </section>

        <section className="card p-4">
          <div className="flex justify-between text-[--text-base]"><span>Items</span><span>${cart.total.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Delivery</span><span>$2.50</span></div>
          <div className="mt-2 flex justify-between text-[--text-lg] font-semibold"><span>Total</span><span>${(cart.total + 2.5).toFixed(2)}</span></div>
          <Button className="mt-4 w-full" onClick={() => { cart.clear(); router.push("/"); }}>Place Order</Button>
        </section>
      </main>
    </div>
  );
}
