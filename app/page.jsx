import Head from "next/head";

export default function Home() {
  // Your actual affiliate links go here (used inside review cards)
  const affiliateLinks = {
    nordvpn: "https://go.nordvpn.net/aff_c?offer_id=...",
    expressvpn: "https://www.expressvpn.com/...",
    surfshark: "https://surfshark.com/...",
  };

  return (
    <>
      <Head>
        <title>NorthSky Reviews – Independent VPN, eSIM & AI Tool Tests 2026</title>
        <meta name="description" content="Hands-on reviews of the best VPNs, eSIMs, and AI tools. No fluff, just real speed tests and honest comparisons." />
        {/* JSON-LD for SEO Stars (Google Rich Snippets) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "NorthSky Reviews",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "9.6",
                bestRating: "10",
                ratingCount: "87",
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-8 font-sans">
        
        {/* ===== HERO SECTION ===== */}
        <section className="text-center py-12 border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            We Test, You Trust. <br />
            <span className="text-blue-600">Independent Reviews for 2026</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            No sponsored fluff. We buy, benchmark, and break every VPN, eSIM, and AI tool so you don't have to.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full">✅ 15+ VPNs tested</span>
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full">⚡ Speed loss measured</span>
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full">📆 Updated July 2026</span>
          </div>
          {/* Notice: These buttons go to INTERNAL review pages, not direct affiliate links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="/reviews/nordvpn" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
              🔍 Read Full VPN Comparison
            </a>
            <a href="/reviews/best-esim" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition">
              🌍 Best eSIMs 2026
            </a>
          </div>
        </section>

        {/* ===== COMPARISON TABLE (Conversion King) ===== */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-2">🧩 Side-by-Side: Top 3 VPNs</h2>
          <p className="text-gray-500 mb-6">See exactly how they stack up before you buy.</p>
          <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">🏆 NordVPN</th>
                  <th className="p-4 text-center">⚡ ExpressVPN</th>
                  <th className="p-4 text-center">💰 Surfshark</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-medium">Servers</td>
                  <td className="p-4 text-center">6,400+</td>
                  <td className="p-4 text-center">3,000+</td>
                  <td className="p-4 text-center">3,200+</td>
                </tr>
                <tr className="bg-blue-50/30">
                  <td className="p-4 font-medium">Streaming unblock</td>
                  <td className="p-4 text-center text-green-600">✅ Netflix, Hulu</td>
                  <td className="p-4 text-center text-green-600">✅ Netflix, BBC</td>
                  <td className="p-4 text-center text-green-600">✅ Disney+, HBO</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Speed loss (avg)</td>
                  <td className="p-4 text-center font-bold text-blue-600">12%</td>
                  <td className="p-4 text-center">18%</td>
                  <td className="p-4 text-center">15%</td>
                </tr>
                <tr className="bg-blue-50/30">
                  <td className="p-4 font-medium">Best price / mo</td>
                  <td className="p-4 text-center">$3.09</td>
                  <td className="p-4 text-center">$6.67</td>
                  <td className="p-4 text-center font-bold text-green-600">$2.19</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Our rating</td>
                  <td className="p-4 text-center font-bold text-blue-600">⭐ 9.7</td>
                  <td className="p-4 text-center font-bold">⭐ 9.4</td>
                  <td className="p-4 text-center font-bold">⭐ 9.1</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Action</td>
                  <td className="p-4 text-center">
                    <a href={affiliateLinks.nordvpn} target="_blank" rel="nofollow" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition">
                      Visit NordVPN →
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href={affiliateLinks.expressvpn} target="_blank" rel="nofollow" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold transition">
                      Visit Express →
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href={affiliateLinks.surfshark} target="_blank" rel="nofollow" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition">
                      Visit Surfshark →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">*Affiliate links support our independent testing at no extra cost to you.</p>
        </section>

        {/* ===== FEATURED REVIEWS WITH WINNER BADGES ===== */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">🏅 Featured Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="relative border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">
              <span className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-full">🏆 BEST OVERALL</span>
              <h3 className="text-xl font-bold mt-4">NordVPN</h3>
              <p className="text-sm text-gray-500">Blazing fast WireGuard, unblocks everything.</p>
              <div className="flex items-center gap-1 mt-2 text-amber-500 text-sm">⭐ 9.7 / 10</div>
              <a href="/reviews/nordvpn" className="block text-center mt-4 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg font-medium text-sm transition">
                📖 Read full review
              </a>
              {/* Affiliate link is INSIDE the review page, not here */}
            </div>

            {/* Card 2 */}
            <div className="relative border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">
              <span className="absolute top-3 right-3 bg-green-400 text-black text-[10px] font-bold px-3 py-1 rounded-full">💰 BEST BUDGET</span>
              <h3 className="text-xl font-bold mt-4">Surfshark</h3>
              <p className="text-sm text-gray-500">Unlimited devices + killer price.</p>
              <div className="flex items-center gap-1 mt-2 text-amber-500 text-sm">⭐ 9.1 / 10</div>
              <a href="/reviews/surfshark" className="block text-center mt-4 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg font-medium text-sm transition">
                📖 Read full review
              </a>
            </div>

            {/* Card 3 */}
            <div className="relative border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">
              <span className="absolute top-3 right-3 bg-purple-400 text-white text-[10px] font-bold px-3 py-1 rounded-full">✈️ BEST eSIM</span>
              <h3 className="text-xl font-bold mt-4">Saily</h3>
              <p className="text-sm text-gray-500">Global data packs, no physical SIM needed.</p>
              <div className="flex items-center gap-1 mt-2 text-amber-500 text-sm">⭐ 8.9 / 10</div>
              <a href="/reviews/saily" className="block text-center mt-4 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg font-medium text-sm transition">
                📖 Read full review
              </a>
            </div>
          </div>
        </section>

        {/* ===== AUTHOR TRUST SECTION ===== */}
        <section className="py-10 border-t border-gray-200 mt-4">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 rounded-2xl">
            <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-3xl font-bold text-blue-700">
              AN
            </div>
            <div>
              <h4 className="font-bold text-lg">Reviewed by Alex North</h4>
              <p className="text-sm text-gray-600">
                Cybersecurity nerd & digital nomad. I personally buy and test every product for <strong>2 weeks</strong> 
                before writing a review. No vendor ever pays for a rating.
              </p>
              <div className="flex gap-4 mt-2 text-xs text-gray-400">
                <span>📅 Updated: July 22, 2026</span>
                <span>🧪 24 products tested this year</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section className="text-center py-10">
          <h3 className="text-2xl font-semibold">📬 Get new reviews first</h3>
          <p className="text-gray-500 text-sm">No spam. Just honest tests every Wednesday.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto mt-4">
            <input type="email" placeholder="you@email.com" className="border p-3 rounded-lg flex-1" />
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Subscribe →
            </button>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-400 border-t pt-6 mt-4">
          <p>NorthSky Reviews © 2026 — Independent reviews with affiliate links. We may earn a commission.</p>
        </footer>
      </main>
    </>
  );
}