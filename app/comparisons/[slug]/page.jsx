import Link from "next/link";
import { notFound } from "next/navigation";

import { comparisons } from "@/app/data/comparisons";


const siteUrl =
"https://northsky-reviews.vercel.app";





export async function generateStaticParams(){

  return comparisons.map((item)=>({

    slug:item.slug

  }));

}







export async function generateMetadata({params}){


const {slug}=await params;



const comparison =
comparisons.find(
(item)=>item.slug === slug
);



if(!comparison){

return {

title:
"Comparison Not Found | NorthSky Reviews"

};

}





return {


title:
`${comparison.title} 2026: Features, Pricing & Winner | NorthSky Reviews`,




description:

`Compare ${comparison.title}. See features, pricing, performance, pros, cons, and which option is best.`,




keywords:[

`${comparison.title} comparison`,

`${comparison.title} vs`,

"best software comparison 2026",

"AI tool comparison",

"technology comparisons"

],





alternates:{

canonical:
`${siteUrl}/comparisons/${comparison.slug}`

},





openGraph:{


title:
`${comparison.title} 2026 Comparison`,



description:
comparison.description,



url:
`${siteUrl}/comparisons/${comparison.slug}`,



siteName:
"NorthSky Reviews"

}



};


}
export default async function ComparisonPage({params}){


const {slug}=await params;



const comparison =
comparisons.find(
(item)=>item.slug === slug
);



if(!comparison){

notFound();

}





return (

<main className="
min-h-screen
bg-white
text-slate-900
">





{/* COMPARISON SCHEMA */}


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":
"https://schema.org",


"@type":
"Article",



headline:
comparison.title,



description:
comparison.description,



url:
`${siteUrl}/comparisons/${comparison.slug}`,



author:{

"@type":
"Organization",

"name":
"NorthSky Reviews"

},



mainEntity:{

"@type":
"ItemList",

itemListElement:[

{

"@type":
"Product",

"name":
comparison.productA?.name ||
"Option A"

},


{

"@type":
"Product",

"name":
comparison.productB?.name ||
"Option B"

}

]

}



})

}}

/>










{/* BREADCRUMBS */}


<div className="
mx-auto
max-w-6xl
px-6
pt-8
text-sm
text-slate-500
">



<Link

href="/"

className="
hover:text-blue-600
"

>

Home

</Link>



<span className="mx-2">

/

</span>



<Link

href="/comparisons"

className="
hover:text-blue-600
"

>

Comparisons

</Link>



<span className="mx-2">

/

</span>



<span>

{comparison.title}

</span>



</div>









{/* HERO */}



<section className="
mt-8
bg-gradient-to-br
from-slate-950
via-indigo-950
to-blue-900
px-6
py-20
text-white
">



<div className="
mx-auto
max-w-6xl
">





<div className="
inline-flex
rounded-full
bg-blue-500/20
px-5
py-2
font-bold
text-blue-300
">

⚖️ Product Comparison

</div>







<h1 className="
mt-6
text-5xl
font-black
md:text-6xl
">

{comparison.title}

</h1>







<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

{comparison.description}

</p>






<div className="
mt-10
grid
gap-5
md:grid-cols-2
">





<div className="
rounded-3xl
bg-white/10
p-6
">


<p className="
text-sm
text-slate-300
">

Comparing

</p>


<h2 className="
mt-2
text-2xl
font-black
">

{comparison.productA?.name ||
"Option A"}

</h2>


</div>







<div className="
rounded-3xl
bg-white/10
p-6
">


<p className="
text-sm
text-slate-300
">

Against

</p>


<h2 className="
mt-2
text-2xl
font-black
">

{comparison.productB?.name ||
"Option B"}

</h2>


</div>




</div>





</div>


</section>
{/* COMPARISON TABLE */}


<section className="
mx-auto
max-w-7xl
px-6
py-16
">


<div className="
overflow-hidden
rounded-3xl
border
shadow-sm
">



