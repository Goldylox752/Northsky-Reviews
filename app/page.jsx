import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

export const metadata = {
  title:
    "NorthSky Reviews | Best AI Tools, Software & Tech Reviews 2026",
  description:
    "Find the best AI tools, software, VPNs, laptops, hosting, and technology products. Expert reviews, comparisons, and buying guides from NorthSky Reviews.",
  keywords: [
    "best AI tools 2026",
    "AI software reviews",
    "technology reviews",
    "VPN reviews",
    "software comparisons",
    "best productivity tools",
    "AI automation tools",
  ],
  openGraph: {
    title: "NorthSky Reviews | Best AI Tools & Tech Reviews 2026",
    description:
      "Independent reviews and comparisons to help you choose the best technology products.",
    url: "https://northsky-reviews.vercel.app",
    siteName: "NorthSky Reviews",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews",
      },
    ],
  },
};

const topTools = [...tools]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 6);


const trendingTools = tools.slice(0,6);


export default function HomePage(){

return (

<main className="min-h-screen bg-white text-slate-900">


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify({
"@context":"https://schema.org",
"@type":"WebSite",
"name":"NorthSky Reviews",
"url":"https://northsky-reviews.vercel.app",
"description":
"AI tools, software, and technology reviews.",
potentialAction:{
"@type":"SearchAction",
target:
"https://northsky-reviews.vercel.app/all-tools?search={search_term_string}",
"query-input":
"required name=search_term_string"
}
})
}}
/>



{/* HERO */}

<section className="bg-gradient-to-br from-slate-950 via-slate-800 to-blue-900 px-6 py-24 text-center text-white">

<div className="mx-auto max-w-5xl">


<div className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
🚀 Updated Weekly For 2026
</div>


<h1 className="mt-6 text-5xl font-black md:text-7xl">

Find The Best

<br/>

<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">

AI Tools & Technology

</span>

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Expert reviews, comparisons, and buying guides for AI software,
business tools, laptops, VPNs, hosting, and emerging technology.

</p>



{/* SEARCH */}

<form
action="/all-tools"
className="mx-auto mt-10 flex max-w-3xl"
>

<input

name="search"

placeholder="Search AI tools, software, VPNs, laptops..."

className="w-full rounded-l-xl px-6 py-4 text-slate-900 outline-none"

/>


<button

className="rounded-r-xl bg-blue-600 px-8 font-bold hover:bg-blue-700"

>

Search

</button>


</form>



<div className="mt-10 flex flex-wrap justify-center gap-4">

<Link

href="#tools"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold"

>

Browse Reviews ↓

</Link>


<Link

href="/comparisons"

className="rounded-xl border border-white/30 px-8 py-4 font-bold"

>

Compare Products →

</Link>

</div>



</div>

</section>




{/* STATS */}

<section className="border-b bg-white px-6 py-10">

<div className="mx-auto grid max-w-5xl gap-6 text-center md:grid-cols-4">


<div>
<h3 className="text-3xl font-black">
{tools.length}+
</h3>
<p className="text-slate-600">
Reviews
</p>
</div>


<div>
<h3 className="text-3xl font-black">
{comparisons.length}+
</h3>
<p className="text-slate-600">
Comparisons
</p>
</div>


<div>
<h3 className="text-3xl font-black">
50+
</h3>
<p className="text-slate-600">
Buying Guides
</p>
</div>


<div>
<h3 className="text-3xl font-black">
Weekly
</h3>
<p className="text-slate-600">
Updates
</p>
</div>


</div>

</section>
{/* BEST OF 2026 */}

<section className="bg-slate-50 px-6 py-20">

<div className="mx-auto max-w-6xl">

<div className="text-center">

<h2 className="text-4xl font-black">
🏆 Best Technology Picks 2026
</h2>

<p className="mt-3 text-slate-600">
Our top recommendations across the most popular categories.
</p>

</div>


<div className="mt-10 grid gap-6 md:grid-cols-3">


