import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutPreview from "@/components/home/AboutPreview";
import Industries from "@/components/home/Industries";
import HomeProjects from "@/components/home/HomeProjects";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <Industries />
      <HomeProjects />
      <Testimonials />
      <CTA />
    </>
  );
}
