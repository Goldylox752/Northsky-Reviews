import Link from "next/link";
import { notFound } from "next/navigation";


const comparisons = {


"chatgpt-vs-claude": {

title:
"ChatGPT vs Claude AI 2026",

description:
"Compare ChatGPT and Claude AI for writing, coding, research, business, and productivity.",

winner:
"ChatGPT",

tools:[

{
name:"ChatGPT",
slug:"chatgpt",
rating:"9.8/10",
website:"https://chat.openai.com",

best:
"Best overall AI assistant",

pros:[
"Excellent writing",
"Strong coding support",
"Large ecosystem"
],

cons:[
"Premium features require paid plan"
]

},


{
name:"Claude AI",
slug:"claude",
rating:"9.5/10",
website:"https://claude.ai",

best:
"Best for writing and analysis",

pros:[
"Excellent reasoning",
"Great document analysis",
"Natural writing quality"
],

cons:[
"Smaller ecosystem"
]

}

]

},




"chatgpt-vs-gemini":{

title:
"ChatGPT vs Google Gemini 2026",

description:
"Compare ChatGPT and Google Gemini AI features, performance, integrations, and best use cases.",

winner:
"ChatGPT",

tools:[


{
name:"ChatGPT",
slug:"chatgpt",
rating:"9.8/10",
website:"https://chat.openai.com",

best:
"Best all-around AI",

pros:[
"Writing",
"Coding",
"Custom GPTs"
],

cons:[
"Some features require subscription"
]

},



{
name:"Google Gemini",
slug:"gemini",

rating:"9.3/10",

website:
"https://gemini.google.com",

best:
"Best Google ecosystem AI",

pros:[
"Google integration",
"Multimodal AI",
"Research"
],

cons:[
"Feature availability varies"
]

}


]

}

};





export async function generateStaticParams(){

return Object.keys(comparisons)
.map(slug=>({

slug

}));

}




export async function generateMetadata({params}){


const {slug}=await params;


const page =
comparisons[slug];


if(!page){

return {

title:
"AI Comparison | NorthSky Reviews"

};

}


return {

title:
`${page.title} | NorthSky Reviews`,

description:
page.description

};

}





export default async function ComparisonPage({params}){


const {slug}=await params;


const page =
comparisons[slug];



if(!page){

notFound();

}





return (

<main className="min-h-screen bg-white text-slate-900">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:

JSON.stringify({

"@context":"https://schema.org",

"@type":"Article",

"name":page.title,

"description":page.description,

"url":
`https://northsky-reviews.vercel.app/ai/comparisons/${slug}`

})

}}

/>





<section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">


<div className="mx-auto max-w-5xl text-center">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

⚖️ AI Comparison

</span>



<h1 className="mt-8 text-5xl font-black">

{page.title}

</h1>



<p className="mt-6 text-xl text-slate-300">

{page.description}

</p>


</div>

</section>







<section className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-center text-4xl font-black">

Head-to-Head Comparison

</h2>





<div className="mt-12 grid gap-8 md:grid-cols-2">


{page.tools.map(tool=>(


<div

key={tool.name}

className="rounded-3xl border p-8 shadow-sm"

>


<h3 className="text-3xl font-black">

{tool.name}

</h3>


<p className="mt-3 text-yellow-500 font-bold">

⭐ {tool.rating}

</p>



<p className="mt-4 font-bold text-blue-600">

{tool.best}

</p>





<h4 className="mt-6 font-black">

Pros

</h4>


<ul className="mt-3 space-y-2">

{tool.pros.map(item=>(

<li key={item}>
✅ {item}
</li>

))}

</ul>




<h4 className="mt-6 font-black">

Cons

</h4>


<ul className="mt-3 space-y-2">

{tool.cons.map(item=>(

<li key={item}>
❌ {item}
</li>

))}

</ul>





<div className="mt-8 space-y-3">


<Link

href={`/ai/reviews/${tool.slug}`}

className="block rounded-xl border px-5 py-3 text-center font-bold"

>

Read Review →

</Link>



<a

href={tool.website}

target="_blank"

rel="noopener noreferrer sponsored"

className="block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white"

>

Try {tool.name}

</a>


</div>



</div>


))}



</div>






<section className="mt-14 rounded-3xl bg-blue-600 p-10 text-center text-white">


<h2 className="text-4xl font-black">

🏆 Winner: {page.winner}

</h2>


<p className="mt-4 text-lg">

Based on features, performance,
usability, pricing, and real-world value.

</p>


</section>





<div className="mt-12 text-center">


<Link

href="/ai"

className="font-bold text-blue-600"

>

← Back to AI Hub

</Link>


</div>


</section>



</main>

);

}