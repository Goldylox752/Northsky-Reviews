import Link from "next/link";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

export const metadata = {
  title: "Technology Reviews 2026 | AI Tools, Software & Technology Reviews",

  description:
    "Browse expert reviews of AI tools, software, automation platforms, VPNs, developer tools, and SaaS products. Compare features, pricing, ratings, and alternatives with NorthSky Reviews.",

  keywords: [
    "technology reviews",
    "AI reviews",
    "AI software",
    "software reviews",
    "best AI tools",
    "VPN reviews",
    "SaaS reviews",
    "technology comparisons",
  ],

  alternates: {
    canonical: "https://northsky-reviews.vercel.app/reviews",
  },
};

export default function ReviewsPage() {
  const featuredReviews = [...(tools || [])]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 12);

  const schema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name: "NorthSky Reviews",

    description:
      "Technology reviews, software comparisons and buying guides.",

    url: "https://northsky-reviews.vercel.app/reviews",

    mainEntity: {
      "@type": "ItemList",

      itemListElement: featuredReviews.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.name,
        url: `https://northsky-reviews.vercel.app/reviews/${tool.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            🔬 Independent Technology Reviews
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Trusted AI & Software Reviews
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300">
            Compare AI software, productivity tools, automation platforms,
            developer tools, cybersecurity software, and business technology
            with independent expert reviews.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/ai"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"
            >
              Explore AI →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
            >
              Compare Software →
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">
                {tools?.length || 0}+
              </p>

              <p className="text-slate-300">
                Products Reviewed
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">
                {comparisons?.length || 0}+
              </p>

              <p className="text-slate-300">
                Comparisons
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">
                25+
              </p>

              <p className="text-slate-300">
                Categories
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">
                2026
              </p>

              <p className="text-slate-300">
                Updated Rankings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black">
            Featured Reviews
          </h2>

          <p className="mt-4 text-center text-lg text-slate-600">
            Our highest-rated software and AI platforms.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredReviews.map((tool) => (
              <Link
                key={tool.slug}
                href={`/reviews/${tool.slug}`}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                    {tool.category}
                  </span>

                  <span className="font-black text-green-600">
                    ⭐ {tool.rating}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  {tool.name}
                </h3>

                <p className="mt-4 text-slate-600">
                  {tool.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span>{tool.price || "Free & Paid"}</span>

                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Expert Review
                  </span>
                </div>

                <span className="mt-8 block font-bold text-blue-600">
                  Read Review →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black">
            Popular Comparisons
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {(comparisons || []).slice(0, 6).map((item) => (
              <Link
                key={item.slug}
                href={`/comparisons/${item.slug}`}
                className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-8 block font-bold text-blue-600">
                  Compare →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-12 text-center text-white">
          <h2 className="text-4xl font-black">
            Our Review Methodology
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Every review is evaluated using consistent criteria, including
            features, pricing, ease of use, customer support, integrations,
            security, performance, and overall value.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-black">
          Find Better Software Faster
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
          Browse reviews, compare products, and discover the best technology
          for your business.
        </p>

        <Link
          href="/best"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-slate-100"
        >
          View Best Software →
        </Link>
      </section>
    </main>
  );
}
