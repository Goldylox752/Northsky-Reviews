import Link from "next/link";
import { guides = [] } from "@/app/data/guides";


export const metadata = {

  title:
    "Technology Guides 2026 | AI, Software & Buying Guides | NorthSky Reviews",

  description:
    "Explore NorthSky Reviews technology guides covering AI tools, automation software, VPNs, productivity apps, and technology recommendations.",

  keywords:[
    "AI guides",
    "technology guides",
    "software guides",
    "AI automation guides",
    "best software guides",
    "technology buying guides"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/guides"
  }

};





export default function GuidesPage(){



const featuredGuides =
[...guides]
.sort(
(a,b)=>
(b.featured ? 1 : 0) -
(a.featured ? 1 : 0)
)
.slice(0,12);






const schema = {

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
"Technology Guides",

"description":
"NorthSky Reviews technology guides and buying recommendations.",


"url":
"https://northsky-reviews.vercel.app/guides",


"mainEntity":{

"@type":"ItemList",

"itemListElement":

featuredGuides.map((guide,index)=>({

"@type":"ListItem",

"position":index + 1,

"name":guide.title,

"url":
`https://northsky-reviews.vercel.app/guides/${guide.slug}`

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









<section className="
bg-gradient-to-br
from-slate-950
via-indigo-950
to-blue-900
px-6
py-24
text-center
text-white
">


<div className="mx-auto max-w-6xl">


<span className="
rounded-full
bg-blue-500/20
px-5
py-2
text-sm
font-bold
text-blue-300
">

📚 Technology Knowledge Hub

</span>





<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

NorthSky Guides

</h1>





<p className="
mx-auto
mt-6
max-w-3xl
text-xl
text-slate-300
">

Expert guides covering AI tools,
software, automation, cybersecurity,
and technology decisions.

</p>





<div className="
mt-10
flex
justify-center
flex-wrap
gap-5
">


<Link

href="/all-tools"

className="
rounded-xl
bg-blue-600
px-8
py-4
font-bold
"

>

Explore Tools →

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
"

>

Read Reviews →

</Link>



</div>


</div>


</section>









<section className="
mx-auto
max-w-7xl
px-6
py-20
">



<div className="
flex
justify-between
items-center
flex-wrap
gap-5
">


<h2 className="
text-4xl
font-black
">

Latest Guides

</h2>



<div className="
rounded-full
bg-blue-50
px-5
py-3
font-bold
text-blue-600
">

{guides.length} Guides

</div>


</div>









<div className="
mt-12
grid
gap-8
md:grid-cols-3
">


{featuredGuides.map((guide)=>(


<Link

key={guide.slug}

href={`/guides/${guide.slug}`}

className="
rounded-3xl
border
bg-white
p-8
transition
hover:-translate-y-2
hover:shadow-xl
"

>


{guide.category && (

<span className="
rounded-full
bg-blue-100
px-3
py-1
text-sm
font-bold
text-blue-700
">

{guide.category}

</span>

)}





<h3 className="
mt-6
text-2xl
font-black
">

{guide.title}

</h3>





<p className="
mt-4
text-slate-600
line-clamp-3
">

{guide.description}

</p>





<div className="
mt-6
font-bold
text-blue-600
">

Read Guide →

</div>



</Link>


))}



</div>


</section>









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

Browse Guide Categories

</h2>





<div className="
mt-10
grid
gap-6
md:grid-cols-4
">


[

["🤖 AI Guides","/ai"],

["⚙️ Automation","/categories/automation"],

["🔒 Security","/categories/vpn"],

["💻 Software","/reviews"]

].map(item=>(


<Link

key={item[0]}

href={item[1]}

className="
rounded-2xl
bg-white
p-6
text-center
font-bold
shadow
hover:shadow-xl
"

>

{item[0]}

</Link>


))


</div>


</div>


</section>









<section className="
bg-blue-600
px-6
py-20
text-center
text-white
">


<h2 className="
text-4xl
font-black
">

Make Smarter Technology Decisions

</h2>




<p className="
mt-5
text-blue-100
">

Learn how AI, software, and technology
can improve your workflow.

</p>




<Link

href="/comparisons"

className="
mt-8
inline-block
rounded-xl
bg-white
px-8
py-4
font-bold
text-blue-600
"

>

Compare Technology →

</Link>


</section>






</main>

);

}
