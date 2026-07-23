"use client";

import { useState, useEffect } from "react";
import Link from "next/link";



export default function SearchBar() {


const [query,setQuery] =
useState("");

const [results,setResults] =
useState({
tools:[],
guides:[],
comparisons:[]
});


const [open,setOpen] =
useState(false);


const [loading,setLoading] =
useState(false);






useEffect(()=>{


if(!query.trim()){


setResults({
tools:[],
guides:[],
comparisons:[]
});


setOpen(false);


return;


}





const timer =
setTimeout(async()=>{


try{


setLoading(true);



const res =
await fetch(
`/api/search?q=${encodeURIComponent(query)}`
);



const data =
await res.json();



setResults(

data.results || {
tools:[],
guides:[],
comparisons:[]
}

);



setOpen(true);



}

catch(error){


console.error(
"Search error:",
error
);


}



finally{


setLoading(false);


}



},300);






return ()=>clearTimeout(timer);



},[query]);









return (

<div className="
relative
w-full
max-w-md
">





<form action="/search">


<input


name="q"


value={query}


onChange={(e)=>
setQuery(e.target.value)
}


onFocus={()=>{

if(query)
setOpen(true);

}}



placeholder="
Search AI tools, VPNs, software...
"



className="
w-full
rounded-xl
border
px-5
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>



</form>









{open && (

<div className="
absolute
z-50
mt-2
w-full
overflow-hidden
rounded-2xl
border
bg-white
shadow-xl
">







{loading && (

<div className="
p-5
text-slate-500
">

Searching...

</div>

)}









{/* TOOLS */}


{!loading &&
results.tools?.length > 0 && (

<div className="
border-b
">


<div className="
px-4
pt-4
text-xs
font-black
uppercase
text-slate-400
">

Tools

</div>



{results.tools.slice(0,5).map((tool)=>(


<Link


key={tool.slug}


href={tool.url}


onClick={()=>
setOpen(false)
}



className="
flex
items-center
gap-4
p-4
hover:bg-slate-50
"



>





<img

src={tool.logo}

alt={tool.name}

className="
h-10
w-10
rounded-lg
object-contain
"

/>





<div>


<h3 className="
font-bold
">

{tool.name}

</h3>



<p className="
text-sm
text-slate-500
">

{tool.category}

 · ⭐ {tool.rating}

</p>



</div>



</Link>


))}



</div>


)}









{/* GUIDES */}



{!loading &&
results.guides?.length > 0 && (


<div className="
border-b
">


<div className="
px-4
pt-4
text-xs
font-black
uppercase
text-slate-400
">

Guides

</div>



{results.guides.slice(0,3).map((guide)=>(


<Link

key={guide.slug}

href={guide.url}

onClick={()=>
setOpen(false)
}


className="
block
p-4
hover:bg-slate-50
"

>


<h3 className="
font-bold
">

{guide.title}

</h3>


<p className="
text-sm
text-slate-500
">

{guide.category}

</p>



</Link>


))}



</div>


)}









{/* COMPARISONS */}



{!loading &&
results.comparisons?.length > 0 && (


<div>


<div className="
px-4
pt-4
text-xs
font-black
uppercase
text-slate-400
">

Comparisons

</div>



{results.comparisons.slice(0,3).map((item)=>(


<Link


key={item.slug}


href={item.url}


onClick={()=>
setOpen(false)
}


className="
block
p-4
hover:bg-slate-50
"

>


<h3 className="
font-bold
">

{item.title}

</h3>



</Link>


))}



</div>


)}









{!loading &&

results.tools.length === 0 &&

results.guides.length === 0 &&

results.comparisons.length === 0 && (


<div className="
p-5
text-slate-500
">

No results found

</div>


)}







</div>


)}






</div>


);


}
