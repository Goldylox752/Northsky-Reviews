import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-black text-white">
              <span className="text-blue-500">NorthSky</span> Reviews
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              NorthSky Reviews helps people discover the best AI software,
              business tools, automation platforms, and technology products
              through independent reviews, comparisons, and buying guides.
            </p>

            <div className="mt-6 flex gap-3">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                AI Reviews
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold">
                SaaS
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold">
                Tech
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/ai" className="hover:text-white">
                  AI Tools
                </Link>
              </li>

              <li>
                <Link href="/comparisons" className="hover:text-white">
                  Comparisons
                </Link>
              </li>

              <li>
                <Link href="/categories" className="hover:text-white">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/reviews" className="hover:text-white">
                  Reviews
                </Link>
              </li>

              <li>
                <Link href="/best" className="hover:text-white">
                  Best Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link href="/disclosure" className="hover:text-white">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Stay Updated
            </h3>

            <p className="mb-5 text-slate-400">
              Get the latest AI software reviews, rankings, and technology news.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © {year} NorthSky Reviews. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/ai" className="hover:text-white">
                AI
              </Link>

              <Link href="/comparisons" className="hover:text-white">
                Comparisons
              </Link>

              <Link href="/reviews" className="hover:text-white">
                Reviews
              </Link>

              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