<table className="
w-full
text-left
">




<thead className="
bg-slate-950
text-white
">


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

name:"Pricing",

a:"Affordable",

b:"Premium"

},

{

name:"Best For",

a:"Most Users",

b:"Advanced Users"

}

]

).map(row=>(


<tr

key={row.name}

className="
border-t
"

>



<td className="
p-5
font-black
">

{row.name}

</td>




<td className="
p-5
text-slate-600
">

{row.a}

</td>



<td className="
p-5
text-slate-600
">

{row.b}

</td>



</tr>


))}



</tbody>




</table>


</div>


</section>









{/* WINNER */}



{comparison.winner && (


<section className="
px-6
">


<div className="
mx-auto
max-w-5xl
rounded-3xl
bg-green-50
p-10
text-center
">


<div className="text-5xl">

🏆

</div>




<h2 className="
mt-4
text-4xl
font-black
text-green-700
">

Winner: {comparison.winner}

</h2>





<p className="
mt-4
text-slate-600
">

NorthSky selected this winner based on
features, pricing, usability,
performance and overall value.

</p>



</div>


</section>


)}









{/* SCORE CARDS */}



<section className="
mx-auto
max-w-6xl
px-6
py-16
">


<h2 className="
text-center
text-4xl
font-black
">

Score Breakdown

</h2>







<div className="
mt-10
grid
gap-6
md:grid-cols-2
">





{[

{

name:
comparison.productA?.name ||
"Option A",

score:
comparison.productA?.rating ||
9

},


{

name:
comparison.productB?.name ||
"Option B",

score:
comparison.productB?.rating ||
8

}


].map(product=>(


<div

key={product.name}

className="
rounded-3xl
border
bg-white
p-8
"

>


<div className="
flex
items-center
justify-between
">


<h3 className="
text-2xl
font-black
">

{product.name}

</h3>



<span className="
rounded-full
bg-blue-100
px-4
py-2
font-black
text-blue-700
">

⭐ {product.score}/10

</span>



</div>





<div className="
mt-6
h-3
rounded-full
bg-slate-200
">


<div

className="
h-3
rounded-full
bg-blue-600
"

style={{

width:
`${product.score * 10}%`

}}

/>


</div>



</div>


))}



</div>


</section>
{/* PROS & CONS COMPARISON */}


<section className="
mx-auto
max-w-6xl
grid
gap-8
px-6
py-16
md:grid-cols-2
">





<div className="
rounded-3xl
bg-blue-50
p-8
">


<h2 className="
text-2xl
font-black
text-blue-700
">

Why Choose {comparison.productA?.name || "Option A"}

</h2>





<ul className="
mt-6
space-y-3
text-slate-700
">


{(

comparison.productA?.pros ||

[

"Strong features",

"Easy to use",

"Great overall value"

]

).map(item=>(


<li key={item}>

✓ {item}

</li>


))}



</ul>



</div>








<div className="
rounded-3xl
bg-purple-50
p-8
">


<h2 className="
text-2xl
font-black
text-purple-700
">

Why Choose {comparison.productB?.name || "Option B"}

</h2>





<ul className="
mt-6
space-y-3
text-slate-700
">


{(

comparison.productB?.pros ||

[

"Advanced features",

"Reliable performance",

"Professional tools"

]

).map(item=>(


<li key={item}>

✓ {item}

</li>


))}



</ul>



</div>



</section>









{/* REVIEW LINKS */}



<section className="
bg-slate-50
px-6
py-20
">


<div className="
mx-auto
max-w-6xl
">



<h2 className="
text-center
text-4xl
font-black
">

Read Full Reviews

</h2>







<div className="
mt-10
grid
gap-6
md:grid-cols-2
">





