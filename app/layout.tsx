import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorthSky Reviews | Honest Product Reviews & Buying Guides",
  description:
    "Discover trusted product reviews, comparisons, and buying guides to help you make smarter purchases.",
  keywords: [
    "product reviews",
    "buying guides",
    "technology reviews",
    "best products",
    "NorthSky Reviews"
  ],
  authors: [
    {
      name: "NorthSky Reviews"
    }
  ],
  openGraph: {
    title: "NorthSky Reviews",
    description:
      "Honest reviews and recommendations for smarter shopping.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a
              href="/"
              className="text-2xl font-bold text-slate-900"
            >
              NorthSky<span className="text-blue-600">Reviews</span>
            </a>

            <div className="flex gap-6 text-sm font-medium">
              <a href="/" className="hover:text-blue-600">
                Home
              </a>

              <a href="/reviews" className="hover:text-blue-600">
                Reviews
              </a>

              <a href="/categories" className="hover:text-blue-600">
                Categories
              </a>

              <a href="/about" className="hover:text-blue-600">
                About
              </a>
            </div>
          </nav>
        </header>

        {children}

        <footer className="mt-20 border-t bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} NorthSky Reviews. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}