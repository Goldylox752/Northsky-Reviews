"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GlobalSearch(){

  const router = useRouter();

  const [query,setQuery] = useState("");


  function submit(e){

    e.preventDefault();

    if(!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);

  }


  return (

    <form
      onSubmit={submit}
      className="flex items-center"
    >

      <input

        value={query}

        onChange={(e)=>setQuery(e.target.value)}

        placeholder="Search AI tools, reviews..."

        className="
        w-48
        rounded-l-full
        border
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

  );

}