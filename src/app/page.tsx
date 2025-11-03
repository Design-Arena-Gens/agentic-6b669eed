"use client";
import Link from "next/link";
import { NavBar } from "@/components/ui/NavBar";
import { SearchBar } from "@/components/ui/SearchBar";
import { Chip } from "@/components/ui/Chip";
import { ImageCard } from "@/components/ui/ImageCard";
import { TabBar } from "@/components/ui/TabBar";
import { Icon } from "@/components/icons";

const categories = [
  "All",
  "Burgers",
  "Sushi",
  "Pizza",
  "Street food",
  "Desserts",
  "Caf?s",
];

const featured = [
  {
    id: "sushi-wave",
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
    title: "Sushi Wave",
    subtitle: "Japanese ? Fresh ? Rolls",
    rating: 4.7,
    time: "20-30m",
    price: "$$$",
  },
  {
    id: "burger-lab",
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    title: "Burger Lab",
    subtitle: "Smash ? Cheesy ? Beef",
    rating: 4.5,
    time: "15-25m",
    price: "$$",
  },
  {
    id: "pizza-nova",
    imageUrl:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop",
    title: "Pizza Nova",
    subtitle: "Neapolitan ? Wood-fired",
    rating: 4.6,
    time: "25-35m",
    price: "$$$",
  },
];

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl pb-16">
      <NavBar
        title="Cairo"
        leftAction={{ icon: "map-pin" }}
        rightAction={{ icon: "filter" }}
      />

      <main className="px-4 py-4">
        <h1 className="text-[--text-2xl] font-semibold tracking-tight">Discover</h1>
        <p className="mt-1 text-[--neutral-300]">Modern, warm, and intelligent food picks.</p>

        <div className="mt-4">
          <SearchBar />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c, i) => (
            <Chip key={c} selected={i === 0}>
              {c}
            </Chip>
          ))}
        </div>

        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[--text-xl] font-semibold">Featured</h2>
            <button className="text-[--color-primary] text-[--text-sm]">See all</button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featured.map((r) => (
              <Link key={r.id} href={`/restaurant/${r.id}`} className="block">
                <ImageCard
                  imageUrl={r.imageUrl}
                  title={r.title}
                  subtitle={r.subtitle}
                  rating={r.rating}
                  time={r.time}
                  price={r.price}
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[--text-xl] font-semibold">Nearby</h2>
            <button className="text-[--color-primary] text-[--text-sm]">Refresh</button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featured.map((r) => (
              <Link key={`near-${r.id}`} href={`/restaurant/${r.id}`} className="block">
                <ImageCard
                  imageUrl={r.imageUrl}
                  title={r.title}
                  subtitle={r.subtitle}
                  rating={r.rating}
                  time={r.time}
                  price={r.price}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <TabBar
        items={[
          { href: "/", icon: "home", label: "Home" },
          { href: "/search", icon: "search", label: "Search" },
          { href: "/favorites", icon: "heart", label: "Saved" },
          { href: "/cart", icon: "cart", label: "Cart" },
        ]}
      />
    </div>
  );
}
