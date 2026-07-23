import Link from "next/link";
import Script from "next/script";

import Newsletter from "@/components/Newsletter";
import SearchBar from "@/components/SearchBar";

import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";


export const metadata = {

  title:
    "NorthSky Reviews | AI Tools, Software, Travel & Technology Reviews 2026",

  description:
    "Discover the best AI tools, software, VPNs, laptops, travel technology, and digital products. NorthSky Reviews provides expert reviews, comparisons, and buying guides.",

  keywords:[
    "AI tools 2026",
    "AI software reviews",
    "technology reviews",
    "software comparisons",
    "VPN reviews",
    "laptop reviews",
    "travel deals",
    "flight comparison",
    "hotel reviews",
    "travel technology",
    "productivity tools",
    "AI automation tools"
  ],

  openGraph:{

    title:
      "NorthSky Reviews | AI, Software, Travel & Technology",

    description:
      "Independent reviews, comparisons, buying guides, and travel recommendations.",

    url:
      "https://northsky-reviews.vercel.app",

    siteName:
      "NorthSky Reviews",

    images:[
      {
        url:"/og-image.jpg",
        width:1200,
        height:630,
        alt:"NorthSky Reviews"
      }
    ]

  }

};



const topTools =
[
  ...tools
]
.sort(
(a,b)=>
b.rating-a.rating
)
.slice(0,6);



const trendingTools =
tools.slice(0,6);



export default function HomePage(){


return (

<main className="min-h-screen bg-white text-slate-900">


{/* SEO Schema */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":
"https://schema.org",

"@type":
"Organization",

"name":
"NorthSky Reviews",

"url":
"https://northsky-reviews.vercel.app",

"description":
"Independent reviews, comparisons, travel recommendations, and buying guides for AI tools, software, and technology products."

})

}}

/>



{/* HERO SECTION */}


<section className="bg-gradient-to-br from-slate-950 via-slate-800 to-blue-900 px-6 py-24 text-center text-white">


<div className="mx-auto max-w-5xl">


<div className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

🚀 Updated Weekly For 2026

</div>



<h1 className="mt-6 text-5xl font-black md:text-7xl">

Find The Best

<br/>

<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">

AI Tools, Technology & Travel

</span>

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Expert reviews, comparisons, and buying guides for AI software,
business tools, laptops, VPNs, hosting, travel technology,
flights, hotels, and digital products.

</p>



<div className="mx-auto mt-10 flex max-w-3xl justify-center">

<SearchBar />

</div>



<div className="mt-10 flex flex-wrap justify-center gap-4">


<Link

href="#tools"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"

>

Browse Reviews ↓

</Link>



<Link

href="/travel"

className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"

>

Explore Travel Deals ✈️

</Link>



<Link

href="/comparisons"

className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"

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
100+
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





{/* BEST TECHNOLOGY PICKS */}

<section className="bg-slate-50 px-6 py-20">

<div className="mx-auto max-w-6xl">


<div className="text-center">

<h2 className="text-4xl font-black">
🏆 Best Technology Picks 2026
</h2>


<p className="mt-3 text-slate-600">
Explore top-rated AI tools, software, and technology products.
</p>

</div>




<div className="mt-10 grid gap-6 md:grid-cols-3">


{[

{
icon:"🤖",
title:"Best AI Tools",
desc:"AI assistants, agents, and automation tools.",
link:"/categories/ai"
},

{
icon:"💻",
title:"Best Coding AI",
desc:"Developer tools and AI programming assistants.",
link:"/categories/coding"
},

{
icon:"🎨",
title:"Creative AI",
desc:"Image, video, design, and content creation tools.",
link:"/categories/creative-ai"
},

{
icon:"🔒",
title:"Best VPN Services",
desc:"Privacy, security, and streaming recommendations.",
link:"/categories/vpn"
},

{
icon:"🌐",
title:"Web & Hosting Tools",
desc:"Website builders, hosting, and online business tools.",
link:"/categories/web-tools"
},

{
icon:"📱",
title:"Tech Gear",
desc:"Laptops, accessories, and smart technology.",
link:"/categories/laptops"
}

].map((item)=>(


<Link

key={item.title}

href={item.link}

className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="text-4xl">
{item.icon}
</div>


<h3 className="mt-5 text-xl font-black">
{item.title}
</h3>


<p className="mt-3 text-slate-600">
{item.desc}
</p>


<span className="mt-5 inline-block font-bold text-blue-600">
Explore →
</span>


</Link>


))}


</div>

</div>

</section>






{/* TRAVEL HUB */}

