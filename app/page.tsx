import Navbar from "@/components/Navbar";
import HeroNew from "@/components/HeroNew";
import CtaBand from "@/components/CtaBand";
import FooterBar from "@/components/FooterBar";
import GsapTimeline from "@/components/GsapTimeline";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroNew />
        <Education />
        <CtaBand />
      </main>
      <FooterBar />
      <GsapTimeline />
    </>
  );
}
