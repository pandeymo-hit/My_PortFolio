import { ContactSection } from "@/components/portfolio/ContactSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Header } from "@/components/portfolio/Header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { PortfolioCursor } from "@/components/portfolio/PortfolioCursor";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { SocialSection } from "@/components/portfolio/SocialSection";

export default function Home() {
  return (
    <>
      <PortfolioCursor />
      <Header />
      <main className="overflow-hidden bg-[#fbfaf5] text-[#151515]">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <SocialSection />
        <ContactSection />
      </main>
    </>
  );
}
