import Link from "next/link";
import { notFound } from "next/navigation";


const categories = {

  writing: {
    title: "Best AI Writing Tools 2026",
    description:
      "Discover the best AI writing software for blogs, marketing, emails, copywriting, and professional content creation.",

    icon: "✍️",

    tools: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        rating: "9.8/10",
        description:
          "Create articles, emails, ideas, research summaries, and business content with AI."
      },
      {
        name: "Jasper AI",
        slug: "jasper-ai",
        rating: "9.0/10",
        description:
          "AI writing platform designed for marketing teams, brands, and content creators."
      }
    ]
  },


  coding: {
    title: "Best AI Coding Tools 2026",
    description:
      "Compare the best AI coding assistants for developers, programmers, and software teams.",

    icon: "💻",

    tools: [
      {
        name: "GitHub Copilot",
        slug: "github-copilot",
        rating: "9.4/10",
        description:
          "AI programming assistant that helps developers write, debug, and improve code."
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
        rating: "9.8/10",
        description:
          "Useful for programming help, debugging, explanations, and learning."
      }
    ]
  },


  design: {
    title: "Best AI Design Tools 2026",
    description:
      "Explore AI design software for images, graphics, presentations, branding, and creative projects.",

    icon: "🎨",

    tools: [
      {
        name: "Canva AI",
        slug: "canva-ai",
        rating: "9.2/10",
        description:
          "Create graphics, presentations, social media designs, and marketing materials."
      },
      {
        name: "Midjourney",
        slug: "midjourney",
        rating: "9.3/10",
        description:
          "Generate creative AI images and artwork from text prompts."
      }
    ]
  },


  automation: {
    title: "Best AI Automation Tools 2026",
    description:
      "Find AI automation platforms that help businesses save time and improve workflows.",

    icon: "⚙️",

    tools: [
      {
        name: "Zapier AI",
        slug: "zapier-ai",
        rating: "9.1/10",
        description:
          "Automate business workflows by connecting apps with AI."
      },
      {
        name: "Make AI",
        slug: "make-ai",
        rating: "8.9/10",
        description:
          "Build powerful automated workflows for businesses."
      }
    ]
  }

};



export async function generateStaticParams(){

  return Object.keys(categories).map((slug)=>({
    slug
  }));

}



export async function generateMetadata({params}){

  const category = categories[params.slug];


  if(!category){

    return {
      title:"AI Category | NorthSky Reviews"
    };

  }


  return {

    title:
    `${category.title} | NorthSky Reviews`,


    description:
    category.description

  };

}




export default function AIcategoryPage({params}){


  const category = categories[params.slug];


  if(!category){

    notFound();

  }



  return (

    <main className="min-h-screen bg-white text-slate-900">


      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">

        <div className="mx-auto max-w-5xl text-center">


          <div className="text-5xl">
            {category.icon}
          </div>


          <h1 className="mt-6 text-5xl font-black md:text-6xl">

            {category.title}

          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

            {category.description}

          </p>


        </div>

      </section>




      {/* Tools */}

      <section className="mx-auto max-w-7xl px-6 py-20">


        <h2 className="text-center text-4xl font-black">

          Top Recommended Tools

        </h2>



        <div className="mt-12 grid gap-8 md:grid-cols-2">


          {category.tools.map((tool)=>(


            <div

              key={tool.slug}

              className="rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

            >


              <div className="flex justify-between">


                <h3 className="text-3xl font-black">

                  {tool.name}

                </h3>


                <span className="font-bold text-yellow-500">

                  ⭐ {tool.rating}

                </span>


              </div>



              <p className="mt-5 text-slate-600">

                {tool.description}

              </p>



              <Link

                href={`/ai/reviews/${tool.slug}`}

                className="mt-6 inline-block font-bold text-blue-600"

              >

                Read Full Review →

              </Link>


            </div>


          ))}


        </div>


      </section>




      {/* Trust */}

      <section className="bg-slate-50 px-6 py-20">


        <div className="mx-auto max-w-4xl text-center">


          <h2 className="text-4xl font-black">

            How NorthSky Reviews Ranks AI Tools

          </h2>


          <p className="mt-5 text-lg text-slate-600">

            We evaluate AI software based on features, pricing,
            usability, performance, reliability, and real-world
            value for users and businesses.

          </p>


        </div>


      </section>




      <div className="py-12 text-center">

        <Link

          href="/ai"

          className="font-bold text-blue-600"

        >

          ← Back to AI Hub

        </Link>

      </div>


    </main>

  );

}