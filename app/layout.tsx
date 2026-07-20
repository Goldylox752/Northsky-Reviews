import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "NorthSky Reviews | Best VPNs, AI Tools, Travel Tech & Buying Guides",

  description:
    "NorthSky Reviews provides independent technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, hosting, and gadgets.",

  keywords: [
    "VPN reviews",
    "AI tool reviews",
    "technology reviews",
    "travel tech",
    "software comparisons",
    "buying guides",
    "best tech products",
    "NorthSky Reviews",
  ],

  authors: [
    {
      name: "NorthSky Reviews",
    },
  ],

  creator: "NorthSky Reviews",

  openGraph: {
    title:
      "NorthSky Reviews | Smart Technology Recommendations",

    description:
      "Find the best VPNs, AI tools, travel technology, and software with expert reviews and comparisons.",

    type: "website",

    siteName: "NorthSky Reviews",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "NorthSky Reviews | Best Tech Recommendations",

    description:
      "Independent reviews and buying guides for VPNs, AI tools, software, and technology.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body className="bg-white text-slate-900 antialiased">


        {/* Header */}

        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">

          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


            <Link
              href="/"
              className="text-2xl font-black tracking-tight"
            >
              NorthSky
              <span className="text-blue-600">
                Reviews
              </span>
            </Link>



            <div className="hidden items-center gap-7 text-sm font-medium md:flex">


              <Link
                href="/"
                className="transition hover:text-blue-600"
              >
                Home
              </Link>


              <Link
                href="/reviews"
                className="transition hover:text-blue-600"
              >
                Reviews
              </Link>


              <Link
                href="/categories"
                className="transition hover:text-blue-600"
              >
                Categories
              </Link>


              <Link
                href="/comparisons"
                className="transition hover:text-blue-600"
              >
                Comparisons
              </Link>


              <Link
                href="/about"
                className="transition hover:text-blue-600"
              >
                About
              </Link>


            </div>


          </nav>

        </header>



        {children}



        {/* Footer */}

        <footer className="mt-20 border-t bg-slate-50">


          <div className="mx-auto max-w-7xl px-6 py-12">


            <div className="grid gap-8 md:grid-cols-3">


              <div>

                <h3 className="text-xl font-bold">
                  NorthSky
                  <span className="text-blue-600">
                    Reviews
                  </span>
                </h3>


                <p className="mt-4 text-sm leading-6 text-gray-600">

                  Independent technology reviews,
                  comparisons, and buying guides
                  helping you make smarter purchases.

                </p>

              </div>



              <div>

                <h4 className="font-bold">
                  Explore
                </h4>


                <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">


                  <Link href="/reviews">
                    Reviews
                  </Link>


                  <Link href="/categories">
                    Categories
                  </Link>


                  <Link href="/deals">
                    Deals
                  </Link>


                  <Link href="/contact">
                    Contact
                  </Link>


                </div>

              </div>



              <div>

                <h4 className="font-bold">
                  Disclosure
                </h4>


                <p className="mt-4 text-sm leading-6 text-gray-600">

                  Some links on NorthSky Reviews are
                  affiliate links. We may earn a commission
                  if you purchase through these links at no
                  additional cost to you.

                </p>


              </div>


            </div>



            <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">

              © {new Date().getFullYear()} NorthSky Reviews.
              All rights reserved.

            </div>


          </div>


        </footer>


      </body>

    </html>

  );
}