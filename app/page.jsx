import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import TrustSection from "@/components/home/TrustSection";
import EditorPicks from "@/components/home/EditorPicks";
import Categories from "@/components/home/Categories";
import AIHub from "@/components/home/AIHub";
import ToolGrid from "@/components/home/ToolGrid";
import Deals from "@/components/home/Deals";
import Comparisons from "@/components/home/Comparisons";
import Guides from "@/components/home/Guides";
import TravelHub from "@/components/home/TravelHub";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";


export const metadata = {

  title:
    "NorthSky Reviews | Best AI Tools, Software & Technology Reviews 2026",

  description:
    "Discover the best AI tools, software, VPNs, laptops, travel technology and digital products. Compare reviews, ratings, features and pricing with NorthSky Reviews.",


  keywords:[

    "best AI tools 2026",
    "AI software reviews",
    "software comparisons",
    "best VPN Canada",
    "best laptops 2026",
    "travel technology",
    "AI productivity tools"

  ],


  alternates:{

    canonical:
    "https://northsky-reviews.vercel.app"

  }

};



export default function HomePage(){


return (

<main className="min-h-screen bg-white text-slate-900">


<Hero />


<Stats />


<TrustSection />


<EditorPicks />


<Categories />


<AIHub />


<ToolGrid />


<Deals />


<Comparisons />


<Guides />


<TravelHub />


<Newsletter />


<Footer />


</main>

);


}