import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/app/data/tools";

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}


export async function generateMetadata({ params }) {

  const { slug } = await params;

  const tool = tools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    return {
      title: "Review Not Found | NorthSky Reviews",
    };
  }


  return {
    title: `${tool.name} Review 2026 | NorthSky Reviews`,
    description:
      `${tool.name} review, pricing, features, pros, cons, and alternatives. See if ${tool.name} is worth it.`,
    openGraph:{
      title:`${tool.name} Review 2026`,
      description:
      `Expert analysis of ${tool.name}.`,
      url:
      `https://northsky-reviews.vercel.app/reviews/${tool.slug}`
    }
  };
}



export default async function ReviewPage({ params }) {

  const { slug } = await params;


  const tool = tools.find(
    (item) => item.slug === slug
  );


  if (!tool) {
    notFound();
  }


  return (

<main className="min-h-screen bg-white text-slate-900">


{/* Review Schema */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{
__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"Review",

name:`${tool.name} Review`,

reviewRating:{
"@type":"Rating",
ratingValue:tool.rating,
bestRating:"10"
},

itemReviewed:{
"@type":"SoftwareApplication",
name:tool.name
}

})

}}

/>




{/* Hero */}

<section className="bg-slate-950 px-6 py-20 text-white">

<div className="mx-auto max-w-5xl">


<div className="text-sm font-bold text-blue-400">

{tool.category}

</div>


<h1 className="mt-4 text-5xl font-black">

{tool.name} Review 2026

</h1>


<p className="mt-5 max-w-3xl text-xl text-slate-300">

{tool.description}

</p>


<div className="mt-8 flex flex-wrap gap-4">


<div className="rounded-xl bg-white/10 px-6 py-4">

⭐ Score:

<strong className="ml-2">

{tool.rating}/10

</strong>

</div>



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"

>

Try {tool.name} →

</a>


</div>


</div>

</section>





{/* Content */}

<section className="mx-auto max-w-5xl px-6 py-16">


<div className="grid gap-10 md:grid-cols-3">


{/* Main */}

<div className="md:col-span-2">


<h2 className="text-3xl font-black">

Overview

</h2>


<p className="mt-4 leading-8 text-slate-600">

NorthSky Reviews tested and analyzed {tool.name}
to evaluate features, pricing, performance,
and overall value.

</p>




<h2 className="mt-12 text-3xl font-black">

Pros & Cons

</h2>


<div className="mt-6 grid gap-6 md:grid-cols-2">


<div className="rounded-2xl bg-green-50 p-6">

<h3 className="font-black text-green-700">

✅ Pros

</h3>


<ul className="mt-4 space-y-2">

{(tool.pros || [
"Easy to use",
"Powerful features",
"Good value"
]).map((item)=>(

<li key={item}>
• {item}
</li>

))}

</ul>

</div>




<div className="rounded-2xl bg-red-50 p-6">

<h3 className="font-black text-red-700">

❌ Cons

</h3>


<ul className="mt-4 space-y-2">

{(tool.cons || [
"Premium features may cost extra"
]).map((item)=>(

<li key={item}>
• {item}
</li>

))}

</ul>

</div>


</div>





<h2 className="mt-12 text-3xl font-black">

Features

</h2>


<ul className="mt-5 space-y-3 text-slate-600">


{(tool.features || [
"Advanced technology",
"Simple interface",
"Reliable performance"
]).map((feature)=>(

<li key={feature}>
✓ {feature}
</li>

))}


</ul>



</div>





{/* Sidebar */}

<aside className="rounded-3xl bg-slate-50 p-6">


<h3 className="text-xl font-black">

Quick Facts

</h3>


<div className="mt-5 space-y-4 text-sm">


<p>
<strong>Category:</strong>
<br/>
{tool.category}
</p>


<p>
<strong>Rating:</strong>
<br/>
⭐ {tool.rating}/10
</p>


<p>
<strong>Best For:</strong>
<br/>
{tool.best || "General users"}
</p>


</div>



<Link

href="/comparisons"

className="mt-8 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white"

>

Compare Alternatives →

</Link>


</aside>


</div>


</section>





{/* CTA */}

<section className="px-6 pb-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 p-10 text-center text-white">


<h2 className="text-3xl font-black">

Ready to try {tool.name}?

</h2>


<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-6 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Visit Official Website →

</a>


</div>


</section>


</main>

  );
}