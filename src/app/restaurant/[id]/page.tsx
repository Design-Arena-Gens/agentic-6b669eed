"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/ui/NavBar";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartContext";

const sampleMenu = [
  {
    id: "roll-1",
    title: "Salmon Avocado Roll",
    price: 9.5,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "roll-2",
    title: "Spicy Tuna Roll",
    price: 10.0,
    imageUrl:
      "https://images.unsplash.com/photo-1570784071970-8c03d9dc90ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "roll-3",
    title: "Ebi Tempura",
    price: 12.0,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-8e9d94a57a32?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const cart = useCart();
  const title = params.id.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl pb-24">
      <NavBar title={title} leftAction={{ icon: "chevron-left", onClick: () => router.back() }} />

      <header className="relative h-56 w-full">
        <Image
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop"
          alt={title}
          fill
          className="object-cover"
        />
      </header>

      <main className="px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[--text-2xl] font-semibold">{title}</h1>
          <RatingStars rating={4.6} count={324} />
        </div>
        <p className="mt-1 text-[--neutral-300]">Japanese ? Fresh ? Rolls</p>

        <section className="mt-6 space-y-4">
          {sampleMenu.map((m) => (
            <div key={m.id} className="card flex items-center gap-3 p-2">
              <div className="relative h-20 w-20 overflow-hidden rounded-[--radius-md]">
                <Image src={m.imageUrl} alt={m.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-[--text-base] font-medium">{m.title}</div>
                <div className="mt-1 text-[--neutral-300]">${m.price.toFixed(2)}</div>
              </div>
              <Button
                size="sm"
                onClick={() => cart.add({ id: m.id, title: m.title, price: m.price, imageUrl: m.imageUrl })}
              >
                Add
              </Button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
