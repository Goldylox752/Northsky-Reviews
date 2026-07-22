import Link from "next/link";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";


export const metadata = {

  title:
    "Technology Reviews 2026 | AI Tools, VPNs, Software & Tech",

  description:
    "NorthSky Reviews provides expert technology reviews, AI tool comparisons, VPN reviews, software recommendations, and buying guides.",

  keywords:[
    "technology reviews",
    "AI tool reviews",
    "VPN reviews",
    "software comparisons",
    "best technology products 2026"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/reviews"
  }

};



export default function ReviewsPage(){


const featuredReviews = [...tools]
.sort((a,b)=>b.rating-a.rating)
.slice(0,12);



const schema = {

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":"NorthSky Reviews",

"description":
"Technology reviews, comparisons, and buying guides.",

"url":
"https://northsky-reviews.vercel.app/reviews",

"mainEntity":{

"@type":"ItemList",

"itemListElement":

featuredReviews.map((tool,index)=>({

"@type":"ListItem",

"position":index+1,

"name":tool.name,

"url":
`https://northsky-reviews.vercel.app/reviews/${tool.slug}`

}))

}

};



return (

<main className="min-h-screen bg-white text-slate-900">


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify(schema)
}}
/>



<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 px-6 py-24 text-center text-white">

<div className="mx-auto max-w-5xl">


<div className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

🔬 Independent Technology Testing

</div>


<h1 className="mt-6 text-5xl font-black md:text-7xl">

NorthSky Reviews

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Discover the best AI tools, VPNs, software,
and technology products with expert analysis,
comparisons, and buying guides.

</p>


<div className="mt-10 flex flex-wrap justify-center gap-4">


<Link
href="/all-tools"
className="rounded-xl bg-blue-600 px-8 py-4 font-bold"
>

Explore Reviews →

</Link>


<Link
href="/comparisons"
className="rounded-xl border border-white/30 px-8 py-4 font-bold"
>

Compare Technology →

</Link>


</div>


</div>

</section>





<section className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-4xl font-black">
Featured Reviews
</h2>


<p className="mt-2 text-slate-600">
NorthSky Score rated technology products.
</p>



<div className="mt-10 grid gap-8 md:grid-cols-3">


{featuredReviews.map((tool)=>(

<Link

key={tool.slug}

href={`/reviews/${tool.slug}`}

className="rounded-3xl border p-8 hover:-translate-y-2 hover:shadow-xl transition"

>


<div className="flex justify-between">


<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">

{tool.category}

</span>



<span className="font-black text-green-600">

⭐ NorthSky {tool.rating}

</span>


</div>



<h3 className="mt-5 text-2xl font-black">

{tool.name}

</h3>



<p className="mt-3 text-slate-600">

{tool.description}

</p>



<span className="mt-6 block font-bold text-blue-600">

Full Review →

</span>



</Link>

))}


</div>

</section>





<section className="bg-slate-50 px-6 py-20">

<div className="mx-auto max-w-7xl">


<h2 className="text-4xl font-black">
⚖️ Technology Comparisons
</h2>



<div className="mt-8 grid gap-6 md:grid-cols-3">


{comparisons.slice(0,6).map((item)=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="rounded-2xl bg-white p-6 shadow hover:shadow-xl"

>


<h3 className="text-xl font-bold">
{item.title}
</h3>


<p className="mt-3 text-slate-600">
{item.description}
</p>


<span className="mt-4 block text-blue-600 font-bold">
Compare →
</span>


</Link>


))}


</div>


</div>


</section>





<section className="px-6 py-16">


<div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 p-10 text-center text-white">


<h2 className="text-3xl font-black">
How We Review Products
</h2>


<p className="mt-4 text-slate-300">

We test technology based on features,
security, pricing, usability, performance,
and overall value.

</p>


</div>


</section>




<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-black">
Stay Ahead of Technology
</h2>


<p className="mt-4">
Get updates on the best AI tools,
software, and digital products.
</p>


<Link

href="/newsletter"

className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Join NorthSky Newsletter →

</Link>


</section>



<footer className="px-6 py-8 text-center text-sm text-slate-500">

Disclosure: NorthSky Reviews may earn commissions from affiliate links.
Our ratings are independent.

</footer>



</main>

);

}