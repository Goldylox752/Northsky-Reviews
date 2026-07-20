import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {

  title:
    "NorthSky Reviews | Best VPNs, AI Tools, Travel Tech & Buying Guides",

  description:
    "NorthSky Reviews provides independent technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, hosting, cybersecurity, and gadgets.",

  keywords: [
    "VPN reviews",
    "NordVPN review",
    "Saily eSIM review",
    "AI tools",
    "technology reviews",
    "software comparisons",
    "travel technology",
    "cybersecurity tools",
    "buying guides",
    "NorthSky Reviews",
  ],

  authors: [
    {
      name: "NorthSky Reviews",
    },
  ],

  creator: "NorthSky Reviews",

  metadataBase: new URL(
    "https://northsky-reviews.vercel.app"
  ),

  openGraph: {

    title:
      "NorthSky Reviews | Smart Technology Recommendations",

    description:
      "Find the best VPNs, AI tools, travel technology, and software with expert reviews and comparisons.",

    url:
      "https://northsky-reviews.vercel.app",

    siteName:
      "NorthSky Reviews",

    type:
      "website",

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "NorthSky Reviews | Best Tech Recommendations",

    description:
      "Independent reviews and buying guides for VPNs, AI tools, software, and technology.",

  },


  robots: {

    index:
      true,

    follow:
      true,

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


        {/* Google Analytics 4 */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-528699336"
          strategy="afterInteractive"
        />


        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >

          {`

            window.dataLayer = window.dataLayer || [];

            function gtag(){
              window.dataLayer.push(arguments);
            }

            gtag(
              "js",
              new Date()
            );


            gtag(
              "config",
              "G-528699336",
              {
                page_path: window.location.pathname,
              }
            );

          `}

        </Script>



        {/* Organization Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({

              "@context":
                "https://schema.org",

              "@type":
                "Organization",

              "name":
                "NorthSky Reviews",

              "url":
                "https://northsky-reviews.vercel.app",

              "logo":
                "https://northsky-reviews.vercel.app/icon.png",

              "description":
                "Technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, hosting, cybersecurity, and gadgets.",

            }),
          }}
        />



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



            <div className="hidden gap-8 text-sm font-semibold md:flex">


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
                href="/deals"
                className="transition hover:text-blue-600"
              >
                Deals
              </Link>


            </div>


          </nav>


        </header>




        {children}




        {/* Footer */}

        <footer className="mt-20 border-t bg-slate-50">


          <div className="mx-auto max-w-7xl px-6 py-12">


            <div className="grid gap-10 md:grid-cols-3">


              <div>

                <h3 className="text-xl font-black">

                  NorthSky

                  <span className="text-blue-600">
                    Reviews
                  </span>

                </h3>


                <p className="mt-4 text-sm leading-6 text-slate-600">

                  Independent technology reviews,
                  comparisons, and buying guides helping
                  you make smarter purchasing decisions.

                </p>

              </div>




              <div>

                <h4 className="font-bold">
                  Explore
                </h4>


                <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">


                  <Link href="/reviews">
                    Reviews
                  </Link>


                  <Link href="/categories">
                    Categories
                  </Link>


                  <Link href="/comparisons">
                    Comparisons
                  </Link>


                  <Link href="/deals">
                    Deals
                  </Link>


                </div>


              </div>





              <div>

                <h4 className="font-bold">
                  Affiliate Disclosure
                </h4>


                <p className="mt-4 text-sm leading-6 text-slate-600">

                  Some links on NorthSky Reviews are
                  affiliate links. If you purchase through
                  these links, we may earn a commission at
                  no additional cost to you. This supports
                  our independent reviews.

                </p>


              </div>


            </div>





            <div className="mt-10 border-t pt-6 text-center text-sm text-slate-500">

              © {new Date().getFullYear()} NorthSky Reviews.
              All rights reserved.

            </div>



          </div>


        </footer>



      </body>


    </html>

  );

}