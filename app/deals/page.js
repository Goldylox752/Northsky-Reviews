import Link from "next/link";
import { affiliates } from "@/app/data/affiliates";

export const metadata = {
  title: "Deals & Discounts – NorthSky Reviews",
  description: "Exclusive deals and discounts on VPNs, AI tools, and travel tech.",
};

export default function DealsPage() {
  // Filter to show only premium (commission-earning) products
  const dealProducts = Object.entries(affiliates)
    .filter(([key, product]) => product.tier === "premium")
    .map(([key, product]) => ({ key, ...product }));

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black">🔥 Exclusive Deals</h1>
        <p className="mt-3 text-lg text-slate-600">
          Save money with our exclusive discounts – updated weekly.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {dealProducts.map((product) => (
            <div key={product.key} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Commission: {product.commission} · Cookie: {product.cookie}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="nofollow sponsored"
                className="mt-4 inline-block w-full rounded-xl bg-green-600 px-6 py-3 text-center font-bold text-white transition hover:bg-green-700"
              >
                Get Deal →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          💰 We earn a commission if you purchase through these links.
        </p>
      </div>
    </main>
  );
}