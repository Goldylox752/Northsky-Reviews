import { NextResponse } from "next/server";
import { tools } from "@/app/data/tools";


export async function GET(request) {


  const { searchParams } =
    new URL(request.url);



  const query =
    searchParams.get("q") || "";



  const category =
    searchParams.get("category") || "";



  let results = [...tools];



  if (query) {


    const search =
      query.toLowerCase();



    results =
      results.filter((tool) =>

        tool.name
          .toLowerCase()
          .includes(search)

        ||

        tool.description
          .toLowerCase()
          .includes(search)

        ||

        tool.category
          .toLowerCase()
          .includes(search)

      );

  }





  if (category) {


    results =
      results.filter(
        (tool) =>
          tool.category === category
      );


  }





  const formatted =
    results.map((tool) => ({

      slug:
        tool.slug,

      name:
        tool.name,

      category:
        tool.category,

      rating:
        tool.rating,

      description:
        tool.description,

      logo:
        tool.logo,

      url:
        `/reviews/${tool.slug}`

    }));





  return NextResponse.json({

    count:
      formatted.length,

    results:
      formatted

  });


}