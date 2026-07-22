import Link from "next/link";
import { notFound } from "next/navigation";


const reviews = {

  "chatgpt": {
    name:"ChatGPT",
    category:"AI Assistant",
    rating:"9.8/10",
    description:
    "ChatGPT is a powerful AI assistant for writing, research, coding, brainstorming, automation, and everyday productivity.",
    pros:[
      "Excellent general-purpose AI assistant",
      "Strong writing and coding capabilities",
      "Large ecosystem and integrations"
    ],
    cons:[
      "Advanced features require paid plans",
      "AI responses should still be reviewed"
    ],
    bestFor:
    "Students, professionals, creators, developers, and businesses",
    website:
    "https://chat.openai.com"
  },


  "claude": {
    name:"Claude AI",
    category:"AI Assistant",
    rating:"9.5/10",
    description:
    "Claude is an advanced AI assistant focused on reasoning, writing quality, analysis, and professional workflows.",
    pros:[
      "Excellent long-form writing",
      "Strong reasoning abilities",
      "Great document analysis"
    ],
    cons:[
      "Some features have usage limits",
      "Smaller ecosystem than competitors"
    ],
    bestFor:
    "Writers, researchers, and professionals",
    website:
    "https://claude.ai"
  },


  "github-copilot": {
    name:"GitHub Copilot",
    category:"AI Coding",
    rating:"9.4/10",
    description:
    "GitHub Copilot helps developers write code faster with AI-powered suggestions, debugging, and programming assistance.",
    pros:[
      "Improves developer productivity",
      "Works inside popular editors",
      "Great coding suggestions"
    ],
    cons:[
      "Requires developer review",
      "Paid plans for advanced use"
    ],
    bestFor:
    "Software developers and engineering teams",
    website:
    "https://github.com/features/copilot"
  }

};



export async function generateMetadata({params}){

const tool = reviews[params.slug];

if(!tool){

return {
title:"AI Tool Review | NorthSky Reviews"
};

}


return {

title:
`${tool.name} Review 2026 | Features, Pricing & Rating | NorthSky Reviews`,

description:
`${tool.name} review including features, pros, cons, pricing information, and who it is best for.`

};

}



export default function ReviewPage({params}){


const tool = reviews[params.slug];


if(!tool){

notFound();

}



return (

<main className="min-h-screen bg-white text-slate-900">


{/* Hero */}

<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-24 text-white">


<div className="mx-auto max-w-5xl text-center">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

{tool.category}

</span>


<h1 className="mt-8 text-5xl font-black">

{tool.name} Review 2026

</h1>


<p className="mt-6 text-xl text-slate-300">

{tool.description}

</p>


<div className="mt-8 text-3xl font-black text-yellow-400">

⭐ {tool.rating}

</div>



<a

href={tool.website}

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Visit {tool.name}

</a>


</div>

</section>





{/* Review Content */}

<section className="mx-auto max-w-5xl px-6 py-20">


<div className="grid gap-10 md:grid-cols-2">


<div className="rounded-3xl border p-8">

<h2 className="text-3xl font-black">

Pros

</h2>


<ul className="mt-6 space-y-3">

{tool.pros.map((item)=>(

<li key={item}>
✅ {item}
</li>

))}

</ul>


</div>





<div className="rounded-3xl border p-8">

<h2 className="text-3xl font-black">

Cons

</h2>


<ul className="mt-6 space-y-3">

{tool.cons.map((item)=>(

<li key={item}>
❌ {item}
</li>

))}

</ul>


</div>


</div>






<div className="mt-12 rounded-3xl bg-slate-50 p-10">


<h2 className="text-3xl font-black">

Who Is {tool.name} Best For?

</h2>


<p className="mt-5 text-lg text-slate-600">

{tool.bestFor}

</p>


</div>






<div className="mt-12 text-center">


<Link

href="/ai"

className="font-bold text-blue-600"

>

← Back to AI Tools

</Link>


</div>


</section>




</main>

);

}