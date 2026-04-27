import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutFoundation from "@/components/about/AboutFoundation";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutTeamGrid from "@/components/about/AboutTeamGrid";
import AboutScrollSheet from "@/components/about/AboutScrollSheet";

export const metadata: Metadata = {
  title: "About Us | Dar ul Zahra",
  description: "Learn about Dar ul Zahra Educational Center — a non-profit charity founded in 2019 in Kot Adu, Punjab, Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutScrollSheet>
          <AboutFoundation />
          <AboutTimeline />
          <AboutTeamGrid />
          <Footer />
        </AboutScrollSheet>
      </main>
    </>
  );
}
