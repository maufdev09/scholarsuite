import { Footer2 } from "@/components/footer2";
import { Hero3 } from "@/components/hero3";
import LandingPageCard from "@/components/LandingPageCard";
import { Navbar1 } from "@/components/navbar1";
import PopularCoursesSection from "@/components/PopularCoursesectio";
import Image from "next/image";
import AboutPage from "./about-us/page";

export default function Home() {
  return (
    <div>
      <Hero3></Hero3>
      <PopularCoursesSection></PopularCoursesSection>
      <AboutPage></AboutPage>
    </div>
  );
}
