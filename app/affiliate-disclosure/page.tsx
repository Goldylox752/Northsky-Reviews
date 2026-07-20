import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "Affiliate Disclosure | NorthSky Reviews",

  description:
    "Learn how affiliate partnerships work at NorthSky Reviews and how they support our technology reviews and buying guides.",

};



export default function AffiliateDisclosurePage(){


return (

<main className="bg-white text-slate-900">



<section className="bg-slate-950 px-6 py-24 text-center text-white">


<h1 className="text-5xl font-black">

Affiliate Disclosure

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Transparency about our partnerships and
recommendations.

</p>


</section>







<section className="mx-auto max-w-5xl px-6 py-20 space-y-12">



<div>

<h2 className="text-3xl font-bold">

How Affiliate Links Work

</h2>


<p className="mt-4 text-lg text-slate-600">

Some links on NorthSky Reviews are affiliate
links. This means we may earn a commission
when you click a link and purchase a product
or service.

</p>


<p className="mt-4 text-lg text-slate-600">

The price you pay does not increase because
of these links. Affiliate partnerships help
support our website and allow us to continue
creating free technology reviews and guides.

</p>


</div>







<div>

<h2 className="text-3xl font-bold">

Our Recommendations

</h2>


<p className="mt-4 text-lg text-slate-600">

Affiliate relationships do not determine our
reviews or rankings. We evaluate products
based on features, usability, performance,
security, pricing, and overall value.

</p>


</div>







<div>

<h2 className="text-3xl font-bold">

Partners

</h2>


<p className="mt-4 text-lg text-slate-600">

NorthSky Reviews may participate in affiliate
programs including technology, software,
privacy, travel, and digital service providers.

</p>


<ul className="mt-5 space-y-3 text-lg text-slate-600">


<li>
✓ VPN services
</li>


<li>
✓ Travel eSIM providers
</li>


<li>
✓ Software platforms
</li>


<li>
✓ Technology products
</li>


</ul>


</div>







<div>

<h2 className="text-3xl font-bold">

Editorial Independence

</h2>


<p className="mt-4 text-lg text-slate-600">

Our goal is to provide useful and honest
information. We may recommend products that
we believe provide value, whether or not they
include affiliate partnerships.

</p>


</div>







<div>

<h2 className="text-3xl font-bold">

Questions

</h2>


<p className="mt-4 text-lg text-slate-600">

If you have questions about our affiliate
relationships or review process, please
contact us.

</p>


</div>





</section>


</main>

);

}