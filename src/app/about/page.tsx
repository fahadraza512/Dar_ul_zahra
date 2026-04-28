export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutFoundation from "@/components/about/AboutFoundation";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutBento from "@/components/about/AboutBento";
import AboutStats from "@/components/about/AboutStats";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutTeamGrid from "@/components/about/AboutTeamGrid";
import AboutCTA from "@/components/about/AboutCTA";
import AboutFooterCTA from "@/components/about/AboutFooterCTA";

export const metadata: Metadata = {
  title: "About Us | Dar ul Zahra",
  description: "Learn about Dar ul Zahra Educational Center — a non-profit charity founded in 2019 in Kot Adu, Punjab, Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar forceScrolled />
      <main>
        <AboutHero />
        <AboutFoundation />
        <AboutMission />
        <AboutStats />
        <AboutValues />
        <AboutBento />
        <AboutTimeline />
        <AboutTeamGrid />
        <AboutCTA />
        <AboutFooterCTA />
      </main>
      <Footer />
    </>
  );
}
