export const dynamic = "force-dynamic";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DualActionCards from "@/components/DualActionCards";
import ImageCollageSection from "@/components/ImageCollageSection";
import DocumentarySection from "@/components/DocumentarySection";
import LegacySection from "@/components/LegacySection";
import ScholarshipPrograms from "@/components/ScholarshipPrograms";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DualActionCards />
        <ImageCollageSection />
        <DocumentarySection />
        <StatsSection />
        <ProgramsSection />
        <LegacySection />
        <AboutSection />
        <ScholarshipPrograms />
        <ImpactSection />
        <WhyUsSection />
        <TeamSection />
        <PartnersSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
