import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";


const baseUrl =
  "https://northsky-reviews.vercel.app";



export default function sitemap() {


  const lastModified = new Date();



  const pages = [

    {
      url:"",
      frequency:"daily",
      priority:1
    },

    {
      url:"/ai",
      frequency:"daily",
      priority:0.95
    },

    {
      url:"/ai/best-ai-tools-2026",
      frequency:"weekly",
      priority:0.9
    },

    {
      url:"/all-tools",
      frequency:"weekly",
      priority:0.9
    },

    {
      url:"/reviews",
      frequency:"weekly",
      priority:0.8
    },

    {
      url:"/comparisons",
      frequency:"weekly",
      priority:0.8
    },

    {
      url:"/guides",
      frequency:"weekly",
      priority:0.8
    },

    {
      url:"/about",
      frequency:"monthly",
      priority:0.5
    },

    {
      url:"/contact",
      frequency:"monthly",
      priority:0.5
    },

    {
      url:"/affiliate-disclosure",
      frequency:"monthly",
      priority:0.4
    },

    {
      url:"/methodology",
      frequency:"monthly",
      priority:0.6
    }

  ];




  const staticUrls = pages.map(page=>({

    url:`${baseUrl}${page.url}`,

    lastModified,

    changeFrequency:
    page.frequency,

    priority:
    page.priority

  }));






  // AI Reviews

  const aiReviewUrls =
  tools.map(tool=>({

    url:
    `${baseUrl}/ai/reviews/${tool.slug}`,

    lastModified,

    changeFrequency:
    "monthly",

    priority:
    0.8

  }));







  // AI Categories

  const aiCategoryUrls =
  categories.map(category=>({

    url:
    `${baseUrl}/ai/categories/${category.slug}`,

    lastModified,

    changeFrequency:
    "weekly",

    priority:
    0.75

  }));







  // Comparisons

  const comparisonUrls =
  comparisons.map(item=>({

    url:
    `${baseUrl}/comparisons/${item.slug}`,

    lastModified,

    changeFrequency:
    "monthly",

    priority:
    0.8

  }));







  // Guides

  const guideUrls =
  guides.map(guide=>({

    url:
    `${baseUrl}/guides/${guide.slug}`,

    lastModified,

    changeFrequency:
    "weekly",

    priority:
    0.85

  }));







  return [

    ...staticUrls,

    ...aiReviewUrls,

    ...aiCategoryUrls,

    ...comparisonUrls,

    ...guideUrls

  ];

}