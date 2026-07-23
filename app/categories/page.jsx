import Link from "next/link";

import { categories, tools } from "@/app/data/tools";


const siteUrl =
"https://northsky-reviews.vercel.app";



export const metadata = {

title:
"Best Software Categories 2026 | AI Tools, VPNs, Automation & More | NorthSky Reviews",

description:
"Explore NorthSky Reviews technology categories including AI software, VPN services, automation tools, website builders, travel technology, and business software.",

keywords:[

"best software categories 2026",
"AI tools",
"VPN reviews",
"automation software",
"technology reviews"

],

alternates:{

canonical:
`${siteUrl}/categories`

}

};





export default function CategoriesPage(){



const categorySchema = {


"@context":
"https://schema.org",


"@type":
"CollectionPage",



"name":
"NorthSky Reviews Categories",



"description":
"Browse software categories including AI tools, VPNs, automation, and technology products.",



"url":
`${siteUrl}/categories`,



"hasPart":

categories.map(category=>(

{

"@type":
"CollectionPage",

"name":
category.name,

"url":
`${siteUrl}/categories/${category.slug}`

}

))


};






return (

<main className="
min-h-screen
bg-white
text-slate-900
">





<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(categorySchema)

}}

/>







{/* HERO */}



<section className="
bg-gradient-to-br
from-slate-950
via-blue-950
to-cyan-950
px-6
py-24
text-center
text-white
">


<div className="
mx-auto
max-w-6xl
">


<span className="
rounded-full
bg-cyan-500/20
px-5
py-2
text-sm
font-bold
text-cyan-300
">

NorthSky Software Directory

</span>





<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

Explore Technology Categories

</h1>





<p className="
mx-auto
mt-6
max-w-3xl
text-xl
text-slate-300
">

Discover expert reviews, comparisons,
and rankings for the world's leading
software and digital tools.

</p>





<div className="
mt-10
flex
flex-wrap
justify-center
gap-5
">


<Link

href="/all-tools"

className="
rounded-xl
bg-cyan-500
px-8
py-4
font-black
text-slate-950
hover:bg-cyan-400
"

>

Browse All Tools

</Link>




<Link

href="/reviews"

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

Read Reviews

</Link>


</div>



</div>


</section>









{/* CATEGORY GRID */}



<section className="
px-6
py-20
">


<div className="
mx-auto
max-w-7xl
">



<h2 className="
text-center
text-4xl
font-black
">

Browse Categories

</h2>



<p className="
mt-4
text-center
text-slate-600
">

Find the best tools for business,
productivity, security, and technology.

</p>







<div className="
mt-12
grid
gap-8
md:grid-cols-3
">





{categories.map((category)=>{


const categoryTools =

tools.filter(

tool =>
tool.category === category.name

);



return (

<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="
group
rounded-3xl
border
p-8
transition
hover:-translate-y-2
hover:shadow-xl
hover:border-cyan-400
"

>


<div className="
text-5xl
">

{category.icon || "🚀"}

</div>




<h3 className="
mt-6
text-2xl
font-black
">

{category.name}

</h3>





<p className="
mt-4
text-slate-600
">

{category.description ||

`Explore the best ${category.name} tools, reviews, and comparisons.`

}

</p>





<div className="
mt-6
flex
justify-between
rounded-xl
bg-slate-100
px-4
py-3
font-bold
">


<span>

Tools

</span>



<span className="
text-cyan-600
">

{categoryTools.length}

</span>


</div>





<div className="
mt-5
font-bold
text-cyan-600
group-hover:underline
">

Explore Category →

</div>




</Link>


);


})}



</div>



</div>


</section>









{/* TRUST SECTION */}



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

Why NorthSky Reviews?

</h2>





<div className="
mt-12
grid
gap-6
md:grid-cols-4
">



{[

[
"Independent Testing",
"Research-based reviews and rankings."
],


[
"Detailed Comparisons",
"Compare features, pricing, and value."
],


[
"Updated Rankings",
"Technology changes. We update."
],


[
"Expert Research",
"Helping users make smarter decisions."
]

].map(([title,text])=>(


<div

key={title}

className="
rounded-3xl
bg-white
p-7
shadow-sm
"

>


<h3 className="
font-black
">

{title}

</h3>


<p className="
mt-3
text-sm
text-slate-600
">

{text}

</p>


</div>


))}



</div>


</div>


</section>









{/* FINAL CTA */}



<section className="
px-6
py-24
">


<div className="
mx-auto
max-w-5xl
rounded-3xl
bg-slate-950
p-12
text-center
text-white
">


<h2 className="
text-4xl
font-black
">

Find The Right Technology

</h2>




<p className="
mt-4
text-slate-300
">

Explore reviews, guides,
and comparisons from NorthSky.

</p>





<Link

href="/guides"

className="
mt-8
inline-block
rounded-xl
bg-cyan-500
px-8
py-4
font-black
text-slate-950
"

>

View Buying Guides →

</Link>




</div>


</section>






</main>

);

}
