import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://northsky-reviews.vercel.app"),

  title: {
    default:
      "NorthSky Reviews | AI Tools, Software & Technology Reviews",
    template:
      "%s | NorthSky Reviews",
  },

  description:
    "Discover the best AI tools, software, automation platforms, and technology products. Compare reviews, rankings, and deals with NorthSky Reviews.",

  keywords: [
    "AI tools",
    "AI software reviews",
    "best AI tools 2026",
    "software comparisons",
    "technology reviews",
    "automation tools",
    "SaaS reviews",
    "NorthSky Reviews",
  ],

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  openGraph: {
    title:
      "NorthSky Reviews | AI Tools, Software & Technology Reviews",
    description:
      "Compare AI software, automation tools, and technology products with expert reviews and rankings.",
    url:
      "https://northsky-reviews.vercel.app",
    siteName:
      "NorthSky Reviews",
    locale:
      "en_CA",
    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",
    title:
      "NorthSky Reviews | AI Tools & Software Reviews",
    description:
      "Find and compare the best AI tools, software, and technology products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="fo-verify"
          content="b2dc6c38-a3b8-44d3-b6d1-9d5389957786"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}