<section className="bg-gradient-to-br from-cyan-700 via-blue-700 to-sky-900 px-6 py-20 text-white">


<div className="mx-auto max-w-6xl">


<div className="text-center">


<h2 className="text-4xl font-black md:text-5xl">
✈️ NorthSky Travel Hub
</h2>


<p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">

Compare flights, hotels, car rentals, and travel tools
with NorthSky's travel recommendations.

</p>


</div>




<div className="mt-12 grid gap-6 md:grid-cols-4">


{[

{
icon:"✈️",
title:"Flights",
desc:"Compare flight prices worldwide.",
link:"/travel/flights"
},

{
icon:"🏨",
title:"Hotels",
desc:"Find accommodations and deals.",
link:"/travel/hotels"
},

{
icon:"🚗",
title:"Car Rentals",
desc:"Book vehicles for your trips.",
link:"/travel/cars"
},

{
icon:"🌎",
title:"Travel Guides",
desc:"Destinations, apps, and travel tech.",
link:"/travel/guides"
}

].map((item)=>(


<Link

key={item.title}

href={item.link}

className="rounded-3xl bg-white/10 p-7 backdrop-blur transition hover:-translate-y-2 hover:bg-white/20"

>


<div className="text-4xl">
{item.icon}
</div>


<h3 className="mt-4 text-xl font-black">
{item.title}
</h3>


<p className="mt-2 text-sm text-blue-100">
{item.desc}
</p>


<span className="mt-4 block font-bold">
Explore →
</span>


</Link>


))}


</div>



<div className="mt-12 rounded-3xl bg-white p-8 text-slate-900">


<h3 className="text-center text-3xl font-black">
Travel Deals Search
</h3>


<div
id="travelpayouts-widget"
className="mt-8 min-h-[250px]"
>

<p className="text-center text-slate-500">
Travel search widget loading...
</p>


</div>


</div>


</div>


</section>
{/* TRENDING AI TOOLS */}

<section
id="tools"
className="px-6 py-20"
>

<div className="mx-auto max-w-7xl">


<div className="flex items-center justify-between">


<div>

<h2 className="text-4xl font-black">
🔥 Trending AI Tools
</h2>


<p className="mt-2 text-slate-600">
Popular AI software and productivity tools people are exploring.
</p>

</div>



<Link
href="/all-tools"
className="font-bold text-blue-600 hover:underline"
>

View All →

</Link>


</div>





<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


{trendingTools.map((tool)=>(


<Link

key={tool.slug}

href={`/reviews/${tool.slug}`}

className="rounded-3xl border bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="flex justify-between">


<span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">

{tool.category}

</span>



<span className="font-bold text-green-600">

⭐ {tool.rating}

</span>


</div>




<h3 className="mt-5 text-2xl font-black">

{tool.name}

</h3>



<p className="mt-3 line-clamp-3 text-slate-600">

{tool.description}

</p>



<div className="mt-5 font-bold text-blue-600">

Read Review →

</div>


</Link>


))}


</div>


</div>


</section>







{/* EXPLORE CATEGORIES */}


<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-6xl">


<h2 className="text-center text-4xl font-black">

Explore Categories

</h2>


<p className="mt-3 text-center text-slate-600">

Find the right tools, software, and technology solutions.

</p>




<div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">


