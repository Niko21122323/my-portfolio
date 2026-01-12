import AboutSection from "@/components/home/AboutSection";
import MyStorySection from "@/components/MyStorySection";
import ProjectSection from "@/components/ProjectSection";
import WhatIDoSection from "@/components/WhatIDoSection";

export default function Home() {
  return (
    <>
      <section className="bg-foreground h-screen"></section>
      <AboutSection />
      <ProjectSection />
      <WhatIDoSection />
      <MyStorySection />
    </>
  );
}
