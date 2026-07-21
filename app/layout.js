import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://northsky-reviews.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NorthSky Reviews | Best VPNs, AI Tools, Travel Tech & Buying Guides",
    template: "%s | NorthSky Reviews",
  },
  description:
    "Independent technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, cybersecurity, and gadgets.",
  keywords: [
    "VPN reviews",
    "AI tools",
    "travel tech",
    "buying guides",
    "software reviews",
    "cybersecurity",
    "tech comparisons",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NorthSky Reviews",
    description: "Independent technology reviews and buying guides.",
    url: siteUrl,
    siteName: "NorthSky Reviews",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews - Technology Reviews & Buying Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthSky Reviews",
    description: "Independent technology reviews and buying guides.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  verification: {
    google: "your-google-verification-code", // replace if you have one
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased flex flex-col min-h-screen">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-528699336"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ window.dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-528699336');
            `,
          }}
        />

        {/* JSON-LD: Organization + WebSite */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NorthSky Reviews",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "NorthSky Reviews",
                url: siteUrl,
                logo: `${siteUrl}/logo.png`,
              },
            }),
          }}
        />

        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-backdrop-blur:bg-white/80">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
            <Link href="/" className="text-2xl font-black">
              NorthSky<span className="text-blue-600">Reviews</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <Link href="/reviews" className="text-sm font-medium hover:text-blue-600">
                Reviews
              </Link>
              <Link href="/comparisons" className="text-sm font-medium hover:text-blue-600">
                Comparisons
              </Link>
              <Link href="/ai" className="text-sm font-medium hover:text-blue-600">
                AI Hub
              </Link>
              <Link href="/deals" className="text-sm font-medium hover:text-blue-600">
                Deals
              </Link>
              <Link
                href="/search"
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium hover:bg-slate-200"
                aria-label="Search"
              >
                🔍 Search
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu (hidden by default) */}
          <div id="mobile-menu" className="hidden border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link href="/reviews" className="text-sm font-medium hover:text-blue-600">
                Reviews
              </Link>
              <Link href="/comparisons" className="text-sm font-medium hover:text-blue-600">
                Comparisons
              </Link>
              <Link href="/ai" className="text-sm font-medium hover:text-blue-600">
                AI Hub
              </Link>
              <Link href="/deals" className="text-sm font-medium hover:text-blue-600">
                Deals
              </Link>
              <Link href="/search" className="text-sm font-medium text-blue-600">
                🔍 Search
              </Link>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="font-bold">NorthSky Reviews</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Independent technology reviews and buying guides.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold">Explore</h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li><Link href="/reviews" className="hover:text-blue-600">Reviews</Link></li>
                  <li><Link href="/comparisons" className="hover:text-blue-600">Comparisons</Link></li>
                  <li><Link href="/ai" className="hover:text-blue-600">AI Hub</Link></li>
                  <li><Link href="/deals" className="hover:text-blue-600">Deals</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold">Topics</h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li><Link href="/categories/vpn" className="hover:text-blue-600">VPNs</Link></li>
                  <li><Link href="/categories/ai-tools" className="hover:text-blue-600">AI Tools</Link></li>
                  <li><Link href="/categories/travel-tech" className="hover:text-blue-600">Travel Tech</Link></li>
                  <li><Link href="/categories/software" className="hover:text-blue-600">Software</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold">About</h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-blue-600">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} NorthSky Reviews. All rights reserved.</p>
              <p className="mt-1 text-xs">We may earn a commission from affiliate links.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}