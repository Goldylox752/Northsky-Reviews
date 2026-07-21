import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { comparisons } from "@/app/data/comparisons";
import Newsletter from "@/components/Newsletter";

export async function generateMetadata({ params }) {
  const comparison = comparisons.find((c) => c.slug === params.slug);
  if (!comparison) return { title: "Comparison Not Found" };
  return {
    title: comparison.title,
    description: comparison.description,
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: "article",
      url: `https://northsky-reviews.vercel.app/comparisons/${params.slug}`,
    },
  };
}

export default function ComparisonPage({ params }) {
  const comparison = comparisons.find((c) => c.slug === params.slug);
  if (!comparison) return notFound();

  const { tool1, tool2, features, verdict, faqs, affiliateButton1, affiliateButton2 } = comparison;

  // JSON-LD Schema – Product comparison
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${tool1.name} vs ${tool2.name}`,
    description: comparison.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (tool1.rating + tool2.rating) / 2,
      reviewCount: 150,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: tool1.affiliateLink,
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-slate-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black md:text-5xl">{comparison.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {comparison.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={tool1.affiliateLink}
              target="_blank"
              rel="nofollow sponsored"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              {affiliateButton1}
            </a>
            <a
              href={tool2.affiliateLink}
              target="_blank"
              rel="nofollow sponsored"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
              {affiliateButton2}
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">Affiliate links – we may earn a commission.</p>
        </div>
      </section>

      {/* ─── Side‑by‑Side ──────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {[tool1, tool2].map((tool) => (
            <div key={tool.name} className="rounded-2xl border p-8 shadow-sm">
              <div className="flex items-center gap-4">
                {tool.logo && (
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h2 className="text-2xl font-bold">{tool.name}</h2>
                  <span className="text-sm font-bold text-green-600">⭐ {tool.rating}</span>
                </div>
              </div>
              <p className="mt-4 text-slate-600">{tool.description}</p>
              <p className="mt-4 font-bold">
                <span className="text-sm text-slate-500">Best for:</span> {tool.bestFor}
              </p>
              <div className="mt-6">
                <h3 className="font-bold">Pros ✅</h3>
                <ul className="ml-6 list-disc space-y-1 text-slate-700">
                  {tool.pros.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">Cons ❌</h3>
                <ul className="ml-6 list-disc space-y-1 text-slate-700">
                  {tool.cons.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <a
                href={tool.affiliateLink}
                target="_blank"
                rel="nofollow sponsored"
                className="mt-6 inline-block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Get {tool.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Feature Comparison Table ──────────────────────────── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black">Feature Comparison</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-white">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 font-bold">Feature</th>
                  <th className="px-6 py-4 font-bold text-center">{tool1.name}</th>
                  <th className="px-6 py-4 font-bold text-center">{tool2.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {features.map((f) => (
                  <tr key={f.name}>
                    <td className="px-6 py-4 font-medium">{f.name}</td>
                    <td className="px-6 py-4 text-center">{f.tool1}</td>
                    <td className="px-6 py-4 text-center">{f.tool2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Verdict ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl bg-blue-50 p-8">
          <h2 className="text-2xl font-bold text-blue-800">🏆 Verdict</h2>
          <p className="mt-2 text-lg text-slate-700">
            <strong>Winner:</strong> {verdict.winner}
          </p>
          <p className="mt-4 text-slate-700">{verdict.summary}</p>
          <p className="mt-4 font-bold text-slate-800">{verdict.callToAction}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={tool1.affiliateLink}
              target="_blank"
              rel="nofollow sponsored"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              {affiliateButton1}
            </a>
            <a
              href={tool2.affiliateLink}
              target="_blank"
              rel="nofollow sponsored"
              className="rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white transition hover:bg-indigo-700"
            >
              {affiliateButton2}
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter ──────────────────────────────────────────── */}
      <Newsletter variant="inline" />

      {/* ─── Affiliate Disclosure ────────────────────────────────── */}
      <div className="px-6 py-8 text-center text-sm text-slate-500">
        🔗 Some links on this page are affiliate links. We may earn a commission at no extra cost to you.
      </div>
    </main>
  );
}
```

---

📁 3. Comparison Index Page – app/comparisons/page.js

This lists all available comparisons (for your "Compare Tools" button).

```jsx
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