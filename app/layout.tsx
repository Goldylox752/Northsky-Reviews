import Link from "next/link";
import Script from "next/script";
import "./globals.css";


const siteUrl = "https://northsky-reviews.vercel.app";



export const metadata = {

  metadataBase: new URL(siteUrl),

  title:
    "NorthSky Reviews | Best VPNs, AI Tools, Travel Tech & Buying Guides",

  description:
    "Independent technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, cybersecurity, and gadgets.",


  keywords:[
    "VPN reviews",
    "NordVPN review",
    "Saily eSIM review",
    "best VPN Canada",
    "AI tools",
    "technology reviews",
    "software comparisons",
    "travel technology",
    "cybersecurity tools",
    "buying guides"
  ],


  authors:[
    {
      name:"NorthSky Reviews"
    }
  ],


  openGraph:{

    title:"NorthSky Reviews | Smart Technology Recommendations",

    description:
      "Expert reviews and comparisons for VPNs, AI tools, travel technology, software, and digital products.",

    url:siteUrl,

    siteName:"NorthSky Reviews",

    type:"website",

    images:[
      {
        url:"/opengraph-image.png",
        width:1200,
        height:630,
        alt:"NorthSky Reviews Technology Guides"
      }
    ]

  },


  twitter:{

    card:"summary_large_image",

    title:"NorthSky Reviews | Best Tech Recommendations",

    description:
      "Independent technology reviews, comparisons, and buying guides.",

    images:[
      "/opengraph-image.png"
    ]

  },


  robots:{
    index:true,
    follow:true
  }

};





export default function RootLayout({children}) {


return (

<html lang="en">


<body className="bg-white text-slate-900 antialiased">



<Script
src="https://www.googletagmanager.com/gtag/js?id=G-528699336"
strategy="afterInteractive"
/>



<Script
id="google-analytics"
strategy="afterInteractive"
>

{`

window.dataLayer = window.dataLayer || [];

function gtag(){
window.dataLayer.push(arguments);
}


gtag("js", new Date());


gtag(
"config",
"G-528699336"
);

`}

</Script>






<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify([

{

"@context":"https://schema.org",

"@type":"Organization",

"name":"NorthSky Reviews",

"url":siteUrl,

"description":
"Independent technology reviews, comparisons, and buying guides."

},


{

"@context":"https://schema.org",

"@type":"WebSite",

"name":"NorthSky Reviews",

"url":siteUrl

}

])

}}

/>







<header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">


<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


<Link
href="/"
className="text-2xl font-black"
>

NorthSky

<span className="text-blue-600">
Reviews
</span>


</Link>



<div className="hidden gap-8 text-sm font-semibold md:flex">


<Link href="/">
Home
</Link>


<Link href="/reviews">
Reviews
</Link>


<Link href="/categories">
Categories
</Link>


<Link href="/comparisons">
Comparisons
</Link>


<Link href="/deals">
Deals
</Link>


</div>


</nav>


</header>







{children}








<footer className="mt-20 border-t bg-slate-50">


<div className="mx-auto max-w-7xl px-6 py-12">


<div className="grid gap-10 md:grid-cols-4">



<div>

<h3 className="text-xl font-black">

NorthSky

<span className="text-blue-600">
Reviews
</span>

</h3>


<p className="mt-4 text-sm text-slate-600">

Independent reviews,
comparisons, and buying guides
helping you make smarter
technology decisions.

</p>


</div>





<div>

<h4 className="font-bold">
Explore
</h4>


<div className="mt-4 flex flex-col gap-3 text-sm">


<Link href="/reviews">
Reviews
</Link>

<Link href="/categories">
Categories
</Link>

<Link href="/comparisons">
Comparisons
</Link>

<Link href="/deals">
Deals
</Link>


</div>


</div>






<div>

<h4 className="font-bold">
Legal
</h4>


<div className="mt-4 flex flex-col gap-3 text-sm">


<Link href="/privacy-policy">
Privacy Policy
</Link>


<Link href="/affiliate-disclosure">
Affiliate Disclosure
</Link>


<Link href="/contact">
Contact
</Link>


</div>


</div>







<div>

<h4 className="font-bold">
Affiliate Disclosure
</h4>


<p className="mt-4 text-sm text-slate-600">

Some links on NorthSky Reviews
are affiliate links. We may earn
a commission at no additional cost
to you.

</p>


</div>


</div>





<div className="mt-10 border-t pt-6 text-center text-sm text-slate-500">


© {new Date().getFullYear()} NorthSky Reviews.
All rights reserved.


</div>



</div>


</footer>




</body>

</html>

);

}