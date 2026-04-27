export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowToDonate from "@/components/donate/HowToDonate";

export const metadata: Metadata = {
  title: "How To Donate | Dar ul Zahra",
  description: "Learn how to donate to Dar ul Zahra Educational Center and support orphans and needy children in Pakistan.",
};

export default function HowToDonateePage() {
  return (
    <>
      <Navbar forceScrolled />
      <main>
        <HowToDonate />
      </main>
      <Footer />
    </>
  );
}
