"use client";

export default function ErrorPage({
  error,
  reset
}){

  return (

    <main className="flex min-h-screen items-center justify-center bg-white px-6">

      <div className="max-w-lg text-center">


        <div className="text-6xl">
          ⚠️
        </div>


        <h1 className="mt-6 text-4xl font-black text-slate-900">

          Something Went Wrong

        </h1>


        <p className="mt-4 text-slate-600">

          We couldn’t load this NorthSky Reviews page.
          Please try again.

        </p>


        <button

          onClick={() => reset()}

          className="
          mt-8
          rounded-xl
          bg-blue-600
          px-8
          py-4
          font-bold
          text-white
          hover:bg-blue-700
          "

        >

          Try Again

        </button>


      </div>

    </main>

  );

}