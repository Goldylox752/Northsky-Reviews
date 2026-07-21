import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";

export default function DealsClient({ deals }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [filteredDeals, setFilteredDeals] = useState(deals);

  const categories = ["all", ...new Set(deals.map((d) => d.category))];
  const featured = deals.find((d) => d.featured) || deals[0];

  // Filter and sort logic
  useEffect(() => {
    let result = [...deals];

    if (selectedCategory !== "all") {
      result = result.filter((d) => d.category === selectedCategory);
    }

    if (sortBy === "popular") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "discount") {
      const getPercent = (str) => {
        const match = str?.match(/(\d+)%/);
        return match ? parseInt(match[1]) : 0;
      };
      result.sort((a, b) => getPercent(b.discount) - getPercent(a.discount));
    } else if (sortBy === "expiry") {
      result.sort((a, b) => (a.expiry || "9999-12-31").localeCompare(b.expiry || "9999-12-31"));
    }

    setFilteredDeals(result);
  }, [selectedCategory, sortBy, deals]);

  const trackClick = async (deal) => {
    try {
      await fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: deal.name, source: "deals" }),
      });
    } catch (error) {
      console.error("Click tracking error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black">🔥 Exclusive Deals</h1>
          <p className="mt-3 text-lg text-slate-600">
            Hand‑picked discounts, promo codes, and savings – updated weekly.
          </p>
          <p className="mt-2 text-sm text-slate-500">{deals.length} active deals</p>
        </div>

        {/* Featured Deal */}
        {featured && (
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex-1">
                <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                  ⭐ Featured
                </span>
                <h2 className="mt-3 text-3xl font-bold">{featured.name}</h2>
                <p className="mt-2 text-blue-100">{featured.description}</p>
                <p className="mt-3 text-2xl font-black">{featured.discount}</p>
                {featured.code && (
                  <p className="mt-2">
                    Code: <code className="rounded bg-white/20 px-3 py-1 font-mono">{featured.code}</code>
                  </p>
                )}
                <a
                  href={featured.link}
                  target="_blank"
                  rel="nofollow sponsored"
                  onClick={() => trackClick(featured)}
                  className="mt-4 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-600 transition hover:bg-slate-100"
                >
                  Claim This Deal →
                </a>
              </div>
              {featured.image && (
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image src={featured.image} alt={featured.name} fill className="object-contain" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "border text-slate-600 hover:bg-slate-50"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Popular</option>
              <option value="discount">Biggest Discount</option>
              <option value="expiry">Soonest Expiry</option>
            </select>
          </div>
        </div>

        {/* Deals Grid */}
        {filteredDeals.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 p-12 text-center">
            <p className="text-slate-600">No deals match your filters.</p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="mt-4 font-bold text-blue-600 hover:underline"
            >
              Show all deals
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDeals.map((deal) => (
              <div key={deal.id} className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    {deal.category}
                  </span>
                  <span className="text-sm font-bold text-green-600">⭐ {deal.rating || "N/A"}</span>
                </div>
                {deal.image && (
                  <div className="relative my-4 h-16 w-full">
                    <Image src={deal.image} alt={deal.name} fill className="object-contain" />
                  </div>
                )}
                <h3 className="text-xl font-bold">{deal.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{deal.description}</p>
                <p className="mt-3 font-bold text-blue-600">{deal.discount}</p>
                {deal.code && (
                  <p className="mt-1 text-xs text-slate-500">
                    Code: <span className="font-mono bg-slate-100 px-2 py-1 rounded">{deal.code}</span>
                  </p>
                )}
                {deal.expiry && (
                  <p className="mt-1 text-xs text-slate-400">
                    ⏰ Expires: {new Date(deal.expiry).toLocaleDateString()}
                  </p>
                )}
                <a
                  href={deal.link}
                  target="_blank"
                  rel="nofollow sponsored"
                  onClick={() => trackClick(deal)}
                  className="mt-4 inline-block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-700"
                >
                  Get Deal →
                </a>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16">
          <Newsletter variant="hero" />
        </div>

        <div className="mt-8 rounded-3xl bg-slate-100 p-6 text-center text-sm text-slate-500">
          💰 Some links are affiliate. We may earn a commission at no extra cost to you.
        </div>
      </div>
    </main>
  );
}