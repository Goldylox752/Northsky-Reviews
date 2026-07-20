import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "About NorthSky Reviews | Technology Reviews & Buying Guides",

  description:
    "Learn about NorthSky Reviews, our mission, review process, and commitment to helping readers make smarter technology decisions.",

};



export default function AboutPage(){

return (

<main className="bg-white text-slate-900">


<section className="bg-slate-950 px-6 py-24 text-center text-white">


<h1 className="text-5xl font-black">

About NorthSky Reviews

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Helping people make smarter technology decisions
through independent reviews, comparisons, and
buying guides.

</p>


</section>





<section className="mx-auto max-w-5xl px-6 py-20">


<h2 className="text-4xl font-bold">

Our Mission

</h2>


<p className="mt-6 text-lg text-slate-600">

NorthSky Reviews exists to simplify technology
choices. We research and compare products,
software, and digital services so readers can
understand what is worth their time and money.

</p>



<h2 className="mt-12 text-4xl font-bold">

What We Cover

</h2>


<ul className="mt-6 space-y-3 text-lg text-slate-600">

<li>
✓ VPNs and cybersecurity tools
</li>

<li>
✓ AI software and productivity platforms
</li>

<li>
✓ Travel technology and eSIM services
</li>

<li>
✓ Software and digital products
</li>

<li>
✓ Technology buying guides
</li>

</ul>



<h2 className="mt-12 text-4xl font-bold">

Our Approach

</h2>


<p className="mt-6 text-lg text-slate-600">

We focus on comparing features, usability,
performance, pricing, and overall value.
Our goal is to provide clear information that
helps readers choose confidently.

</p>


</section>






<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl">


<h2 className="text-4xl font-bold">

Affiliate Disclosure

</h2>


<p className="mt-6 text-lg text-slate-600">

Some links on NorthSky Reviews are affiliate
links. This means we may earn a commission
if you purchase through certain links, at no
additional cost to you.

Affiliate partnerships help support our website
and allow us to continue creating free reviews
and guides.

</p>


</div>


</section>


</main>

);

}