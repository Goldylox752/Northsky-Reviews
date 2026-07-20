import type { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {


return {


rules: [

{

userAgent:
"*",

allow:
"/",

}

],


sitemap:
"https://northsky-reviews.vercel.app/sitemap.xml"


};


}