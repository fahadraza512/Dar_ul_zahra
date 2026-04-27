export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "More | Dar ul Zahra",
  description: "More from Dar ul Zahra Educational Center.",
};

export default function MorePage() {
  return (
    <>
      <Navbar forceScrolled />
      <main className="min-h-screen bg-white pt-28 px-6 lg:px-24 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">More</span>
          </div>
          <h1 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-6xl tracking-tighter mb-4">
            More.
          </h1>
          <p className="text-[#5e6d82] text-lg font-light max-w-xl">
            Content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
