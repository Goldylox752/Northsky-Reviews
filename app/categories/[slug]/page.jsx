import Link from "next/link";
import { notFound } from "next/navigation";

import {
  categories,
  tools
} from "@/app/data/tools";

import {
  comparisons
} from "@/app/data/comparisons";

import {
  guides
} from "@/app/data/guides";


const siteUrl =
"https://northsky-reviews.vercel.app";





export async function generateStaticParams(){

  return categories.map((category)=>({

    slug: category.slug

  }));

}







export async function generateMetadata({params}){


const {slug} = await params;



const category =
categories.find(
(item)=>item.slug === slug
);





if(!category){

return {

title:
"Category Not Found | NorthSky Reviews"

};

}






return {


title:
`Best ${category.name} Tools 2026 | Reviews & Rankings | NorthSky Reviews`,



description:
`Explore the best ${category.name} tools in 2026. Compare ratings, features, pricing, alternatives and expert recommendations.`,



keywords:[

`best ${category.name} tools`,

`${category.name} reviews`,

`${category.name} software`,

`${category.name} comparison`

],



alternates:{

canonical:
`${siteUrl}/categories/${category.slug}`

},



openGraph:{


title:
`Best ${category.name} Tools 2026`,



description:
`NorthSky Reviews rankings and comparisons for ${category.name} software.`,



url:
`${siteUrl}/categories/${category.slug}`,



siteName:
"NorthSky Reviews",


type:
"website"


}


};


}









export default async function CategoryPage({params}){


const {slug} =
await params;



const category =
categories.find(
(item)=>item.slug === slug
);



if(!category){

notFound();

}






const categoryTools =
tools.filter(

(tool)=>

tool.category?.toLowerCase() ===
category.name.toLowerCase()

);





const categoryGuides =
guides.filter(

(guide)=>

guide.category?.toLowerCase() ===
category.name.toLowerCase()

);





const categoryComparisons =
comparisons.filter(

(item)=>

item.category?.toLowerCase() ===
category.name.toLowerCase()

);





const featuredTools =

[...categoryTools]

.sort(

(a,b)=>

(b.rating || 0) -
(a.rating || 0)

)

.slice(0,6);








const schema = {

"@context":
"https://schema.org",


"@type":
"CollectionPage",



name:
`Best ${category.name} Tools 2026`,



url:
`${siteUrl}/categories/${category.slug}`,



description:
`NorthSky Reviews rankings for ${category.name}.`,



mainEntity:{

"@type":
"ItemList",


itemListElement:

featuredTools.map((tool,index)=>(

{

"@type":
"ListItem",

position:
index + 1,


name:
tool.name,


url:
`${siteUrl}/reviews/${tool.slug}`

}

))


}


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
JSON.stringify(schema)

}}

/>









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
className="hover:text-blue-600"
>

Home

</Link>


<span className="mx-2">

/

</span>



<Link
href="/categories"
className="hover:text-blue-600"
>

Categories

</Link>



<span className="mx-2">

/

</span>



<span>

{category.name}

</span>


</div>










<section className="
mt-8
bg-gradient-to-br
from-slate-950
via-indigo-950
to-blue-900
px-6
py-24
text-white
">


<div className="
mx-auto
max-w-6xl
">



<div className="
text-6xl
">

{category.icon || "🚀"}

</div>




<h1 className="
mt-6
text-5xl
font-black
md:text-7xl
">

Best {category.name} Tools 2026

</h1>




<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

Discover expert reviews,
comparisons, rankings, and
buying guides for the best
{category.name.toLowerCase()}
software.

</p>
          <div className="
        mt-10
        grid
        gap-5
        md:grid-cols-3
        ">


          <div className="
          rounded-3xl
          bg-white/10
          p-6
          backdrop-blur
          ">

            <p className="
            text-4xl
            font-black
            ">

              {categoryTools.length}+

            </p>


            <p className="
            mt-2
            text-slate-300
            ">

              Tools Reviewed

            </p>


          </div>







          <div className="
          rounded-3xl
          bg-white/10
          p-6
          backdrop-blur
          ">


            <p className="
            text-4xl
            font-black
            ">

              2026

            </p>


            <p className="
            mt-2
            text-slate-300
            ">

              Updated Rankings

            </p>


          </div>







          <div className="
          rounded-3xl
          bg-white/10
          p-6
          backdrop-blur
          ">


            <p className="
            text-4xl
            font-black
            ">

              ⭐

            </p>


            <p className="
            mt-2
            text-slate-300
            ">

              Expert Ratings

            </p>


          </div>



        </div>


      </div>


    </section>









