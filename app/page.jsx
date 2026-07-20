export default function HomePage() {
  const topPicks = [
    {
      title: "🔒 Editor's Choice — NordVPN",
      description:
        "The best overall VPN for privacy, streaming, gaming, and online security.",
      button: "Get NordVPN →",
      href: "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
      badge: "Editor's Choice",
    },
    {
      title: "✈️ Best Travel eSIM — Saily",
      description:
        "Affordable mobile data in 200+ destinations with instant activation and no roaming surprises.",
      button: "Get Saily →",
      href: "https://go.saily.site/aff_c?offer_id=101&aff_id=13276",
      badge: "Best Value",
    },
    {
      title: "🤖 Best AI Tools",
      description:
        "Discover the best AI software for writing, coding, productivity, and business growth.",
      button: "Explore AI →",
      href: "/ai",
      badge: "Trending",
    },
  ];

  const reviews = [
    {
      title: "NordVPN Review",
      description:
        "An in-depth review covering speed, security, streaming, privacy, pricing, and overall value.",
      href: "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
      rating: "★★★★★",
    },
    {
      title: "Saily eSIM Review",
      description:
        "Everything you need to know before using Saily for your next international trip.",
      href: "https://go.saily.site/aff_c?offer_id=101&aff_id=13276",
      rating: "★★★★★",
    },
    {
      title: "Best VPNs For Canada",
      description:
        "Compare the top VPN providers for Canadians based on speed, privacy, streaming, and price.",
      href: "/comparisons",
      rating: "★★★★★",
    },
  ];

  const trust = [
    {
      title: "✔ Research Based",
      description:
        "Recommendations are based on detailed research, testing, pricing, and overall value.",
    },
    {
      title: "✔ Honest Reviews",
      description:
        "We explain the pros and cons so you can make informed buying decisions.",
    },
    {
      title: "✔ Frequently Updated",
      description:
        "Our reviews are updated regularly to reflect product improvements and pricing changes.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="text-3xl font-black tracking-tight"
          >
            NorthSky
            <span className="text-sky-400"> Reviews</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">

            <a href="/" className="hover:text-sky-400 transition">
              Home
            </a>

            <a href="/reviews" className="hover:text-sky-400 transition">
              Reviews
            </a>

            <a href="/comparisons" className="hover:text-sky-400 transition">
              Comparisons
            </a>

            <a href="/ai" className="hover:text-sky-400 transition">
              AI Tools
            </a>

            <a href="/travel" className="hover:text-sky-400 transition">
              Travel
            </a>

            <a href="/deals" className="hover:text-sky-400 transition">
              Deals
            </a>

          </nav>

        </div>

      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-28 text-center">

        <div className="mx-auto max-w-5xl">

          <span className="inline-block rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300">
            Independent Reviews • Expert Recommendations • Trusted Buying Guides
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Find The Best Tech
            <br />

            Before You
            <span className="text-sky-400"> Buy</span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">

            NorthSky Reviews helps you choose the best VPNs,
            AI tools, travel technology, software, web hosting,
            and productivity apps through honest reviews,
            comparisons, and buying guides.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <a
              href="/reviews"
              className="rounded-xl bg-sky-400 px-8 py-4 font-bold text-slate-900 transition hover:scale-105 hover:bg-sky-300"
            >
              Browse Reviews
            </a>

            <a
              href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-xl border border-sky-400 px-8 py-4 font-bold text-sky-400 transition hover:bg-sky-400 hover:text-slate-900"
            >
              🔒 Get NordVPN
            </a>

          </div>

          <p className="mt-10 text-sm text-slate-400">
            ⭐ Trusted recommendations • Updated regularly • Affiliate supported
          </p>

        </div>

      </section>

      {/* Affiliate Disclosure */}
      <section className="border-y border-slate-800 bg-slate-900 px-6 py-6">

        <div className="mx-auto max-w-5xl text-center text-sm text-slate-400">

          <strong className="text-white">
            Affiliate Disclosure:
          </strong>{" "}
          Some links on NorthSky Reviews are affiliate links.
          If you purchase through them, we may earn a commission
          at no additional cost to you. Our recommendations are
          based on research and independent evaluation.

        </div>

      </section>

      {/* Search */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <input
          type="search"
          placeholder="Search VPNs, AI tools, hosting, software, and travel technology..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-5 text-lg text-white outline-none transition focus:border-sky-400"
        />

      </section>
            {/* Top Picks */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-black">
              ⭐ NorthSky Top Picks
            </h2>

            <p className="mt-4 text-slate-400">
              Our highest-rated products based on performance, value, security,
              and overall user experience.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {topPicks.map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-2xl"
              >

                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-300">
                  {item.badge}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <div className="mt-3 text-yellow-400 text-lg">
                  ★★★★★
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer sponsored"
                      : undefined
                  }
                  className="mt-8 inline-flex items-center rounded-xl bg-sky-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-sky-300"
                >
                  {item.button}
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Popular Categories */}
      <section className="bg-slate-900 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-black">
              Browse Categories
            </h2>

            <p className="mt-4 text-slate-400">
              Explore reviews and buying guides across today's most popular
              technology categories.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "🔒 VPNs",
                href: "/reviews",
              },
              {
                title: "🤖 AI Tools",
                href: "/ai",
              },
              {
                title: "✈️ Travel Tech",
                href: "/travel",
              },
              {
                title: "💻 Web Hosting",
                href: "/hosting",
              },
              {
                title: "🛡 Cybersecurity",
                href: "/security",
              },
              {
                title: "⚙ Productivity",
                href: "/productivity",
              },
              {
                title: "📊 Comparisons",
                href: "/comparisons",
              },
              {
                title: "🔥 Best Deals",
                href: "/deals",
              },
            ].map((category) => (

              <a
                key={category.title}
                href={category.href}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center font-semibold transition hover:border-sky-500 hover:bg-slate-800 hover:text-sky-300"
              >
                {category.title}
              </a>

            ))}

          </div>

        </div>

      </section>

      {/* Featured Reviews */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-black">
              Featured Reviews
            </h2>

            <p className="mt-4 text-slate-400">
              Detailed reviews, hands-on testing, and honest recommendations.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {reviews.map((review) => (

              <div
                key={review.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-sky-500 hover:-translate-y-2"
              >

                <div className="text-lg text-yellow-400">
                  {review.rating}
                </div>

                <h3 className="mt-3 text-2xl font-bold">
                  {review.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  {review.description}
                </p>

                <a
                  href={review.href}
                  target={review.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    review.href.startsWith("http")
                      ? "noopener noreferrer sponsored"
                      : undefined
                  }
                  className="mt-8 inline-flex items-center font-bold text-sky-400 transition hover:text-sky-300"
                >
                  Read Full Review →
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* Why Trust NorthSky Reviews */}
      <section className="bg-slate-900 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-black">
              Why Trust NorthSky Reviews?
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-slate-400">
              Our goal is to help you make smarter technology purchases with
              transparent reviews, honest comparisons, and regularly updated
              recommendations.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {trust.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition hover:border-sky-500 hover:-translate-y-2"
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Featured Deals */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-black">
              🔥 Featured Deals
            </h2>

            <p className="mt-4 text-slate-400">
              Save money with our highest-rated technology recommendations.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* NordVPN */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-bold text-green-400">
                Limited Time
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                🔒 NordVPN
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                Protect your privacy, stream securely, and browse the internet
                with one of the world's most trusted VPN services.
              </p>

              <a
                href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 inline-block rounded-xl bg-sky-400 px-6 py-4 font-bold text-slate-900 transition hover:bg-sky-300"
              >
                Get NordVPN →
              </a>

            </div>

            {/* Saily */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-400">
                Travel Essential
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                ✈️ Saily eSIM
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                Stay connected in over 200 destinations with affordable mobile
                data plans and instant activation—no physical SIM card required.
              </p>

              <a
                href="https://go.saily.site/aff_c?offer_id=101&aff_id=13276"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 inline-block rounded-xl bg-sky-400 px-6 py-4 font-bold text-slate-900 transition hover:bg-sky-300"
              >
                Get Saily →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Newsletter */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-12 text-center">

          <h2 className="text-4xl font-black">
            Stay Ahead of the Latest Tech
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Join the NorthSky Reviews newsletter to receive expert buying
            guides, exclusive deals, software recommendations, and technology
            news delivered straight to your inbox.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">

            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-xl border border-slate-700 bg-slate-950 px-6 py-4 text-white outline-none focus:border-sky-400 md:w-96"
            />

            <button
              className="rounded-xl bg-sky-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-sky-300"
            >
              Subscribe
            </button>

          </div>

          <p className="mt-6 text-sm text-slate-500">
            No spam. Unsubscribe anytime.
          </p>

        </div>

      </section>

      {/* Call To Action */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-5xl rounded-3xl border border-sky-500/30 bg-sky-500/10 p-12 text-center">

          <h2 className="text-4xl font-black">
            Ready to Choose the Right Tech?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Browse our latest reviews, compare top-rated products, and discover
            the best technology for your needs.
          </p>

          <a
            href="/reviews"
            className="mt-10 inline-block rounded-xl bg-sky-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-sky-300"
          >
            Browse All Reviews →
          </a>

        </div>

      </section>
            {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

          {/* Brand */}
          <div>

            <h3 className="text-2xl font-black">
              NorthSky
              <span className="text-sky-400"> Reviews</span>
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Independent technology reviews, comparisons, and buying guides
              to help you choose the best software, VPNs, AI tools, travel
              technology, web hosting, and cybersecurity products.
            </p>

          </div>

          {/* Reviews */}
          <div>

            <h4 className="text-lg font-bold">
              Reviews
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <a href="/reviews" className="hover:text-sky-400 transition">
                  VPN Reviews
                </a>
              </li>

              <li>
                <a href="/ai" className="hover:text-sky-400 transition">
                  AI Tools
                </a>
              </li>

              <li>
                <a href="/travel" className="hover:text-sky-400 transition">
                  Travel Tech
                </a>
              </li>

              <li>
                <a href="/comparisons" className="hover:text-sky-400 transition">
                  Comparisons
                </a>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-lg font-bold">
              Company
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li>
                <a href="/about" className="hover:text-sky-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-sky-400 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="/privacy" className="hover:text-sky-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/affiliate-disclosure" className="hover:text-sky-400 transition">
                  Affiliate Disclosure
                </a>
              </li>

            </ul>

          </div>

          {/* Featured Partners */}
          <div>

            <h4 className="text-lg font-bold">
              Featured Partners
            </h4>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-xl bg-sky-400 px-5 py-3 text-center font-bold text-slate-900 transition hover:bg-sky-300"
              >
                🔒 Get NordVPN
              </a>

              <a
                href="https://go.saily.site/aff_c?offer_id=101&aff_id=13276"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-xl border border-sky-400 px-5 py-3 text-center font-bold text-sky-400 transition hover:bg-sky-400 hover:text-slate-900"
              >
                ✈️ Get Saily eSIM
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-slate-800">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} NorthSky Reviews. All rights reserved.
            </p>

            <p className="max-w-3xl text-center text-sm leading-6 text-slate-500 md:text-right">
              <strong className="text-slate-300">Affiliate Disclosure:</strong>{" "}
              Some links on NorthSky Reviews are affiliate links. If you purchase
              through these links, we may earn a commission at no additional cost
              to you. Our recommendations are based on independent research,
              testing, and editorial evaluation.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}