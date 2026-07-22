import Link from "next/link";
import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";


export const metadata = {

  title:
    "Search AI Tools & Software | NorthSky Reviews",

  description:
    "Search AI tools, software reviews, comparisons, and technology recommendations from NorthSky Reviews."

};




export default async function SearchPage({searchParams}) {


  const params =
    await searchParams;


  const query =
    params?.q || "";


  const category =
    params?.category || "";



  const search =
    query.toLowerCase();




  let toolResults =
    [...tools];



  if(search){

    toolResults =
      toolResults.filter((tool)=>

        tool.name
        ?.toLowerCase()
        .includes(search)

        ||

        tool.description
        ?.toLowerCase()
        .includes(search)

        ||

        tool.category
        ?.toLowerCase()
        .includes(search)

      );

  }



  if(category){

    toolResults =
      toolResults.filter(

        (tool)=>

        tool.category === category

      );

  }




  const comparisonResults =
    comparisons.filter((item)=>

      item.title
      ?.toLowerCase()
      .includes(search)

      ||

      item.description
      ?.toLowerCase()
      .includes(search)

    );






return (

<main className="min-h-screen bg-white px-6 py-16">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"SearchResultsPage",

"name":"NorthSky Reviews Search",

"url":"https://northsky-reviews.vercel.app/search"

})

}}

/>





<div className="mx-auto max-w-7xl">


<h1 className="text-5xl font-black">

Search NorthSky Reviews

</h1>


<p className="mt-4 text-lg text-slate-600">

Find AI tools, software reviews,
comparisons, and technology guides.

</p>





<form

action="/search"

className="mt-10 flex flex-col gap-4 md:flex-row"

>


<input

name="q"

defaultValue={query}

placeholder="Search ChatGPT, VPN, AI tools..."

className="flex-1 rounded-xl border px-5 py-4"

/>




<select

name="category"

defaultValue={category}

className="rounded-xl border px-5 py-4"

>


<option value="">

All Categories

</option>


{categories.map((cat)=>(

<option

key={cat.slug}

value={cat.name}

>

{cat.icon} {cat.name}

</option>

))}


</select>





<button

className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Search

</button>


</form>








<section className="mt-14">


<h2 className="text-3xl font-black">

AI Tools ({toolResults.length})

</h2>



{toolResults.length > 0 && (

<div className="mt-8 grid gap-8 md:grid-cols-3">


{toolResults.map((tool)=>(


<div

key={tool.slug}

className="rounded-3xl border p-8 shadow-sm hover:shadow-xl"

>


<div className="flex justify-between">


<span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">

{tool.category}

</span>


<span className="font-bold text-green-600">

⭐ {tool.rating}

</span>


</div>



<h3 className="mt-5 text-2xl font-black">

{tool.name}

</h3>



<p className="mt-4 text-slate-600">

{tool.description}

</p>




<div className="mt-6 flex gap-4">


<Link

href={`/ai/reviews/${tool.slug}`}

className="font-bold text-blue-600"

>

Read Review →

</Link>



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="font-bold text-green-600"

>

Visit →

</a>


</div>


</div>


))}


</div>

)}


</section>








<section className="mt-16">


<h2 className="text-3xl font-black">

Comparisons ({comparisonResults.length})

</h2>



<div className="mt-6 grid gap-6 md:grid-cols-2">


{comparisonResults.map((item)=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="rounded-3xl border p-6 hover:shadow-xl"

>


<h3 className="text-xl font-black">

{item.title}

</h3>


<p className="mt-3 text-slate-600">

{item.description}

</p>


</Link>


))}


</div>


</section>






{toolResults.length === 0 &&
comparisonResults.length === 0 && (

<div className="mt-12 rounded-3xl bg-slate-50 p-10 text-center">


<h2 className="text-2xl font-black">

No results found

</h2>


<p className="mt-3 text-slate-600">

Try searching another AI tool or category.

</p>


</div>

)}



</div>


</main>

);

}