import Link from "next/link";


const aiSections = [

{
icon:"🤖",
title:"AI Assistants",
description:
"Compare the best AI chatbots and assistants for writing, research, coding and productivity.",
link:"/categories/ai"
},


{
icon:"✍️",
title:"AI Writing Tools",
description:
"Find AI writing software for blogs, marketing, emails and professional content.",
link:"/guides/best-ai-writing-tools"
},


{
icon:"💼",
title:"AI For Business",
description:
"Discover AI platforms that automate workflows and improve business productivity.",
link:"/guides/best-ai-tools-business-2026"
},


{
icon:"💻",
title:"AI Coding Tools",
description:
"Explore AI programming assistants that help developers build faster.",
link:"/search?q=ai-coding"
},


{
icon:"🎨",
title:"AI Design Tools",
description:
"Create images, graphics and creative content with powerful AI platforms.",
link:"/search?q=ai-design"
},


{
icon:"⚡",
title:"AI Automation",
description:
"Compare AI agents and automation tools that save time and streamline tasks.",
link:"/search?q=ai-automation"
}

];



export default function AIHub(){


return (

<section className="
bg-gradient-to-br
from-indigo-50
via-white
to-blue-50
px-6
py-20
">


<div className="
mx-auto
max-w-6xl
">





<div className="
flex
flex-col
items-center
justify-between
gap-5
text-center
md:flex-row
md:text-left
">



<div>


<div className="
text-5xl
">

🤖

</div>



<h2 className="
mt-4
text-4xl
font-black
md:text-5xl
">

NorthSky AI Hub

</h2>



<p className="
mt-4
max-w-2xl
text-slate-600
">

Explore the latest AI tools, assistants,
automation platforms and productivity software.
Find the right AI technology for work, business,
and creativity.

</p>


</div>






<Link

href="/all-tools"

className="
rounded-xl
bg-blue-600
px-7
py-4
font-black
text-white
hover:bg-blue-700
"

>

Explore All AI Tools →

</Link>





</div>









<div className="
mt-12
grid
gap-6
md:grid-cols-3
">



{aiSections.map((item)=>(


<Link

key={item.title}

href={item.link}

className="
group
rounded-3xl
border
bg-white
p-7
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<div className="
text-4xl
">

{item.icon}

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
mt-5
font-bold
text-blue-600
group-hover:underline
">

View AI Tools →

</div>




</Link>


))}


</div>






<div className="
mt-12
rounded-3xl
bg-slate-950
p-10
text-center
text-white
">


<h3 className="
text-3xl
font-black
">

Find The Right AI Tool Faster

</h3>



<p className="
mx-auto
mt-3
max-w-2xl
text-slate-300
">

Compare features, pricing, ratings and
alternatives before choosing your next AI platform.

</p>




<Link

href="/comparisons"

className="
mt-6
inline-block
rounded-xl
bg-blue-600
px-8
py-4
font-black
"

>

Compare AI Tools →

</Link>



</div>






</div>


</section>

);


}