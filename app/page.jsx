import dynamic from "next/dynamic";
import Script from "next/script";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import TrustSection from "@/components/home/TrustSection";
import EditorPicks from "@/components/home/EditorPicks";
import Categories from "@/components/home/Categories";
import AIHub from "@/components/home/AIHub";
import ToolGrid from "@/components/home/ToolGrid";
import Comparisons from "@/components/home/Comparisons";
import Guides from "@/components/home/Guides";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

// Lazy load larger sections
const Deals = dynamic(() => import("@/components/home/Deals"));
const TravelHub = dynamic(() => import("@/components/home/TravelHub"));
const LatestReviews = dynamic(() => import("@/components/home/LatestReviews"));

export const metadata = {
  title: "NorthSky Reviews | Best AI Tools, Software & Technology Reviews 2026",
  description:
    "Discover the best AI tools, software, VPNs, laptops, travel technology and digital products. Compare expert reviews, ratings, features and pricing with NorthSky Reviews.",
  keywords: [
    "best AI tools 2026",
    "AI software reviews",
    "AI productivity tools",
    "AI automation tools",
    "ChatGPT alternatives",
    "best VPN Canada",
    "best laptops 2026",
    "software comparisons",
    "technology reviews",
    "travel technology",
  ],
  alternates: {
    canonical: "https://northsky-reviews.vercel.app",
  },
  openGraph: {
    title: "NorthSky Reviews | AI Tools, Software & Technology Reviews",
    description:
      "Independent reviews, comparisons and buying guides for AI tools, software and technology.",
    url: "https://northsky-reviews.vercel.app",
    siteName: "NorthSky Reviews",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NorthSky Reviews",
            url: "https://northsky-reviews.vercel.app",
            description:
              "AI tools, software reviews, comparisons and technology buying guides.",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://northsky-reviews.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Impact.com Tracking Pixel */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(i,m,p,a,c,t){
              c.ire_o=p;
              c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};
              t=a.createElement(m);
              var z=a.getElementsByTagName(m)[0];
              t.async=1;
              t.src=i;
              z.parentNode.insertBefore(t,z)
            })(
              'https://utt.impactcdn.com/P-A7113559-0acb-4a2e-b117-fe68c8f12f181.js',
              'script',
              'impactStat',
              document,
              window
            );
            impactStat('trackImpression');
          `,
        }}
      />

      <Hero />
      <Stats />
      <TrustSection />
      <EditorPicks />
      <AIHub />
      <Categories />
      <ToolGrid />
      <LatestReviews />
      <Deals />
      <Comparisons />
      <Guides />
      <TravelHub />
      <Newsletter />
      <Footer />
    </main>
  );
}