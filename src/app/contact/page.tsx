"use client";
export const dynamic = "force-dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/contact/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Navbar forceScrolled />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
