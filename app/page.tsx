import ParticleWrapper from "@/components/ParticleWrapper";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutCard from "@/components/AboutCard";
import TechStack from "@/components/TechStack";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <ParticleWrapper />
      <main>
        <Hero />
        <AboutCard />
        <ProjectsGrid />
        <TechStack />
        <ContactFooter />
      </main>
    </>
  );
}
