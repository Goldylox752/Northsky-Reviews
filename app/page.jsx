import Link from "next/link";


export const metadata = {

  title:
    "NorthSky Reviews | Best VPNs, AI Tools, Travel Tech & Buying Guides",

  description:
    "Independent technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, hosting, and cybersecurity.",

  keywords: [
    "VPN reviews",
    "AI tools",
    "travel eSIM reviews",
    "technology comparisons",
    "software reviews",
    "buying guides"
  ],

  openGraph: {

    title:
      "NorthSky Reviews | Trusted Technology Recommendations",

    description:
      "Find the best technology products through independent reviews, comparisons, and expert buying guides.",

    url:
      "https://northsky-reviews.vercel.app",

    siteName:
      "NorthSky Reviews",

    type:
      "website"

  }

};





export default function HomePage() {


const topPicks = [

{

title:
"🔒 Editor's Choice — NordVPN",

description:
"Best overall VPN for privacy, streaming, gaming, and online security.",

button:
"Get NordVPN →",

href:
"https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",

badge:
"Editor's Choice"

},


{

title:
"✈️ Best Travel eSIM — Saily",

description:
"Affordable mobile data in 200+ destinations with instant activation.",

button:
"Get Saily →",

href:
"https://go.saily.site/aff_c?offer_id=101&aff_id=13276",

badge:
"Best Value"

},


{

title:
"🤖 Best AI Tools",

description:
"Discover powerful AI software for productivity, business, and creativity.",

button:
"Explore AI →",

href:
"/ai",

badge:
"Trending"

}

];





const reviews = [

{

title:
"NordVPN Review",

description:
"Speed, security, streaming, pricing, and privacy analysis.",

href:
"/reviews/nordvpn"

},


{

title:
"Saily eSIM Review",

description:
"Everything you need before using Saily for international travel.",

href:
"/reviews/saily"

},


{

title:
"Best VPNs For Canada",

description:
"Compare the best VPN providers for Canadian users.",

href:
"/comparisons/best-vpns-canada"

}

];





const categories = [

{
title:"🔒 VPN Reviews",
description:"Privacy, security, streaming and online protection.",
href:"/reviews"
},

{
title:"🤖 AI Tools",
description:"AI software for business, coding and productivity.",
href:"/ai"
},

{
title:"✈️ Travel Tech",
description:"eSIMs, gadgets and travel connectivity.",
href:"/travel"
},

{
title:"💻 Hosting",
description:"Website hosting and online business tools.",
href:"/hosting"
},

{
title:"🛡 Cybersecurity",
description:"Security software and privacy solutions.",
href:"/security"
},

{
title:"⚡ Productivity",
description:"Apps and tools to work smarter.",
href:"/productivity"
},

{
title:"📊 Comparisons",
description:"Side-by-side technology comparisons.",
href:"/comparisons"
},

{
title:"🔥 Best Deals",
description:"Recommended products and offers.",
href:"/deals"
}

];





const trust = [

{

title:
"✔ Research Based",

description:
"Recommendations are created using product features, pricing, security, and overall value."

},


{

title:
"✔ Honest Reviews",

description:
"We explain strengths and limitations to help you make informed decisions."

},


{

title:
"✔ Updated Regularly",

description:
"Our guides are updated as products, pricing, and technology change."

}

];





return (

<main className="min-h-screen bg-slate-950 text-white">


<script
type="application/ld+json"

dangerouslySetInnerHTML={{

__html:

JSON.stringify({

"@context":
"https://schema.org",

"@type":
"Organization",

"name":
"NorthSky Reviews",

"url":
"https://northsky-reviews.vercel.app",

"description":
"Independent technology reviews, comparisons, and buying guides."

})

}}

/>





<header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">


<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


<Link
href="/"
className="text-3xl font-black tracking-tight"
>

NorthSky

<span className="text-sky-400">
{" "}Reviews
</span>

</Link>




<nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">


<Link href="/reviews">
Reviews
</Link>


<Link href="/comparisons">
Comparisons
</Link>


<Link href="/ai">
AI Tools
</Link>


<Link href="/travel">
Travel
</Link>


<Link href="/deals">
Deals
</Link>


</nav>


</div>


</header>






<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-28 text-center">


<div className="mx-auto max-w-5xl">


<span className="inline-block rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300">

Independent Reviews • Expert Recommendations • Buying Guides

</span>




<h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

Find The Best Tech

<br/>

Before You

<span className="text-sky-400">
{" "}Buy
</span>

</h1>




<p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">

NorthSky Reviews helps you discover the best VPNs,
AI tools, travel technology, software, hosting,
and cybersecurity products through trusted reviews
and comparisons.

</p>




<div className="mt-12 flex flex-wrap justify-center gap-4">


<Link
href="/reviews"
className="rounded-xl bg-sky-400 px-8 py-4 font-bold text-slate-900 hover:bg-sky-300"
>

Browse Reviews

</Link>



<a

href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"

target="_blank"

rel="nofollow sponsored noopener"

className="rounded-xl border border-sky-400 px-8 py-4 font-bold text-sky-400 hover:bg-sky-400 hover:text-slate-900"

>

🔒 Get NordVPN

</a>


</div>



</div>


</section>
{/* Affiliate Disclosure */}

<section className="border-y border-slate-800 bg-slate-900 px-6 py-6">

<div className="mx-auto max-w-5xl text-center text-sm text-slate-400">

<strong className="text-white">
Affiliate Disclosure:
</strong>

{" "}
Some links on NorthSky Reviews are affiliate links.
We may earn a commission if you purchase through our links
at no extra cost to you. Our recommendations are based on
independent research.

</div>

</section>





{/* Search */}

<section className="px-6 py-12">

<div className="mx-auto max-w-5xl">

<input

type="search"

placeholder="Search VPNs, AI tools, hosting, software, and travel technology..."

className="w-full rounded-xl border border-slate-700 bg-slate-900 p-5 text-lg text-white outline-none focus:border-sky-400"

/>

</div>

</section>






{/* Top Picks */}

<section className="bg-white px-6 py-24 text-slate-900">


<div className="mx-auto max-w-7xl">


<div className="mb-14 text-center">


<span className="text-sm font-bold uppercase tracking-wider text-blue-600">

Editor Recommendations

</span>



<h2 className="mt-4 text-4xl font-black md:text-5xl">

NorthSky Top Picks

</h2>



<p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">

Our highest-rated technology recommendations based on
security, performance, features, and value.

</p>


</div>





<div className="grid gap-8 md:grid-cols-3">


{topPicks.map((item)=>(


<div

key={item.title}

className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">

{item.badge}

</span>




<h3 className="mt-6 text-2xl font-black">

{item.title}

</h3>




<div className="mt-4 text-yellow-500">

★★★★★

</div>




<p className="mt-5 leading-7 text-slate-600">

{item.description}

</p>




<a

href={item.href}

target={
item.href.startsWith("http")
?
"_blank"
:
undefined
}

rel={
item.href.startsWith("http")
?
"noopener noreferrer sponsored"
:
undefined
}

className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"

>

{item.button}

</a>



</div>


))}


</div>


</div>


</section>








{/* Categories */}


<section className="bg-slate-50 px-6 py-24">


<div className="mx-auto max-w-7xl">


<div className="mb-14 text-center">


<span className="text-sm font-bold uppercase tracking-wider text-blue-600">

Explore

</span>



<h2 className="mt-4 text-4xl font-black md:text-5xl">

Browse Technology Categories

</h2>



<p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">

Explore reviews, comparisons, and buying guides
across today's technology.

</p>


</div>






<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


{categories.map((category)=>(


<Link

key={category.title}

href={category.href}

className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"

>


<h3 className="text-xl font-black">

{category.title}

</h3>



<p className="mt-3 text-sm leading-6 text-slate-600">

{category.description}

</p>




<span className="mt-5 block font-bold text-blue-600">

Explore →

</span>


</Link>


))}


</div>


</div>


</section>







{/* Featured Reviews */}


<section className="bg-white px-6 py-24 text-slate-900">


<div className="mx-auto max-w-7xl">


<div className="mb-14 text-center">


<span className="text-sm font-bold uppercase tracking-wider text-blue-600">

Latest Content

</span>



<h2 className="mt-4 text-4xl font-black md:text-5xl">

Featured Reviews

</h2>




<p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">

Detailed reviews and comparisons to help you
make smarter technology decisions.

</p>


</div>






<div className="grid gap-8 md:grid-cols-3">


{reviews.map((review)=>(


<div

key={review.title}

className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="text-xl text-yellow-500">

★★★★★

</div>



<h3 className="mt-5 text-2xl font-black">

{review.title}

</h3>



<p className="mt-5 leading-7 text-slate-600">

{review.description}

</p>




<Link

href={review.href}

className="mt-8 inline-block font-bold text-blue-600 hover:text-blue-700"

>

Read Full Review →

</Link>



</div>


))}


</div>


</div>


</section>
{/* Trust Section */}

<section className="bg-slate-50 px-6 py-24">


<div className="mx-auto max-w-7xl">


<div className="mb-14 text-center">


<h2 className="text-4xl font-black md:text-5xl">

Why Trust NorthSky Reviews?

</h2>



<p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">

Transparent research, honest comparisons,
and practical technology recommendations.

</p>


</div>





<div className="grid gap-8 md:grid-cols-3">


{trust.map((item)=>(


<div

key={item.title}

className="rounded-3xl border border-slate-200 bg-white p-8"

>


<h3 className="text-2xl font-black">

{item.title}

</h3>




<p className="mt-5 leading-7 text-slate-600">

{item.description}

</p>


</div>


))}


</div>


</div>


</section>








{/* Featured Deals */}

<section className="bg-white px-6 py-24 text-slate-900">


<div className="mx-auto max-w-7xl">


<div className="mb-14 text-center">


<span className="text-sm font-bold uppercase tracking-wider text-blue-600">

Recommended Offers

</span>




<h2 className="mt-4 text-4xl font-black md:text-5xl">

Featured Technology Deals

</h2>




<p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">

Save on products and services we recommend.

</p>


</div>







<div className="grid gap-8 md:grid-cols-2">





<div className="rounded-3xl border border-slate-200 p-10 shadow-sm">


<span className="rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">

Privacy Pick

</span>




<h3 className="mt-6 text-3xl font-black">

🔒 NordVPN

</h3>




<p className="mt-5 leading-7 text-slate-600">

Protect your online privacy with secure encryption,
fast speeds, streaming support, and advanced security.

</p>





<a

href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"

>

Get NordVPN →

</a>


</div>







<div className="rounded-3xl border border-slate-200 p-10 shadow-sm">


<span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">

Travel Pick

</span>




<h3 className="mt-6 text-3xl font-black">

✈️ Saily eSIM

</h3>





<p className="mt-5 leading-7 text-slate-600">

Stay connected worldwide with affordable mobile
data plans and instant activation.

</p>





<a

href="https://go.saily.site/aff_c?offer_id=101&aff_id=13276"

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"

>

Get Saily →

</a>


</div>





</div>


</div>


</section>








{/* Newsletter */}

<section className="bg-slate-50 px-6 py-24">


<div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">


<h2 className="text-4xl font-black md:text-5xl">

Stay Ahead of Technology

</h2>




<p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">

Get the latest reviews, comparisons,
buying guides, and technology deals.

</p>





<form className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">


<input

type="email"

placeholder="Enter your email"

className="rounded-xl border border-slate-300 px-6 py-4 outline-none focus:border-blue-600 md:w-96"

/>



<button

type="submit"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"

>

Subscribe

</button>



</form>





<p className="mt-5 text-sm text-slate-500">

No spam. Unsubscribe anytime.

</p>



</div>


</section>








{/* Final CTA */}

<section className="bg-blue-600 px-6 py-24 text-center text-white">


<div className="mx-auto max-w-4xl">


<h2 className="text-4xl font-black md:text-5xl">

Find The Right Technology For You

</h2>




<p className="mt-6 text-lg text-blue-100">

Compare products, read expert reviews,
and discover trusted recommendations.

</p>





<Link

href="/reviews"

className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-blue-50"

>

Browse Reviews →

</Link>


</div>


</section>
{/* Footer */}

<footer className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-white">


<div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">





{/* Brand */}

<div>


<h3 className="text-2xl font-black">

NorthSky

<span className="text-blue-400">
Reviews
</span>

</h3>



<p className="mt-5 leading-7 text-slate-400">

Independent technology reviews,
comparisons, and buying guides
helping you make smarter decisions.

</p>


</div>







{/* Explore */}

<div>


<h4 className="text-lg font-bold">

Explore

</h4>




<div className="mt-5 flex flex-col gap-3 text-slate-400">


<Link href="/reviews">

Reviews

</Link>


<Link href="/comparisons">

Comparisons

</Link>


<Link href="/ai">

AI Tools

</Link>


<Link href="/travel">

Travel Tech

</Link>


<Link href="/deals">

Deals

</Link>


</div>


</div>







{/* Company */}

<div>


<h4 className="text-lg font-bold">

Company

</h4>





<div className="mt-5 flex flex-col gap-3 text-slate-400">


<Link href="/about">

About

</Link>



<Link href="/contact">

Contact

</Link>



<Link href="/privacy-policy">

Privacy Policy

</Link>



<Link href="/affiliate-disclosure">

Affiliate Disclosure

</Link>



<Link href="/editorial-policy">

Editorial Policy

</Link>


</div>


</div>







{/* Partners */}

<div>


<h4 className="text-lg font-bold">

Featured Partners

</h4>





<div className="mt-5 flex flex-col gap-4">



<a

href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"

target="_blank"

rel="noopener noreferrer sponsored"

className="rounded-xl bg-blue-600 px-5 py-3 text-center font-bold hover:bg-blue-700"

>

🔒 Get NordVPN

</a>





<a

href="https://go.saily.site/aff_c?offer_id=101&aff_id=13276"

target="_blank"

rel="noopener noreferrer sponsored"

className="rounded-xl border border-blue-400 px-5 py-3 text-center font-bold text-blue-400 hover:bg-blue-400 hover:text-slate-950"

>

✈️ Get Saily eSIM

</a>



</div>


</div>





</div>








<div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">


<p>

© {new Date().getFullYear()} NorthSky Reviews.
All rights reserved.

</p>





<p className="mx-auto mt-5 max-w-3xl leading-6">


<strong className="text-slate-300">

Affiliate Disclosure:

</strong>


{" "}

Some links on NorthSky Reviews are affiliate links.
We may earn a commission when you purchase through
these links at no additional cost to you.
Our recommendations are based on research,
comparisons, and editorial evaluation.


</p>



</div>





</footer>






</main>

);

}