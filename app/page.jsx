export default function HomePage() {
  const topPicks = [
    {
      title: "🔒 Best VPN Pick",
      description:
        "NordVPN delivers industry-leading security, lightning-fast speeds, and reliable online privacy.",
      link: "Get NordVPN →",
      href: "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
    },
    {
      title: "✈️ Best Travel eSIM",
      description:
        "Saily makes staying connected while traveling simple, affordable, and hassle-free.",
      link: "View Saily →",
      href: "https://saily.com/",
    },
    {
      title: "🤖 Best AI Tools",
      description:
        "Discover the best AI tools to improve productivity, automate work, and grow your business.",
      link: "Explore AI Tools →",
      href: "/ai",
    },
  ];

  const reviews = [
    {
      title: "NordVPN Review",
      description:
        "Our complete review covering speed, streaming, privacy, security, and pricing.",
      href: "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
    },
    {
      title: "Saily eSIM Review",
      description:
        "Everything you need to know before choosing Saily for your next trip.",
      href: "https://saily.com/",
    },
    {
      title: "Best VPNs For Canada",
      description:
        "Compare the best VPN services available for Canadian users.",
      href: "/comparisons",
    },
  ];

  const trust = [
    {
      title: "✔ Research Based",
      description:
        "Every recommendation is based on hands-on testing, research, and real-world performance.",
    },
    {
      title: "✔ Honest Comparisons",
      description:
        "We compare features, pricing, and value so you can make informed buying decisions.",
    },
    {
      title: "✔ Regularly Updated",
      description:
        "Our recommendations stay current as products and technology evolve.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="text-3xl font-extrabold">
            NorthSky
            <span className="text-sky-400"> Reviews</span>
          </a>

          <nav className="hidden gap-6 text-slate-300 md:flex">
            <a href="/">Home</a>
            <a href="/reviews">Reviews</a>
            <a href="/comparisons">Comparisons</a>
            <a href="/ai">AI Tools</a>
            <a href="/travel">Travel</a>
            <a href="/deals">Deals</a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-32 text-center">

        <h1 className="text-5xl font-black md:text-7xl">
          Find The Best Tech
          <br />
          Before You <span className="text-sky-400">Buy</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300">
          Independent reviews, comparisons, and buying guides covering VPNs,
          AI tools, travel technology, hosting, software, and gadgets.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="/reviews"
            className="rounded-lg bg-sky-400 px-8 py-4 font-bold text-slate-900"
          >
            Explore Reviews
          </a>

          <a
            href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-lg border border-sky-400 px-8 py-4 font-bold text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition"
          >
            Get NordVPN
          </a>

        </div>

      </section>

      {/* Search */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <input
          type="search"
          placeholder="Search reviews, products, and comparisons..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-5 text-lg outline-none"
        />
      </section>

      {/* Top Picks */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-10 text-4xl font-bold">
            NorthSky Top Picks
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {topPicks.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2"
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300">
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
                  className="mt-6 inline-block rounded-lg bg-sky-400 px-5 py-3 font-bold text-slate-900 hover:bg-sky-300 transition"
                >
                  {item.link}
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Reviews */}
      <section className="bg-slate-900 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-10 text-4xl font-bold">
            Featured Reviews
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {reviews.map((review) => (

              <div
                key={review.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-8"
              >

                <h3 className="text-xl font-bold">
                  {review.title}
                </h3>

                <p className="mt-4 text-slate-300">
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
                  className="mt-5 inline-block font-semibold text-sky-400 hover:text-sky-300"
                >
                  Read Review →
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Trust */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-10 text-4xl font-bold">
            Why Trust NorthSky Reviews?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {trust.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl bg-slate-900 p-8"
              >

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Newsletter */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Get The Latest Reviews
          </h2>

          <p className="mt-4 text-slate-300">
            Join our newsletter for expert reviews, buying guides, and exclusive technology deals.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg p-4 text-black"
            />

            <button className="rounded-lg bg-sky-400 px-6 py-4 font-bold text-black">
              Subscribe
            </button>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10 text-center text-slate-400">

        <p>
          © {new Date().getFullYear()} NorthSky Reviews. All Rights Reserved.
        </p>

        <p className="mt-3 text-sm">
          Disclosure: Some links on this website are affiliate links. If you purchase through these links, we may earn a commission at no additional cost to you. This helps support NorthSky Reviews and allows us to continue creating independent reviews.
        </p>

      </footer>

    </main>
  );
}