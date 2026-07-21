import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons } from "@/app/data/comparisons";


export async function generateStaticParams() {
  return comparisons.map((item) => ({
    slug: item.slug,
  }));
}


export async function generateMetadata({ params }) {

  const { slug } = await params;

  const comparison = comparisons.find(
    (item) => item.slug === slug
  );


  if (!comparison) {
    return {
      title: "Comparison Not Found | NorthSky Reviews",
    };
  }


  return {
    title: `${comparison.title} 2026 | NorthSky Reviews`,
    description:
      comparison.description ||
      `Compare ${comparison.title} features, pricing, performance, and value.`,
  };
}



export default async function ComparisonPage({ params }) {

  const { slug } = await params;


  const comparison = comparisons.find(
    (item) => item.slug === slug
  );


  if (!comparison) {
    notFound();
  }



  return (

<main className="min-h-screen bg-white text-slate-900">


{/* Comparison Schema */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{
__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"Article",

headline:comparison.title,

description:comparison.description,

author:{
"@type":"Organization",
"name":"NorthSky Reviews"
}

})

}}

/>




{/* Hero */}

<section className="bg-slate-950 px-6 py-20 text-white">


<div className="mx-auto max-w-5xl">


<div className="text-blue-400 font-bold">

⚖️ Product Comparison

</div>


<h1 className="mt-4 text-5xl font-black">

{comparison.title}

</h1>


<p className="mt-5 max-w-3xl text-xl text-slate-300">

{comparison.description}

</p>


</div>


</section>





{/* Comparison Table */}

<section className="mx-auto max-w-6xl px-6 py-16">


<div className="overflow-hidden rounded-3xl border">


<table className="w-full text-left">


<thead className="bg-slate-900 text-white">

<tr>

<th className="p-5">
Feature
</th>

<th className="p-5">
{comparison.productA?.name || "Option A"}
</th>

<th className="p-5">
{comparison.productB?.name || "Option B"}
</th>

</tr>

</thead>



<tbody>


{(
comparison.features ||

[
{
name:"Rating",
a:"9/10",
b:"8/10"
},
{
name:"Price",
a:"Affordable",
b:"Premium"
},
{
name:"Best For",
a:"Most users",
b:"Advanced users"
}

]

).map((row)=>(


<tr
key={row.name}
className="border-t"
>


<td className="p-5 font-bold">

{row.name}

</td>


<td className="p-5 text-slate-600">

{row.a}

</td>


<td className="p-5 text-slate-600">

{row.b}

</td>


</tr>


))}


</tbody>


</table>


</div>


</section>





{/* Winner */}

{comparison.winner && (

<section className="px-6">

<div className="mx-auto max-w-5xl rounded-3xl bg-green-50 p-8 text-center">


<div className="text-4xl">
🏆
</div>


<h2 className="mt-3 text-3xl font-black text-green-700">

Winner: {comparison.winner}

</h2>


<p className="mt-3 text-slate-600">

Based on features, pricing, usability,
and overall value.

</p>


</div>

</section>

)}





{/* Pros Cons */}

<section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">


<div className="rounded-3xl bg-green-50 p-8">


<h2 className="text-2xl font-black text-green-700">

✅ Why Choose {comparison.productA?.name}

</h2>


<ul className="mt-5 space-y-3">

{(
comparison.productA?.pros ||

[
"Great features",
"Easy to use",
"Strong value"
]

).map((item)=>(

<li key={item}>
• {item}
</li>

))}


</ul>


</div>





<div className="rounded-3xl bg-blue-50 p-8">


<h2 className="text-2xl font-black text-blue-700">

⭐ Why Choose {comparison.productB?.name}

</h2>


<ul className="mt-5 space-y-3">


{(
comparison.productB?.pros ||

[
"Powerful tools",
"Reliable performance",
"Advanced options"
]

).map((item)=>(

<li key={item}>
• {item}
</li>

))}


</ul>


</div>


</section>





{/* CTA */}

<section className="px-6 pb-20">


<div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-center text-white md:flex-row md:justify-center">


{comparison.productA?.link && (

<a

href={comparison.productA.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Try {comparison.productA.name}

</a>

)}



{comparison.productB?.link && (

<a

href={comparison.productB.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="rounded-xl border border-white px-8 py-4 font-bold"

>

Try {comparison.productB.name}

</a>

)}


</div>


</section>


</main>

  );
}