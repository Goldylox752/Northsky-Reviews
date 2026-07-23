import Link from "next/link";

export const metadata = {

  title:
    "Affiliate Disclosure | NorthSky Reviews",

  description:
    "Learn how NorthSky Reviews uses affiliate links, partnerships, and sponsored content while maintaining independent reviews and recommendations.",

  keywords:[
    "affiliate disclosure",
    "NorthSky Reviews disclosure",
    "technology reviews transparency",
    "AI software affiliate policy"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/disclosure"
  }

};


export default function DisclosurePage(){

const schema = {

"@context":"https://schema.org",

"@type":"WebPage",

"name":
"NorthSky Reviews Affiliate Disclosure",

"description":
"Transparency policy explaining affiliate relationships and editorial independence.",

"url":
"https://northsky-reviews.vercel.app/disclosure"

};


return (

<main className="min-h-screen bg-white text-slate-900">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>





<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-white text-center">


<div className="mx-auto max-w-5xl">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

🔎 Transparency Policy

</span>


<h1 className="mt-8 text-5xl font-black md:text-6xl">

Affiliate Disclosure

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

NorthSky Reviews believes in transparency.
Learn how our website operates and how we
maintain independent recommendations.

</p>


</div>

</section>







<section className="px-6 py-20">


<div className="mx-auto max-w-5xl space-y-12">


<div>

<h2 className="text-3xl font-black">

Affiliate Relationships

</h2>


<p className="mt-5 text-lg leading-8 text-slate-600">

Some links on NorthSky Reviews may be affiliate
links. This means we may earn a commission if you
purchase a product or service through our links,
at no additional cost to you.

</p>


</div>





<div>

<h2 className="text-3xl font-black">

Our Editorial Independence

</h2>


<p className="mt-5 text-lg leading-8 text-slate-600">

Affiliate partnerships do not determine our ratings,
rankings, or opinions. Our reviews are based on
research, product features, usability, pricing,
performance, and overall value.

</p>


</div>





<div>

<h2 className="text-3xl font-black">

How We Make Recommendations

</h2>


<p className="mt-5 text-lg leading-8 text-slate-600">

We evaluate technology products using consistent
criteria including:

</p>



<ul className="mt-6 space-y-3 text-lg text-slate-600">

<li>
⭐ Features and capabilities
</li>

<li>
⭐ Pricing and affordability
</li>

<li>
⭐ User experience
</li>

<li>
⭐ Security and privacy
</li>

<li>
⭐ Customer support
</li>

<li>
⭐ Overall product value
</li>

</ul>


</div>





<div>

<h2 className="text-3xl font-black">

Sponsored Content

</h2>


<p className="mt-5 text-lg leading-8 text-slate-600">

If sponsored content or paid partnerships are
published, they will be clearly identified.
Sponsored relationships do not guarantee positive
reviews or rankings.

</p>


</div>





<div>

<h2 className="text-3xl font-black">

Accuracy & Updates

</h2>


<p className="mt-5 text-lg leading-8 text-slate-600">

Technology changes quickly. We regularly update
our articles, comparisons, and rankings to reflect
new features, pricing changes, and market updates.

</p>


</div>


</div>


</section>







<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl text-center">


<h2 className="text-4xl font-black">

Questions About Our Reviews?

</h2>


<p className="mt-5 text-lg text-slate-600">

We value transparency and welcome questions
about our review process.

</p>


<Link

href="/contact"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Contact Us →

</Link>


</div>


</section>



</main>

);

}
