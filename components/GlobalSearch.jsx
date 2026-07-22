"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function GlobalSearch(){

  const router = useRouter();

  const [query,setQuery] = useState("");

  const [results,setResults] = useState([]);

  const [loading,setLoading] = useState(false);

  const [open,setOpen] = useState(false);



  useEffect(()=>{


    if(query.trim().length < 2){

      setResults([]);

      setOpen(false);

      return;

    }



    const timer = setTimeout(async()=>{


      try{


        setLoading(true);


        const res =
          await fetch(
            `/api/search?q=${encodeURIComponent(query)}`
          );


        const data =
          await res.json();



        setResults(
          data.results?.slice(0,5) || []
        );


        setOpen(true);



      }catch(error){

        console.error(error);

      }


      finally{

        setLoading(false);

      }


    },300);



    return ()=>clearTimeout(timer);


  },[query]);






  function submit(e){

    e.preventDefault();


    if(!query.trim())
      return;


    router.push(
      `/search?q=${encodeURIComponent(query)}`
    );


    setOpen(false);

  }






  return (

    <div className="relative">


      <form
        onSubmit={submit}
        className="flex items-center"
      >


        <input

          value={query}

          onChange={(e)=>setQuery(e.target.value)}

          onFocus={()=>{
            if(results.length)
              setOpen(true);
          }}

          placeholder="Search AI tools, reviews..."

          className="
          w-48
          rounded-l-full
          border
          border-slate-200
          px-4
          py-2
          text-sm
          outline-none
          focus:border-blue-600
          md:w-64
          "

        />



        <button

          type="submit"

          className="
          rounded-r-full
          bg-blue-600
          px-4
          py-2
          text-sm
          font-bold
          text-white
          hover:bg-blue-700
          "

        >

          🔍

        </button>


      </form>






      {open && (

        <div className="
        absolute
        right-0
        mt-3
        w-80
        overflow-hidden
        rounded-2xl
        border
        bg-white
        shadow-xl
        z-50
        ">


          {loading && (

            <div className="p-4 text-sm text-slate-500">

              Searching...

            </div>

          )}





          {!loading && results.length === 0 && (

            <div className="p-4 text-sm text-slate-500">

              No results found

            </div>

          )}






          {results.map((tool)=>(


            <button

              key={tool.slug}

              onClick={()=>{

                router.push(tool.url);

                setOpen(false);

              }}

              className="
              block
              w-full
              border-b
              p-4
              text-left
              hover:bg-slate-50
              "

            >


              <div className="font-bold">

                {tool.name}

              </div>


              <div className="text-xs text-slate-500">

                {tool.category}
                {" "}
                ⭐ {tool.rating}

              </div>


            </button>


          ))}



        </div>

      )}



    </div>

  );

}