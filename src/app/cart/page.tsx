"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/ui/NavBar";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartContext";
import { Icon } from "@/components/icons";

export default function CartPage() {
  const cart = useCart();
  const router = useRouter();
  const delivery = cart.total > 0 ? 2.5 : 0;
  const total = cart.total + delivery;

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl pb-24">
      <NavBar title="Cart" leftAction={{ icon: "chevron-left", onClick: () => router.back() }} />

      <main className="px-4 py-4">
        {cart.items.length === 0 ? (
          <div className="mt-8 text-center text-[--neutral-300]">
            <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-[--neutral-800] flex items-center justify-center">
              <Icon name="cart" />
            </div>
            Your cart is empty.
          </div>
        ) : (
          <div className="space-y-3">
            {cart.items.map((i) => (
              <div key={i.id} className="card flex items-center gap-3 p-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-[--radius-md]">
                  {i.imageUrl && <Image src={i.imageUrl} alt={i.title} fill className="object-cover" />}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{i.title}</div>
                  <div className="mt-1 text-[--neutral-300]">${i.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-8 w-8 rounded-full bg-[--neutral-800] tap-active" onClick={() => cart.dec(i.id)}>
                    <Icon name="minus" className="mx-auto" />
                  </button>
                  <div className="w-6 text-center">{i.qty}</div>
                  <button className="h-8 w-8 rounded-full bg-[--neutral-800] tap-active" onClick={() => cart.inc(i.id)}>
                    <Icon name="plus" className="mx-auto" />
                  </button>
                </div>
                <button className="ml-2 text-[--neutral-400] hover:text-white" onClick={() => cart.remove(i.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-2 text-[--text-sm]">
          <div className="flex justify-between"><span>Subtotal</span><span>${cart.total.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Delivery</span><span>${delivery.toFixed(2)}</span></div>
          <div className="flex justify-between font-semibold text-[--text-base]"><span>Total</span><span>${total.toFixed(2)}</span></div>
        </div>

        <Button className="mt-4 w-full" onClick={() => router.push("/checkout")}>Checkout</Button>
        <Link href="/" className="mt-2 block text-center text-[--text-sm] text-[--color-primary]">
          Continue browsing
        </Link>
      </main>
    </div>
  );
}
