import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";


export const metadata = {

  title:
    "Best AI Tools 2026 | AI Software Reviews & Comparisons | NorthSky Reviews",

  description:
    "Discover the best AI tools for writing, coding, design, automation, business, and productivity. Compare AI software with expert reviews and recommendations.",

  keywords:[
    "best AI tools 2026",
    "AI software reviews",
    "AI tools comparison",
    "AI productivity tools",
    "AI automation software",
    "ChatGPT alternatives",
    "AI coding tools"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/ai"
  }

};



const aiTools = tools
.filter(
(tool)=>
tool.category?.toLowerCase().includes("ai") ||
tool.tags?.includes("ai")
)
.sort((a,b)=>b.rating-a.rating)
.slice(0,6);



export default function AIPage(){

return (

<main className="min-h-screen bg-white text-slate-900">


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":"Best AI Tools 2026",

"description":
"AI software reviews, comparisons and recommendations.",

"url":
"https://northsky-reviews.vercel.app/ai"

})
}}
/>



{/* HERO */}

<section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-28 text-white">


<div className="mx-auto max-w-6xl text-center">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

🤖 AI Software Directory

</span>



<h1 className="mt-8 text-5xl font-black md:text-7xl">

Find The Best AI Tools

<span className="text-blue-400">
{" "}2026
</span>

</h1>



<p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">

Explore the best AI assistants, writing tools,
coding software, image generators, automation platforms,
and business AI solutions.

</p>



<div className="mt-10 flex flex-wrap justify-center gap-5">


<Link
href="/ai/best-ai-tools-2026"
className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"
>

Best AI Tools 2026

</Link>


<Link
href="/comparisons"
className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
>

Compare AI Tools

</Link>


</div>



<div className="mt-14 grid gap-5 md:grid-cols-4">


<div className="rounded-2xl bg-white/10 p-6">
<p className="text-4xl font-black">
{aiTools.length}+
</p>
<p className="text-slate-300">
AI Reviews
</p>
</div>



<div className="rounded-2xl bg-white/10 p-6">
<p className="text-4xl font-black">
{comparisons.length}+
</p>
<p className="text-slate-300">
Comparisons
</p>
</div>



<div className="rounded-2xl bg-white/10 p-6">
<p className="text-4xl font-black">
{categories.length}
</p>
<p className="text-slate-300">
Categories
</p>
</div>



<div className="rounded-2xl bg-white/10 p-6">

<p className="text-4xl font-black">
2026
</p>

<p className="text-slate-300">
Updated Rankings
</p>

</div>


</div>


</div>

</section>





{/* CATEGORIES */}

<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-7xl">


<h2 className="text-center text-4xl font-black">

Explore AI Categories

</h2>



<div className="mt-12 grid gap-6 md:grid-cols-3">


{categories.map((category)=>(

<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="text-4xl">
{category.icon}
</div>


<h3 className="mt-5 text-2xl font-black">

{category.name}

</h3>


<p className="mt-3 text-slate-600">

Discover top AI software for {category.name.toLowerCase()}.

</p>


</Link>

))}


</div>


</div>


</section>







{/* FEATURED TOOLS */}


<section
id="tools"
className="px-6 py-24"
>


<div className="mx-auto max-w-7xl">


<h2 className="text-center text-4xl font-black">

Featured AI Tools

</h2>


<p className="mt-4 text-center text-slate-600">

Top-rated AI software selected by NorthSky Reviews.

</p>




<div className="mt-12 grid gap-8 md:grid-cols-3">


{aiTools.map((tool)=>(


<div
key={tool.slug}
className="rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
>


<span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">

{tool.category}

</span>



<h3 className="mt-6 text-3xl font-black">

{tool.name}

</h3>



<p className="mt-4 text-slate-600">

{tool.description}

</p>



<div className="mt-6 text-yellow-500">

★★★★★

</div>



<div className="mt-8 space-y-3">


{tool.reviewPath && (

<Link

href={tool.reviewPath}

className="block rounded-xl border px-5 py-3 text-center font-bold"

>

Read Review →

</Link>

)}



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white"

>

Visit Website →

</a>


</div>


</div>


))}


</div>


</div>


</section>







{/* TRUST */}

<section className="bg-slate-900 px-6 py-20 text-white">


<div className="mx-auto max-w-6xl text-center">


<h2 className="text-4xl font-black">

Why Trust NorthSky AI Reviews?

</h2>


<p className="mx-auto mt-5 max-w-3xl text-slate-300">

We review AI platforms based on features,
pricing, usability, performance, security,
and real-world usefulness.

</p>



<div className="mt-10 grid gap-6 md:grid-cols-3">


<div className="rounded-3xl bg-white/10 p-8">

<h3 className="text-2xl font-black">
🔎 Research
</h3>

<p className="mt-3 text-slate-300">
We analyze AI products and features.
</p>

</div>



<div className="rounded-3xl bg-white/10 p-8">

<h3 className="text-2xl font-black">
⚖️ Compare
</h3>

<p className="mt-3 text-slate-300">
We compare value and performance.
</p>

</div>



<div className="rounded-3xl bg-white/10 p-8">

<h3 className="text-2xl font-black">
⭐ Recommend
</h3>

<p className="mt-3 text-slate-300">
We highlight the best tools.
</p>

</div>


</div>


</div>


</section>







{/* CTA */}


<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-black">

Find Your Perfect AI Tool

</h2>


<p className="mt-5 text-blue-100">

Read our complete AI rankings and comparisons.

</p>


<Link

href="/ai/best-ai-tools-2026"

className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Explore Best AI Tools →

</Link>


</section>






<Newsletter variant="hero" />



</main>

);

}