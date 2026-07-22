import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">

      <div className="max-w-xl text-center">

        <div className="text-8xl font-black text-blue-600">
          404
        </div>

        <h1 className="mt-6 text-4xl font-black text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          Sorry, the page you are looking for does not exist,
          has been moved, or is no longer available.
        </p>


        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="
            rounded-xl
            bg-blue-600
            px-8
            py-4
            font-bold
            text-white
            hover:bg-blue-700
            "
          >
            Back Home
          </Link>


          <Link
            href="/ai"
            className="
            rounded-xl
            border
            border-slate-300
            px-8
            py-4
            font-bold
            text-slate-900
            hover:bg-slate-50
            "
          >
            Explore AI Tools
          </Link>


          <Link
            href="/search"
            className="
            rounded-xl
            border
            border-slate-300
            px-8
            py-4
            font-bold
            text-slate-900
            hover:bg-slate-50
            "
          >
            Search Reviews
          </Link>

        </div>


        <div className="mt-12 rounded-3xl bg-slate-50 p-8">

          <h2 className="text-xl font-black">
            Popular NorthSky Reviews
          </h2>

          <div className="mt-5 space-y-3 text-blue-600 font-bold">

            <Link href="/ai">
              🤖 AI Tools
            </Link>

            <br />

            <Link href="/comparisons">
              ⚖️ AI Comparisons
            </Link>

            <br />

            <Link href="/reviews">
              ⭐ Software Reviews
            </Link>

            <br />

            <Link href="/guides">
              📚 Technology Guides
            </Link>

          </div>

        </div>


      </div>

    </main>
  );
}