{[

comparison.productA,

comparison.productB

]

.filter(Boolean)

.map(product=>(



<Link

key={product.name}

href={`/reviews/${product.slug}`}

className="
rounded-3xl
bg-white
p-8
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
"

>



<div className="
text-blue-600
font-bold
">

Full Review

</div>





<h3 className="
mt-4
text-2xl
font-black
">

{product.name}

</h3>




<p className="
mt-3
text-slate-600
">

View features, pricing,
pros, cons and alternatives.

</p>




<div className="
mt-5
font-bold
text-blue-600
">

Read Review →

</div>



</Link>


))}



</div>


</div>


</section>









{/* AFFILIATE CTA */}



<section className="
px-6
pb-20
">


<div className="
mx-auto
max-w-5xl
rounded-3xl
bg-gradient-to-r
from-blue-600
to-purple-600
p-12
text-center
text-white
">





<h2 className="
text-4xl
font-black
">

Try The Best Option

</h2>




<p className="
mx-auto
mt-4
max-w-2xl
text-blue-100
">

Check current pricing, features,
and available offers from the official websites.

</p>







<div className="
mt-8
flex
flex-col
justify-center
gap-4
md:flex-row
">





{comparison.productA?.link && (


<a

href={comparison.productA.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-600
"

>

Try {comparison.productA.name}

</a>


)}




{comparison.productB?.link && (


<a

href={comparison.productB.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
rounded-xl
border
border-white
px-8
py-4
font-black
"

>

Try {comparison.productB.name}

</a>


)}



</div>





<p className="
mt-6
text-sm
text-blue-100
">

NorthSky Reviews may earn commissions from qualifying purchases.

</p>




</div>


</section>
{/* FAQ SECTION */}


<section className="
mx-auto
max-w-5xl
px-6
pb-20
">


<h2 className="
text-center
text-4xl
font-black
">

Frequently Asked Questions

</h2>





<div className="
mt-10
space-y-5
">





{[

{

q:
`Which is better: ${comparison.productA?.name} or ${comparison.productB?.name}?`,

a:
`The best choice depends on your needs. NorthSky compares features, pricing, usability, and value to help you decide.`

},


{

q:
`What is the main difference between ${comparison.productA?.name} and ${comparison.productB?.name}?`,

a:
`The main differences are features, pricing, performance, integrations, and the type of users each product is designed for.`

},


{

q:
`Does NorthSky recommend a winner?`,

a:
comparison.winner
?
`Yes. NorthSky selected ${comparison.winner} as the winner based on overall value.`
:
`NorthSky evaluates both products based on features, pricing, and user needs.`

}



].map(item=>(


<div

key={item.q}

className="
rounded-3xl
border
p-6
"

>


<h3 className="
text-lg
font-black
">

{item.q}

</h3>



<p className="
mt-3
text-slate-600
">

{item.a}

</p>


</div>


))}



</div>


</section>









{/* FAQ SCHEMA */}


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":
"https://schema.org",

"@type":
"FAQPage",


mainEntity:[


{

"@type":
"Question",

"name":
`Which is better: ${comparison.productA?.name} or ${comparison.productB?.name}?`,



acceptedAnswer:{

"@type":
"Answer",

text:
`The best choice depends on features, pricing, usability and user requirements.`

}

},



{

"@type":
"Question",

"name":
`What is the difference between ${comparison.productA?.name} and ${comparison.productB?.name}?`,



acceptedAnswer:{

"@type":
"Answer",

text:
`NorthSky compares features, pricing, performance and value.`

}

}


]

})

}}

/>









{/* TRANSPARENCY */}



<section className="
px-6
pb-16
">


<div className="
mx-auto
max-w-4xl
rounded-3xl
bg-slate-100
p-8
text-center
">


<h3 className="
font-black
">

NorthSky Transparency

</h3>




<p className="
mt-3
text-sm
text-slate-600
">

NorthSky Reviews provides independent comparisons.
Some links may be affiliate links, meaning we may earn
a commission at no extra cost to you.

</p>



</div>


</section>









</main>

);

}