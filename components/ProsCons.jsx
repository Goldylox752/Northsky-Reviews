"use client";


export default function ProsCons({

pros = [],

cons = []

}) {



return (

<div className="
grid
gap-6
md:grid-cols-2
">






{/* PROS */}

<div className="
rounded-3xl
border
border-green-200
bg-green-50
p-8
">


<div className="
flex
items-center
gap-3
">

<div className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-green-600
text-xl
text-white
">

✓

</div>


<h3 className="
text-2xl
font-black
text-green-800
">

Pros

</h3>


</div>





<ul className="
mt-6
space-y-4
">

{pros.length > 0 ? (

pros.map((item,index)=>(


<li

key={index}

className="
flex
gap-3
text-slate-700
"

>

<span className="
font-black
text-green-600
">

✓

</span>


<span>

{item}

</span>


</li>


))


) : (

<li className="
text-slate-500
">

No advantages listed.

</li>

)}


</ul>



</div>








{/* CONS */}



<div className="
rounded-3xl
border
border-red-200
bg-red-50
p-8
">


<div className="
flex
items-center
gap-3
">


<div className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-red-600
text-xl
text-white
">

−

</div>



<h3 className="
text-2xl
font-black
text-red-800
">

Cons

</h3>



</div>







<ul className="
mt-6
space-y-4
">


{cons.length > 0 ? (


cons.map((item,index)=>(


<li

key={index}

className="
flex
gap-3
text-slate-700
"

>


<span className="
font-black
text-red-600
">

✕


</span>


<span>

{item}

</span>


</li>


))


) : (

<li className="
text-slate-500
">

No disadvantages listed.

</li>

)}


</ul>



</div>







</div>


);

}
