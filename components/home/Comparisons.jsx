import Link from "next/link";
import { comparisons } from "@/app/data/comparisons";


export default function Comparisons(){


const featured =
comparisons.slice(0,6);



return (

<section className="px-6 py-20">


<div className="mx-auto max-w-7xl">



<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">


<div>


<div className="text-sm font-black uppercase tracking-wide text-blue-600">

⚖️ Product Comparisons

</div>


<h2 className="mt-3 text-4xl font-black md:text-5xl">

Compare The Best Technology

</h2>


<p className="mt-4 max-w-3xl text-lg text-slate-600">

Side-by-side comparisons of AI tools, software,
VPNs, laptops and digital products to help you
choose the right option.

</p>


</div>




<Link

href="/comparisons"

className="font-bold text-blue-600 hover:underline"

>

View All Comparisons →

</Link>



</div>







<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


{featured.map((item)=>(


<article

key={item.slug}

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
bg-blue-50
px-3
py-1
text-sm
font-bold
text-blue-700
">

Compare

</span>



<span className="text-xl">

⚔️

</span>


</div>





<h3 className="
mt-6
text-2xl
font-black
">

{item.title}

</h3>





<p className="
mt-4
line-clamp-3
text-slate-600
">

{item.description}

</p>





<div className="
mt-8
rounded-xl
bg-slate-900
px-5
py-3
text-center
font-bold
text-white
">

Compare Features →

</div>





<Link

href={`/comparisons/${item.slug}`}

className="absolute"

aria-label={`Compare ${item.title}`}

/>



</article>


))}



</div>







<div className="
mt-14
rounded-3xl
bg-gradient-to-r
from-blue-600
to-purple-600
p-10
text-center
text-white
">


<h3 className="
text-3xl
font-black
">

Need Help Choosing?

</h3>


<p className="
mx-auto
mt-3
max-w-2xl
text-blue-100
">

Use NorthSky comparisons to evaluate pricing,
features, performance and value before you buy.

</p>



<Link

href="/ai-advisor"

className="
mt-6
inline-block
rounded-xl
bg-white
px-8
py-4
font-bold
text-blue-600
"

>

Ask NorthSky AI →

</Link>


</div>



</div>


</section>

);

}