{[
{
icon:"🤖",
title:"Best AI Assistant",
desc:"Top AI tools for productivity, research, and business."
},

{
icon:"💻",
title:"Best Coding AI",
desc:"AI-powered development tools for programmers."
},

{
icon:"🎨",
title:"Best Creative AI",
desc:"Image, video, and design tools for creators."
},

{
icon:"🔒",
title:"Best VPN",
desc:"Privacy, security, and streaming recommendations."
},

{
icon:"🌐",
title:"Best Web Tools",
desc:"Hosting, website builders, and online services."
},

{
icon:"📱",
title:"Best Tech Gear",
desc:"Laptops, accessories, and smart devices."
}

].map((item)=>(

<div

key={item.title}

className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>

<div className="text-4xl">
{item.icon}
</div>


<h3 className="mt-4 text-xl font-black">
{item.title}
</h3>


<p className="mt-3 text-slate-600">
{item.desc}
</p>


<Link

href="/all-tools"

className="mt-5 inline-block font-bold text-blue-600 hover:underline"

>

Explore →

</Link>


</div>

))}


</div>

</div>

</section>





{/* TRENDING TOOLS */}

<section className="px-6 py-20">

<div className="mx-auto max-w-7xl">


<div className="flex items-center justify-between">

<div>

<h2 className="text-4xl font-black">

🔥 Trending Right Now

</h2>


<p className="mt-2 text-slate-600">

Popular tools readers are exploring this week.

</p>

</div>


<Link

href="/all-tools"

className="font-bold text-blue-600"

>

View All →

</Link>


</div>



<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


{trendingTools.map((tool)=>(


<Link

key={tool.slug}

href={tool.reviewPath || "/all-tools"}

className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"

>


<div className="flex justify-between">

<span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">

{tool.category}

</span>


<span className="font-bold text-green-600">

⭐ {tool.rating}

</span>


</div>


<h3 className="mt-5 text-xl font-black">

{tool.name}

</h3>


<p className="mt-2 text-slate-600 line-clamp-2">

{tool.description}

</p>


<span className="mt-4 inline-block font-bold text-blue-600">

Read Review →

</span>


</Link>


))}


</div>


</div>

</section>





{/* CATEGORIES */}

<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-6xl">


<h2 className="text-center text-4xl font-black">

Explore Categories

</h2>


<p className="mt-3 text-center text-slate-600">

Find technology solutions for every need.

</p>



<div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">


{[

...categories,

{
name:"VPNs",
slug:"vpn",
icon:"🔒"
},

{
name:"Laptops",
slug:"laptops",
icon:"💻"
},

{
name:"Hosting",
slug:"hosting",
icon:"🌐"
},

{
name:"Finance",
slug:"finance",
icon:"💳"
}


].map((category)=>(


<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="rounded-2xl bg-white p-6 text-center font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

>


<div className="text-3xl">

{category.icon}

</div>


<div className="mt-3">

{category.name}

</div>


</Link>


))}


</div>


</div>


</section>
{/* LATEST REVIEWS */}

<section className="px-6 py-20">

<div className="mx-auto max-w-7xl">


<div className="flex items-end justify-between">

<div>

<h2 className="text-4xl font-black">
📝 Latest Reviews
</h2>

<p className="mt-2 text-slate-600">
New technology reviews and expert recommendations.
</p>

</div>


<Link

href="/reviews"

className="font-bold text-blue-600 hover:underline"

>

View All Reviews →

</Link>


</div>



<div className="mt-10 grid gap-6 md:grid-cols-3">


{topTools.slice(0,3).map((tool)=>(


<Link

key={tool.slug}

href={tool.reviewPath || "/all-tools"}

className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="text-sm font-bold text-blue-600">

LATEST REVIEW

</div>


<h3 className="mt-4 text-2xl font-black">

{tool.name}

</h3>


<p className="mt-3 text-slate-600">

{tool.description}

</p>


<div className="mt-5 flex items-center justify-between">

<span className="font-bold">

Score

</span>


<span className="rounded-full bg-green-50 px-4 py-2 font-black text-green-600">

⭐ {tool.rating}/10

</span>


</div>


</Link>


))}


</div>


</div>

</section>





{/* BUYING GUIDES */}

<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-6xl">


<h2 className="text-center text-4xl font-black">

📚 Popular Buying Guides

</h2>


