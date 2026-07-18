export default function HomePage() {
  const topPicks = [
    {
      title: "🔒 Best VPN Pick",
      description:
        "NordVPN delivers strong security, fast speeds, and reliable privacy protection.",
      link: "View Review →",
    },
    {
      title: "✈️ Best Travel eSIM",
      description:
        "Saily makes staying connected worldwide simple and affordable.",
      link: "View Review →",
    },
    {
      title: "🤖 Best AI Tools",
      description:
        "Discover AI platforms that help businesses save time and work smarter.",
      link: "Explore Tools →",
    },
  ];

  const reviews = [
    {
      title: "NordVPN Review",
      description:
        "Complete breakdown of speed, privacy, security, and value.",
    },
    {
      title: "Saily eSIM Review",
      description:
        "Everything you need to know before using Saily for travel.",
    },
    {
      title: "Best VPNs For Canada",
      description:
        "Compare leading VPN providers and find the right option.",
    },
  ];

  const trust = [
    {
      title: "✔ Research Based",
      description:
        "We analyze features, pricing, performance, and usability.",
    },
    {
      title: "✔ Honest Comparisons",
      description:
        "We help you understand differences before buying.",
    },
    {
      title: "✔ Updated Recommendations",
      description:
        "Technology changes quickly. We keep guides current.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="text-3xl font-extrabold">
            NorthSky
            <span className="text-sky-400">
              Reviews
            </span>
          </a>


          <nav className="hidden gap-6 md:flex text-slate-300">

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

          Before You{" "}
          <span className="text-sky-400">
            Buy
          </span>

        </h1>


        <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300">

          Independent reviews, comparisons, and buying guides
          for VPNs, AI tools, travel technology, hosting services,
          and gadgets.

        </p>


        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="/reviews"
            className="rounded-lg bg-sky-400 px-8 py-4 font-bold text-slate-900"
          >
            Explore Reviews
          </a>


          <a
            href="/recommendations"
            className="rounded-lg border border-slate-500 px-8 py-4 font-bold"
          >
            Top Recommendations
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
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:-translate-y-2 transition"
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>


                <p className="mt-4 text-slate-300">
                  {item.description}
                </p>


                <a className="mt-6 block text-sky-400 font-bold">
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

            {reviews.map((review)=>(

              <div
                key={review.title}
                className="rounded-2xl bg-slate-950 p-8 border border-slate-800"
              >

                <h3 className="text-xl font-bold">
                  {review.title}
                </h3>


                <p className="mt-4 text-slate-300">
                  {review.description}
                </p>


                <a className="mt-5 block text-sky-400">
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

            {trust.map((item)=>(

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
            Join our newsletter for technology reviews,
            deals, and buying guides.
          </p>


          <input
            placeholder="Enter your email"
            className="mt-8 rounded-lg p-4 text-black"
          />


          <button className="ml-3 rounded-lg bg-sky-400 px-6 py-4 font-bold text-black">
            Subscribe
          </button>

        </div>

      </section>




      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10 text-center text-slate-400">

        <p>
          © {new Date().getFullYear()} NorthSky Reviews.
          All Rights Reserved.
        </p>


        <p className="mt-3 text-sm">
          Some links are affiliate links. We may earn a commission
          at no extra cost to you.
        </p>

      </footer>


    </main>
  );
}