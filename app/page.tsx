import AboutSection from "@/components/home/AboutSection";
import MyStorySection from "@/components/MyStorySection";
import ProjectSection from "@/components/ProjectSection";
import HeroSection from "@/components/sections/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";

export default function Home() {
  return (
    <>
      <section className="h-screen bg-muted-foreground"></section>
      <AboutSection />
      <ProjectSection />
    </>
  );
}
