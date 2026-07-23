import Link from "next/link";
import { notFound } from "next/navigation";

import { tools } from "@/app/data/tools";


const siteUrl =
"https://northsky-reviews.vercel.app";



export async function generateStaticParams(){

  return tools.map((tool)=>({

    slug:tool.slug

  }));

}





export async function generateMetadata({params}){


const {slug}=params;



const tool =
tools.find(
(item)=>item.slug === slug
);



if(!tool){

return {

title:
"Review Not Found | NorthSky Reviews"

};

}





return {


title:
`${tool.name} Review 2026: Features, Pricing & Alternatives | NorthSky Reviews`,




description:
`Our ${tool.name} review covers features, pricing, pros, cons, alternatives, ratings, and whether it is worth using in 2026.`,





keywords:[

`${tool.name} review`,

`${tool.name} pricing`,

`${tool.name} alternatives`,

`best ${tool.category} tools 2026`

],





alternates:{

canonical:
`${siteUrl}/reviews/${tool.slug}`

},





openGraph:{


title:
`${tool.name} Review 2026`,



description:
`NorthSky Reviews expert analysis of ${tool.name}.`,



url:
`${siteUrl}/reviews/${tool.slug}`,



siteName:
"NorthSky Reviews"

}



};


}
export default function ReviewPage({params}){


const {slug}=params;



const tool =
tools.find(
(item)=>item.slug === slug
);



if(!tool){

notFound();

}



const rating =
tool.rating || 0;





return (

<main className="
min-h-screen
bg-white
text-slate-900
">






{/* REVIEW + SOFTWARE SCHEMA */}



<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":
"https://schema.org",


"@type":
"Review",



"name":
`${tool.name} Review 2026`,



"url":
`${siteUrl}/reviews/${tool.slug}`,




"author":{

"@type":
"Organization",

"name":
"NorthSky Reviews"

},




"reviewRating":{

"@type":
"Rating",

"ratingValue":
rating,

"bestRating":
10

},




"itemReviewed":{

"@type":
"SoftwareApplication",


"name":
tool.name,



"applicationCategory":
tool.category,


"description":
tool.description


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

href="/reviews"

className="
hover:text-blue-600
"

>

Reviews

</Link>



<span className="mx-2">

/

</span>



<span>

{tool.name}

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
flex
flex-wrap
gap-3
">


<span className="
rounded-full
bg-blue-500/20
px-4
py-2
text-sm
font-bold
text-blue-300
">

{tool.category}

</span>



<span className="
rounded-full
bg-green-500/20
px-4
py-2
text-sm
font-bold
text-green-300
">

⭐ {rating}/10

</span>


</div>








<h1 className="
mt-6
text-5xl
font-black
md:text-6xl
">

{tool.name}

Review 2026

</h1>







<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

{tool.description}

</p>







<div className="
mt-10
flex
flex-wrap
gap-4
">





{tool.link && (

<a

href={tool.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
rounded-xl
bg-blue-600
px-8
py-4
font-bold
hover:bg-blue-700
"

>

Try {tool.name} →

</a>

)}





<Link

href="/comparisons"

className="
rounded-xl
border
border-white/30
px-8
py-4
font-bold
hover:bg-white/10
"

>

Compare Alternatives

</Link>



</div>







</div>


</section>
{/* MAIN REVIEW CONTENT */}


<section className="
mx-auto
max-w-6xl
px-6
py-16
">


<div className="
grid
gap-10
lg:grid-cols-3
">





{/* ARTICLE */}


<div className="
lg:col-span-2
">





<h2 className="
text-3xl
font-black
">

What Is {tool.name}?

</h2>



<p className="
mt-5
leading-8
text-slate-600
">

NorthSky Reviews evaluates {tool.name}
based on features, usability, pricing,
performance, integrations, security,
and overall value.

Our goal is to help users decide if
{tool.name} is the right solution for
their workflow.

</p>








{/* SCORE BREAKDOWN */}



<h2 className="
mt-12
text-3xl
font-black
">

NorthSky Score Breakdown

</h2>





<div className="
mt-6
grid
gap-4
sm:grid-cols-2
">





{[

{
name:"Features",
score:tool.featureScore || 9
},

{
name:"Ease Of Use",
score:tool.easeScore || 9
},

{
name:"Value",
score:tool.valueScore || 8
},

{
name:"Performance",
score:tool.performanceScore || 9
}

].map(item=>(


<div

key={item.name}

className="
rounded-2xl
bg-slate-50
p-5
"

>


<div className="
flex
justify-between
font-bold
">


<span>

{item.name}

</span>



<span className="
text-blue-600
">

{item.score}/10

</span>


</div>





<div className="
mt-3
h-2
rounded-full
bg-slate-200
">


<div

className="
h-2
rounded-full
bg-blue-600
"

style={{

width:`${item.score * 10}%`

}}

/>


</div>



</div>


))}



</div>









{/* PROS CONS */}



<h2 className="
mt-12
text-3xl
font-black
">

Pros & Cons

</h2>




<div className="
mt-6
grid
gap-6
md:grid-cols-2
">





<div className="
rounded-3xl
bg-green-50
p-6
">


<h3 className="
font-black
text-green-700
">

✅ Pros

</h3>



<ul className="
mt-4
space-y-3
text-slate-700
">


{tool.pros?.map(item=>(


<li key={item}>

✓ {item}

</li>


))}



</ul>


</div>







<div className="
rounded-3xl
bg-red-50
p-6
">


<h3 className="
font-black
text-red-700
">

❌ Cons

</h3>




<ul className="
mt-4
space-y-3
text-slate-700
">


{tool.cons?.map(item=>(


<li key={item}>

• {item}

</li>


))}



</ul>


</div>






</div>









{/* FEATURES */}



<h2 className="
mt-12
text-3xl
font-black
">

Key Features

</h2>



<ul className="
mt-5
space-y-3
text-slate-600
">


{tool.features?.map(feature=>(


<li key={feature}>

✓ {feature}

</li>


))}



</ul>





</div>









{/* SIDEBAR */}


<aside className="
h-fit
rounded-3xl
bg-slate-50
p-7
">


<h3 className="
text-xl
font-black
">

Quick Facts

</h3>




<div className="
mt-6
space-y-5
">


<div>

<p className="font-bold">

Category

</p>

<p className="text-slate-600">

{tool.category}

</p>

</div>





<div>

<p className="font-bold">

Rating

</p>

<p className="text-slate-600">

⭐ {rating}/10

</p>

</div>





<div>

<p className="font-bold">

Best For

</p>

<p className="text-slate-600">

{tool.bestFor || "General users"}

</p>

</div>



</div>






</aside>






</div>


</section>
{/* PRICING SECTION */}


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

{tool.name} Pricing

</h2>



<p className="
mx-auto
mt-4
max-w-2xl
text-center
text-slate-600
">

Review the pricing options and determine
if this tool provides good value.

</p>






<div className="
mx-auto
mt-10
max-w-xl
rounded-3xl
bg-white
p-8
shadow-sm
">



<div className="
text-center
">


<h3 className="
text-2xl
font-black
">

Pricing Overview

</h3>



<p className="
mt-4
text-4xl
font-black
text-blue-600
">

{tool.price || "Pricing varies"}

</p>




</div>





<ul className="
mt-8
space-y-3
text-slate-600
">


<li>

✓ Free trial availability

</li>


<li>

✓ Compare plans before purchasing

</li>


<li>

✓ Check features against alternatives

</li>



</ul>



</div>


</div>


</section>









{/* ALTERNATIVES */}



<section className="
px-6
py-20
">


<div className="
mx-auto
max-w-6xl
">





<h2 className="
text-4xl
font-black
">

Best {tool.name} Alternatives

</h2>




<p className="
mt-3
text-slate-600
">

Explore similar AI tools and compare
features, pricing and performance.

</p>







<div className="
mt-10
grid
gap-6
md:grid-cols-3
">



{tools

.filter(item=>

item.slug !== tool.slug &&

item.category === tool.category

)

.slice(0,3)

.map(alternative=>(



<Link

key={alternative.slug}

href={`/reviews/${alternative.slug}`}

className="
rounded-3xl
border
bg-white
p-6
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<div className="
flex
justify-between
">


<span className="
font-bold
text-blue-600
">

Alternative

</span>



<span>

⭐ {alternative.rating}

</span>


</div>






<h3 className="
mt-5
text-xl
font-black
">

{alternative.name}

</h3>




<p className="
mt-3
text-sm
text-slate-600
">

{alternative.description}

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
bg-blue-600
p-12
text-center
text-white
">



<h2 className="
text-4xl
font-black
">

Ready To Try {tool.name}?

</h2>




<p className="
mx-auto
mt-4
max-w-2xl
text-blue-100
">

Visit the official website and explore
the latest plans, features and offers.

</p>






{tool.link && (

<a

href={tool.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
mt-8
inline-block
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-600
hover:bg-slate-100
"

>

Visit Official Website →

</a>

)}




<p className="
mt-6
text-sm
text-blue-100
">

NorthSky Reviews may earn a commission
from qualifying affiliate purchases.

</p>



</div>


</section>
{/* FAQ SECTION */}


<section className="
px-6
pb-20
">


<div className="
mx-auto
max-w-5xl
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

q:`What is ${tool.name}?`,

a:`${tool.name} is a ${tool.category} tool designed to help users improve productivity, automate tasks, and complete workflows faster.`

},


{

q:`Is ${tool.name} worth it in 2026?`,

a:`Based on features, usability, pricing and overall value, ${tool.name} receives a NorthSky rating of ${rating}/10.`

},


{

q:`What are the best ${tool.name} alternatives?`,

a:`Users should compare similar tools based on features, pricing, integrations and their specific needs.`

}



].map(item=>(


<div

key={item.q}

className="
rounded-2xl
border
p-6
"

>


<h3 className="
font-black
text-lg
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



</div>


</section>









{/* FAQ STRUCTURED DATA */}


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
`What is ${tool.name}?`,

acceptedAnswer:{

"@type":
"Answer",

text:
`${tool.name} is a ${tool.category} tool reviewed by NorthSky Reviews.`

}

},


{

"@type":
"Question",

"name":
`Is ${tool.name} worth it in 2026?`,

acceptedAnswer:{

"@type":
"Answer",

text:
`${tool.name} receives a NorthSky rating of ${rating}/10 based on features, usability and value.`

}

}


]

})

}}

/>







{/* FINAL DISCLAIMER */}


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

Transparency

</h3>



<p className="
mt-3
text-sm
text-slate-600
">

NorthSky Reviews provides independent analysis.
Some links may be affiliate links, meaning we may earn
a commission at no additional cost to you.

</p>


</div>


</section>







</main>

);

}