{/* FEATURED TOOLS */}



<section className="
mx-auto
max-w-7xl
px-6
py-20
">


<div className="
flex
flex-col
gap-5
md:flex-row
md:items-center
md:justify-between
">


<div>


<h2 className="
text-4xl
font-black
">

Top Rated {category.name} Tools

</h2>



<p className="
mt-3
text-slate-600
">

Our highest-rated tools based on
features, performance, usability,
and overall value.

</p>



</div>






<Link

href="/all-tools"

className="
font-bold
text-blue-600
hover:underline
"

>

View All Tools →

</Link>



</div>








{featuredTools.length === 0 ? (


<div className="
mt-10
rounded-3xl
bg-slate-100
p-10
text-center
">

<h3 className="
text-2xl
font-black
">

More reviews coming soon

</h3>


<p className="
mt-3
text-slate-600
">

NorthSky is currently expanding this
category with new reviews.

</p>


</div>



) : (




<div className="
mt-10
grid
gap-8
md:grid-cols-3
">





{featuredTools.map((tool,index)=>(


<article

key={tool.slug}

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




<div className="
flex
items-center
justify-between
">


<span className="
rounded-full
bg-blue-100
px-3
py-1
text-sm
font-bold
text-blue-700
">

#{index + 1}

</span>




<span className="
font-black
text-green-600
">

⭐ {tool.rating}/10

</span>


</div>








<h3 className="
mt-6
text-2xl
font-black
">

{tool.name}

</h3>






<p className="
mt-4
leading-7
text-slate-600
">

{tool.description}

</p>







<div className="
mt-5
flex
flex-wrap
gap-2
">


{tool.tags?.slice(0,3).map(tag=>(


<span

key={tag}

className="
rounded-full
bg-slate-100
px-3
py-1
text-xs
font-bold
text-slate-600
"

>

#{tag}

</span>


))}



</div>








<div className="
mt-7
grid
grid-cols-2
gap-3
">





<Link

href={`/reviews/${tool.slug}`}

className="
rounded-xl
border
px-4
py-3
text-center
font-bold
hover:bg-slate-50
"

>

Review

</Link>







{tool.link && (


<a

href={tool.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
rounded-xl
bg-blue-600
px-4
py-3
text-center
font-bold
text-white
hover:bg-blue-700
"

>

Visit →

</a>


)}





</div>





</article>



))}





</div>



)}



</section>
{/* BUYING GUIDES */}


{categoryGuides.length > 0 && (

<section className="
bg-slate-50
px-6
py-20
">


<div className="
mx-auto
max-w-7xl
">



<div className="
flex
items-center
justify-between
">

<div>

<h2 className="
text-4xl
font-black
">

Best {category.name} Guides

</h2>



<p className="
mt-3
text-slate-600
">

Learn how to choose the right
{category.name.toLowerCase()} tools
with expert buying guides.

</p>


</div>



<Link

href="/guides"

className="
font-bold
text-blue-600
hover:underline
"

>

View Guides →

</Link>


</div>








<div className="
mt-10
grid
gap-6
md:grid-cols-3
">





{categoryGuides.map((guide)=>(


<Link

key={guide.slug}

href={`/guides/${guide.slug}`}

className="
rounded-3xl
bg-white
p-8
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
"

>




<div className="
text-3xl
">

📚

</div>




<h3 className="
mt-5
text-xl
font-black
">

{guide.title}

</h3>






<p className="
mt-4
text-slate-600
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




</div>



</section>

)}









{/* COMPARISONS */}



{categoryComparisons.length > 0 && (


<section className="
mx-auto
max-w-7xl
px-6
py-20
">


<div className="
flex
flex-col
gap-5
md:flex-row
md:items-center
md:justify-between
">



<div>


<h2 className="
text-4xl
font-black
">

Compare {category.name} Tools

</h2>




<p className="
mt-3
text-slate-600
">

Compare features, pricing,
performance, and alternatives
before choosing.

</p>


</div>





<Link

href="/comparisons"

className="
font-bold
text-blue-600
hover:underline
"

>

All Comparisons →

</Link>




</div>









<div className="
mt-10
grid
gap-6
md:grid-cols-3
">





{categoryComparisons
.slice(0,6)
.map((item)=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

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



<div className="
font-bold
text-blue-600
">

⚖️ Comparison

</div>






<h3 className="
mt-5
text-xl
font-black
">

{item.title}

</h3>






<p className="
mt-3
text-slate-600
">

{item.description}

</p>






<div className="
mt-6
font-bold
text-blue-600
">

Compare Now →

</div>




</Link>



))}





</div>




</section>


)}
  {/* WHY NORTHSKY */}



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

Why Trust NorthSky Reviews?

</h2>





<div className="
mt-10
grid
gap-6
md:grid-cols-4
">





{[

{
title:"Independent Research",
text:"We evaluate tools based on features, usability, pricing, and performance."
},


{
title:"Real Comparisons",
text:"We compare alternatives to help users make better decisions."
},


{
title:"Updated Rankings",
text:"Technology changes constantly, so rankings are refreshed regularly."
},


{
title:"Expert Analysis",
text:"Detailed reviews and guides explain what actually matters."
}


].map(item=>(


<div

key={item.title}

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

{item.title}

</h3>



<p className="
mt-3
text-sm
leading-6
text-slate-600
">

{item.text}

</p>


</div>


))}



</div>



</div>


</section>









{/* CTA */}



<section className="
px-6
py-24
">


<div className="
mx-auto
max-w-5xl
rounded-3xl
bg-gradient-to-r
from-blue-600
to-indigo-600
p-12
text-center
text-white
">





<h2 className="
text-4xl
font-black
">

Find The Best {category.name} Tools

</h2>




<p className="
mx-auto
mt-5
max-w-2xl
text-blue-100
">

Explore expert reviews,
compare solutions, and discover
the right technology for your needs.

</p>







<div className="
mt-8
flex
flex-col
justify-center
gap-4
md:flex-row
">





<Link

href="/all-tools"

className="
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-600
hover:bg-slate-100
"

>

Browse All Tools

</Link>






<Link

href="/newsletter"

className="
rounded-xl
border
border-white/40
px-8
py-4
font-black
hover:bg-white/10
"

>

Join Newsletter

</Link>




</div>





</div>


</section>









{/* FAQ */}



<section className="
mx-auto
max-w-5xl
px-6
pb-20
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

q:
`What are the best ${category.name} tools in 2026?`,

a:
`NorthSky ranks the best ${category.name.toLowerCase()} tools based on features, pricing, usability, performance, and overall value.`

},



{

q:
`How does NorthSky review ${category.name} software?`,

a:
`We analyze product features, pricing, reliability, integrations, and user experience before creating rankings.`

},



{

q:
`Are NorthSky recommendations independent?`,

a:
`Yes. Rankings are based on research and evaluation. Some links may be affiliate links that support the website.`

}


].map(item=>(



<div

key={item.q}

className="
rounded-3xl
border
p-6
"

>


<h3 className="
text-lg
font-black
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



</section>









{/* FAQ SCHEMA */}



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
`What are the best ${category.name} tools in 2026?`,

acceptedAnswer:{

"@type":
"Answer",

text:
`NorthSky ranks the best ${category.name.toLowerCase()} tools based on features, pricing, usability and value.`

}

},



{

"@type":
"Question",

"name":
`How does NorthSky review ${category.name} software?`,

acceptedAnswer:{

"@type":
"Answer",

text:
"NorthSky analyzes features, pricing, performance and user experience."

}

}


]

})

}}

/>









{/* TRANSPARENCY */}



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

NorthSky Transparency

</h3>




<p className="
mt-3
text-sm
text-slate-600
">

NorthSky Reviews creates independent
technology rankings, reviews, and buying
guides. Some links may be affiliate links,
meaning we may earn a commission at no
additional cost to you.

</p>



</div>


</section>







</main>

);

}
