import Link from "next/link";
import { comparisons } from "@/app/data/comparisons";

export const metadata = {
  title: "AI Tool Comparisons – NorthSky Reviews",
  description:
    "Side‑by‑side comparisons of the best AI tools: ChatGPT vs Claude, Midjourney vs DALL‑E, and more.",
};

export default function ComparisonsIndex() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black">AI Tool Comparisons</h1>
        <p className="mt-3 text-lg text-slate-600">
          Which tool is right for you? Compare features, pricing, and performance.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/comparisons/${c.slug}`}
              className="rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold">{c.title}</h2>
              <p className="mt-2 text-slate-600">{c.description}</p>
              <span className="mt-4 inline-block font-bold text-blue-600">
                Compare Now →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}