{categories.map((category)=>(


<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="rounded-2xl bg-white p-6 text-center font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

>


<div className="text-4xl">

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

New AI, software, and technology reviews from NorthSky.

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

href={`/reviews/${tool.slug}`}

className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="text-sm font-bold text-blue-600">

FEATURED REVIEW

</div>



<h3 className="mt-4 text-2xl font-black">

{tool.name}

</h3>



<p className="mt-3 text-slate-600">

{tool.description}

</p>




<div className="mt-6 flex items-center justify-between">


<span className="font-bold">

Rating

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
{/* FEATURED COMPARISONS */}

<section className="bg-slate-50 px-6 py-20">

<div className="mx-auto max-w-6xl">


<div className="flex items-center justify-between">


<h2 className="text-4xl font-black">
⚖️ Compare Technology
</h2>



<Link

href="/comparisons"

className="font-bold text-blue-600 hover:underline"

>

View All →

</Link>


</div>





<div className="mt-10 grid gap-6 md:grid-cols-2">


{comparisons.slice(0,4).map((item)=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<h3 className="text-2xl font-black">

{item.title}

</h3>


<p className="mt-3 text-slate-600">

{item.description}

</p>



<span className="mt-5 inline-block font-bold text-blue-600">

Compare Now →

</span>


</Link>


))}


</div>


</div>


</section>








{/* BUYING GUIDES */}


<section className="px-6 py-20">


<div className="mx-auto max-w-6xl">


<h2 className="text-center text-4xl font-black">

📚 Popular Buying Guides

</h2>



<p className="mt-3 text-center text-slate-600">

Expert recommendations to help you choose better technology.

</p>





<div className="mt-10 grid gap-6 md:grid-cols-3">


{[

"Best AI Tools For Business 2026",

"Best VPNs In Canada 2026",

"Best Productivity Software",

"Best Laptops Under $1000",

"Best Website Builders",

"Best Cloud Storage Services",

"Best Travel Apps 2026",

"Best Travel Credit Cards",

"Best Travel Accessories"


].map((guide)=>(


<Link

key={guide}

href="/guides"

className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

>


<h3 className="font-black">

{guide}

</h3>



<span className="mt-4 block font-bold text-blue-600">

Read Guide →

</span>


</Link>


))}


</div>


</div>


</section>








{/* EDITORIAL AUTHORITY */}


<section className="px-6 py-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-12 text-center text-white">


<div className="text-5xl">
🔬
</div>




<h2 className="mt-6 text-4xl font-black">

How NorthSky Reviews Works

</h2>




<p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">

We research, compare, and analyze AI tools,
software, technology products, and travel services
to help people make smarter buying decisions.

</p>






<div className="mt-10 grid gap-8 md:grid-cols-3">


<div>

<h3 className="text-xl font-black">
Hands-On Research
</h3>


<p className="mt-3 text-sm text-slate-400">

We evaluate features, usability, pricing,
and real-world performance.

</p>


</div>




<div>

<h3 className="text-xl font-black">
Data Comparisons
</h3>


<p className="mt-3 text-sm text-slate-400">

We compare products, services,
and alternatives to find the best options.

</p>


</div>




<div>

<h3 className="text-xl font-black">
Transparency
</h3>


<p className="mt-3 text-sm text-slate-400">

Affiliate relationships are disclosed.
Recommendations are based on value.

</p>


</div>


</div>


</div>


</section>









{/* NEWSLETTER */}


<section className="px-6 py-20">


<div className="mx-auto max-w-5xl">


<Newsletter variant="hero" />


</div>


</section>








{/* AFFILIATE DISCLOSURE */}


<section className="px-6 pb-20">


<div className="mx-auto max-w-4xl rounded-3xl bg-slate-100 p-8 text-center">


<h3 className="text-xl font-black">

Affiliate Disclosure

</h3>



<p className="mt-3 text-sm text-slate-600">

Some links on NorthSky Reviews are affiliate links.
If you purchase through these links, we may earn a commission
at no extra cost to you.

</p>



<p className="mt-2 text-sm text-slate-500">

Our reviews are based on research,
testing, comparisons, and product value.

</p>


</div>


</section>
{/* FOOTER */}

<footer className="border-t bg-slate-950 px-6 py-16 text-white">


<div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">





{/* BRAND */}

<div>


<h2 className="text-3xl font-black">

NorthSky

<span className="text-blue-400">
.
</span>

</h2>



<p className="mt-4 text-sm text-slate-400">

Independent AI, software, technology,
and travel reviews helping people choose
better products and services.

</p>


</div>







{/* REVIEWS */}

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








{/* CATEGORIES */}

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
<Link href="/categories/software">
Software
</Link>
</li>


<li>
<Link href="/categories/vpn">
VPNs
</Link>
</li>


<li>
<Link href="/categories/laptops">
Technology
</Link>
</li>


</ul>


</div>








{/* TRAVEL */}

<div>


<h3 className="font-black">

Travel

</h3>



<ul className="mt-4 space-y-3 text-sm text-slate-400">


<li>
<Link href="/travel">
Travel Deals
</Link>
</li>


<li>
<Link href="/travel/flights">
Flights
</Link>
</li>


<li>
<Link href="/travel/hotels">
Hotels
</Link>
</li>


<li>
<Link href="/travel/guides">
Travel Guides
</Link>
</li>


</ul>


</div>








{/* COMPANY */}

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
Methodology
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








<div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8">


<div className="flex flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">


<p>

© 2026 NorthSky Reviews. All rights reserved.

</p>



<p>

Some links may be affiliate links.
We may earn commissions at no additional cost to you.

</p>


</div>


</div>



</footer>





{/* TRAVELPAYOUTS SCRIPT */}

<Script

id="travelpayouts"

strategy="afterInteractive"

src="YOUR_OFFICIAL_TRAVELPAYOUTS_SCRIPT"

/>


</main>

);

}