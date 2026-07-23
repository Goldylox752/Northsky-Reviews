import Link from "next/link";


export const metadata = {

  title:
    "Terms of Service | NorthSky Reviews",

  description:
    "Read the NorthSky Reviews terms of service outlining website usage, reviews, affiliate relationships, and user responsibilities.",

  keywords:[
    "NorthSky Reviews terms",
    "website terms of service",
    "technology reviews terms",
    "affiliate website terms"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/terms"
  }

};



export default function TermsPage(){


const schema = {

"@context":"https://schema.org",

"@type":"WebPage",

"name":
"NorthSky Reviews Terms of Service",

"description":
"Terms and conditions for using NorthSky Reviews.",

"url":
"https://northsky-reviews.vercel.app/terms"

};



return (

<main className="min-h-screen bg-white text-slate-900">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>







<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-center text-white">


<div className="mx-auto max-w-5xl">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

📄 Website Terms

</span>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Terms of Service

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

The terms and conditions that apply when
using NorthSky Reviews.

</p>


</div>


</section>







<section className="mx-auto max-w-5xl px-6 py-20 space-y-12">





<div>

<h2 className="text-3xl font-black">

Acceptance of Terms

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

By accessing NorthSky Reviews, you agree to
these Terms of Service and our policies.
If you do not agree with these terms, please
do not use our website.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Website Purpose

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews provides technology reviews,
comparisons, rankings, educational content,
and recommendations about software, AI tools,
and digital products.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Our content is intended for informational
purposes only and should not be considered
professional, financial, or purchasing advice.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Reviews & Rankings

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews creates recommendations based
on research, available information, product
features, pricing, usability, performance,
and overall value.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Technology products change frequently.
Features, pricing, availability, and services
may change after publication.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Affiliate Links & Partnerships

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Some links on NorthSky Reviews may be affiliate
links. We may earn commissions when users make
purchases through these links.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Affiliate relationships do not guarantee positive
reviews or rankings. Our opinions remain based
on our editorial evaluation.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Third-Party Websites

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may contain links to external
websites, software providers, and services.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

We are not responsible for third-party content,
availability, pricing, privacy practices, or
terms of external websites.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

User Responsibilities

</h2>


<ul className="mt-5 space-y-3 text-lg text-slate-600">


<li>
✓ Use the website responsibly
</li>


<li>
✓ Do not attempt to disrupt website security
</li>


<li>
✓ Do not misuse website content or services
</li>


<li>
✓ Verify product information before purchasing
</li>


</ul>


</div>







<div>

<h2 className="text-3xl font-black">

Intellectual Property

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

All original content, branding, design elements,
and materials published by NorthSky Reviews are
protected by applicable intellectual property
laws.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Limitation of Liability

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews provides information on an
"as available" basis.

We do not guarantee that all information is
always complete, accurate, current, or error-free.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Changes To These Terms

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

We may update these Terms of Service as the
website grows, new features are added, or
requirements change.

</p>


</div>



</section>







<section className="bg-slate-50 px-6 py-20 text-center">


<div className="mx-auto max-w-4xl">


<h2 className="text-4xl font-black">

Questions About These Terms?

</h2>


<p className="mt-5 text-lg text-slate-600">

If you have questions about our terms,
please contact NorthSky Reviews.

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
