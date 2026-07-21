import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title:
    "Best AI Tools 2026 – Expert Reviews & Comparisons | NorthSky Reviews",
  description:
    "Discover the best AI tools for business, productivity, coding, marketing, writing, and automation. Expert reviews and comparisons by NorthSky Reviews.",
  keywords: [
    "best AI tools 2026",
    "AI software reviews",
    "ChatGPT alternatives",
    "AI productivity tools",
    "AI automation tools",
    "AI coding tools",
  ],
  openGraph: {
    title: "Best AI Tools 2026 – Expert Reviews",
    description: "Compare the top AI tools for business, productivity, and creativity.",
    url: "https://northsky-reviews.vercel.app",
    siteName: "NorthSky Reviews",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews – Best AI Tools 2026",
      },
    ],
  },
};

const tools = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    best: "Best Overall AI Tool",
    description:
      "Powerful AI assistant for writing, research, coding, brainstorming, business tasks, and everyday productivity.",
    link: "https://chat.openai.com",
    button: "Try ChatGPT →",
    rating: "4.8",
  },
  {
    name: "Claude AI",
    category: "AI Assistant",
    best: "Best For Writing",
    description:
      "Advanced AI assistant designed for long documents, analysis, reasoning, and professional writing.",
    link: "https://claude.ai",
    button: "Try Claude →",
    rating: "4.7",
  },
  {
    name: "Midjourney",
    category: "AI Images",
    best: "Best AI Image Generator",
    description:
      "Create stunning AI artwork, marketing images, designs, and creative visuals.",
    link: "https://www.midjourney.com",
    button: "Explore Midjourney →",
    rating: "4.9",
  },
  {
    name: "GitHub Copilot",
    category: "AI Coding",
    best: "Best For Developers",
    description:
      "AI coding assistant that helps developers write, debug, and understand software faster.",
    link: "https://github.com/features/copilot",
    button: "Get Copilot →",
    rating: "4.6",
  },
  {
    name: "Jasper AI",
    category: "AI Marketing",
    best: "Best Marketing AI",
    description:
      "AI writing platform built for businesses, marketing teams, and content creation.",
    link: "https://www.jasper.ai",
    button: "Visit Jasper →",
    rating: "4.5",
  },
  {
    name: "Perplexity AI",
    category: "AI Search",
    best: "Best AI Research Tool",
    description:
      "AI-powered search engine for research, answers, and information discovery.",
    link: "https://www.perplexity.ai",
    button: "Try Perplexity →",
    rating: "4.7",
  },
];

const categories = [
  { icon: "✍️", name: "AI Writing", slug: "ai-writing" },
  { icon: "💻", name: "AI Coding", slug: "ai-coding" },
  { icon: "🎨", name: "AI Images", slug: "ai-images" },
  { icon: "📈", name: "AI Business", slug: "ai-business" },
  { icon: "⚡", name: "AI Automation", slug: "ai-automation" },
  { icon: "🔍", name: "AI Research", slug: "ai-research" },
];

export default function AIToolsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Best AI Tools 2026",
            description: "AI software reviews and comparisons.",
            url: "https://northsky-reviews.vercel.app",
            about: {
              "@type": "Thing",
              name: "Artificial Intelligence Tools",
            },
          }),
        }}
      />

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300">
            🔥 Updated for 2026
          </div>
          <h1 className="text-5xl font-black md:text-7xl">
            Best AI Tools <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expert Reviews 2026
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
            Discover the best AI software for productivity, business, coding,
            creativity, and automation – tested and reviewed by experts.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#tools"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Browse Tools ↓
            </Link>
            <Link
              href="/reviews"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Read Reviews →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            ⭐ 100+ tools reviewed • 50+ detailed comparisons • Updated weekly
          </p>
        </div>
      </section>

      {/* ─── Categories ─────────────────────────────────────────── */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black">
            Explore AI Categories
          </h2>
          <p className="mt-2 text-center text-slate-600">
            Find the right tool for your needs
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={`/categories/${item.slug}`}
                className="flex items-center justify-center gap-3 rounded-xl bg-white p-6 font-bold shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-2xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tools Grid ─────────────────────────────────────────── */}
      <section id="tools" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black">Top AI Recommendations</h2>
            <p className="mt-2 text-slate-600">
              Hand-picked by our team of AI experts
            </p>
          </div>
          <Link
            href="/all-tools"
            className="hidden font-bold text-blue-600 hover:underline sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                  {tool.category}
                </span>
                <span className="text-sm font-bold text-green-600">
                  ⭐ {tool.rating}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-black">{tool.name}</h3>
              <p className="mt-2 font-bold text-green-600">{tool.best}</p>
              <p className="mt-5 text-slate-600">{tool.description}</p>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 inline-block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-700"
              >
                {tool.button}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Newsletter ─────────────────────────────────────────── */}
      <Newsletter variant="hero" />

      {/* ─── How We Review ──────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-black">
            How We Review AI Tools
          </h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            We test every tool thoroughly – so you don't have to.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🔬",
                title: "Hands-On Testing",
                desc: "We personally test every tool for features, speed, and ease of use.",
              },
              {
                icon: "📊",
                title: "Data-Driven Analysis",
                desc: "We compare performance, pricing, and real-world value.",
              },
              {
                icon: "✍️",
                title: "Honest Recommendations",
                desc: "We recommend only tools we'd use ourselves – no fluff.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 text-center shadow"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Affiliate Disclosure ──────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-100 p-8 text-center">
          <p className="text-sm text-slate-600">
            🔗 Affiliate Disclosure: Some links on NorthSky Reviews may be
            affiliate links. We may earn a commission at no extra cost to you.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            We only recommend products we trust.
          </p>
        </div>
      </section>
    </main>
  );
}