import Link from "next/link";
import { notFound } from "next/navigation";

import { categories } from "@/app/data/tools";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";



export async function generateStaticParams() {

  return categories.map((category)=>({

    slug: category.slug

  }));

}




export async function generateMetadata({params}) {

  const {slug} = await params;


  const category = categories.find(
    (item)=>item.slug === slug
  );


  if(!category){

    return {
      title:"Category Not Found | NorthSky Reviews"
    };

  }


  return {

    title:
      `Best ${category.name} Tools 2026 | NorthSky Reviews`,


    description:
      `Discover the best ${category.name} tools, reviews, comparisons, and buying guides.`

  };

}





export default async function CategoryPage({params}) {


  const {slug}=await params;



  const category = categories.find(
    (item)=>item.slug===slug
  );


  if(!category){

    notFound();

  }



  const categoryTools = tools.filter(
    (tool)=>
      tool.category?.toLowerCase() ===
      category.name.toLowerCase()
  );



  const categoryGuides = guides.filter(
    (guide)=>
      guide.category?.toLowerCase() ===
      category.name.toLowerCase()
  );



  const categoryComparisons = comparisons.filter(
    (comparison)=>
      comparison.category?.toLowerCase() ===
      category.name.toLowerCase()
  );





return (

<main className="min-h-screen bg-white text-slate-900">


{/* Schema */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"CollectionPage",

name:
`Best ${category.name} Tools`,

description:
`NorthSky Reviews ${category.name} recommendations`

})

}}

/>




{/* Hero */}

<section className="bg-slate-950 px-6 py-20 text-white">


<div className="mx-auto max-w-6xl">


<div className="text-5xl">

{category.icon}

</div>


<h1 className="mt-5 text-5xl font-black">

Best {category.name} Tools 2026

</h1>


<p className="mt-5 max-w-3xl text-xl text-slate-300">

Explore expert reviews, comparisons,
and recommendations for the best
{category.name.toLowerCase()} tools.

</p>


</div>

</section>





{/* Tools */}

<section className="mx-auto max-w-6xl px-6 py-16">


<h2 className="text-4xl font-black">

Top {category.name} Tools

</h2>



<div className="mt-10 grid gap-8 md:grid-cols-3">


{categoryTools.map((tool)=>(


<div

key={tool.slug}

className="rounded-3xl border p-8 shadow-sm hover:shadow-xl transition"

>


<div className="text-sm font-bold text-blue-600">

⭐ {tool.rating}/10

</div>



<h3 className="mt-4 text-2xl font-black">

{tool.name}

</h3>



<p className="mt-3 text-slate-600">

{tool.description}

</p>




<Link

href={`/reviews/${tool.slug}`}

className="mt-6 block font-bold text-blue-600"

>

Read Full Review →

</Link>


</div>


))}


</div>


</section>





{/* Guides */}

{categoryGuides.length > 0 && (

<section className="bg-slate-50 px-6 py-16">


<div className="mx-auto max-w-6xl">


<h2 className="text-3xl font-black">

Buying Guides

</h2>


<div className="mt-8 grid gap-6 md:grid-cols-3">


{categoryGuides.map((guide)=>(


<Link

key={guide.slug}

href={`/guides/${guide.slug}`}

className="rounded-2xl bg-white p-6 shadow hover:shadow-lg"

>


<h3 className="font-black">

{guide.title}

</h3>


<p className="mt-3 text-slate-600">

{guide.description}

</p>


</Link>


))}


</div>


</div>


</section>

)}





{/* Comparisons */}

{categoryComparisons.length > 0 && (

<section className="px-6 py-16">


<div className="mx-auto max-w-6xl">


<h2 className="text-3xl font-black">

Tool Comparisons

</h2>


<div className="mt-8 grid gap-6 md:grid-cols-2">


{categoryComparisons.map((item)=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="rounded-2xl border p-6 hover:shadow-lg"

>


<h3 className="text-xl font-bold">

{item.title}

</h3>


<p className="mt-2 text-slate-600">

{item.description}

</p>


</Link>


))}


</div>


</div>


</section>

)}





{/* Newsletter CTA */}

<section className="px-6 pb-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 p-10 text-center text-white">


<h2 className="text-3xl font-black">

Get The Best Tech Recommendations

</h2>


<p className="mt-3">

Weekly AI tools, software reviews,
and buying guides.

</p>


<Link

href="/newsletter"

className="mt-6 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Subscribe →

</Link>


</div>


</section>


</main>

);

}