<div className="mt-10 grid gap-6 md:grid-cols-3">


{[

"Best AI Tools For Business 2026",

"Best VPNs In Canada 2026",

"Best Productivity Software 2026",

"Best Laptops Under $1000",

"Best Website Builders",

"Best Cloud Storage Services"

].map((guide)=>(


<Link

key={guide}

href="/guides"

className="rounded-2xl bg-white p-6 font-bold shadow-sm transition hover:shadow-lg"

>

{guide}

<span className="mt-3 block text-blue-600">

Read Guide →

</span>

</Link>


))}


</div>


</div>


</section>





{/* EDITORIAL AUTHORITY */}

<section className="px-6 py-20">


<div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-10 text-center text-white">


<div className="text-5xl">
🔬
</div>


<h2 className="mt-5 text-3xl font-black">

How NorthSky Reviews Works

</h2>


<p className="mt-5 text-lg text-slate-300">

We research, compare, and analyze technology products
to help you make smarter buying decisions.

</p>



<div className="mt-10 grid gap-6 md:grid-cols-3">


<div>

<h3 className="font-black">
Testing
</h3>

<p className="mt-2 text-sm text-slate-400">

Hands-on evaluation of features and performance.

</p>

</div>



<div>

<h3 className="font-black">
Comparison
</h3>

<p className="mt-2 text-sm text-slate-400">

Pricing, features, and real-world value analysis.

</p>

</div>



<div>

<h3 className="font-black">
Transparency
</h3>

<p className="mt-2 text-sm text-slate-400">

Clear affiliate disclosures and honest opinions.

</p>

</div>


</div>


</div>


</section>





{/* FINAL CTA */}

<section className="px-6 py-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">


<h2 className="text-4xl font-black">

Find The Right Technology Faster

</h2>


<p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">

Join NorthSky Reviews for weekly technology recommendations,
deals, and expert comparisons.

</p>


<Link

href="/newsletter"

className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-black text-blue-600"

>

Join Free Newsletter →

</Link>


</div>


</section>
{/* TRUST & SEO FOOTER */}

<footer className="border-t bg-slate-950 px-6 py-16 text-white">

<div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">


{/* Brand */}

<div>

<h2 className="text-3xl font-black">

NorthSky
<span className="text-blue-400">.</span>

</h2>


<p className="mt-4 text-sm text-slate-400">

Independent reviews, comparisons, and buying guides
for AI tools, software, and technology products.

</p>


</div>




{/* Reviews */}

<div>

<h3 className="font-black">

Reviews

</h3>


<ul className="mt-4 space-y-3 text-sm text-slate-400">

<li>
<Link href="/reviews">
Latest Reviews
</Link>
</li>

<li>
<Link href="/comparisons">
Comparisons
</Link>
</li>

<li>
<Link href="/guides">
Buying Guides
</Link>
</li>

<li>
<Link href="/all-tools">
All Tools
</Link>
</li>

</ul>


</div>




{/* Categories */}

<div>

<h3 className="font-black">

Categories

</h3>


<ul className="mt-4 space-y-3 text-sm text-slate-400">

<li>
<Link href="/categories/ai">
AI Tools
</Link>
</li>

<li>
<Link href="/categories/vpn">
VPNs
</Link>
</li>

<li>
<Link href="/categories/software">
Software
</Link>
</li>

<li>
<Link href="/categories/laptops">
Technology
</Link>
</li>

</ul>


</div>




{/* Company */}

<div>

<h3 className="font-black">

Company

</h3>


<ul className="mt-4 space-y-3 text-sm text-slate-400">

<li>
<Link href="/about">
About
</Link>
</li>

<li>
<Link href="/methodology">
Review Methodology
</Link>
</li>

<li>
<Link href="/affiliate-disclosure">
Affiliate Disclosure
</Link>
</li>

<li>
<Link href="/contact">
Contact
</Link>
</li>


</ul>


</div>


</div>



{/* Bottom */}

<div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8">


<div className="flex flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">


<p>
© 2026 NorthSky Reviews. All rights reserved.
</p>


<p>
Some links may be affiliate links. We may earn commissions
at no additional cost to you.
</p>


</div>


</div>


</footer>