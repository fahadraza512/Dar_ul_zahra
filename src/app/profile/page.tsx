export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCarousel from "@/components/ProfileCarousel";

export const metadata: Metadata = {
  title: "Our Team | Dar ul Zahra",
  description: "Meet the team behind Dar ul Zahra Educational Center.",
};

export default function ProfilePage() {
  return (
    <>
      <Navbar forceScrolled />
      <main className="min-h-screen bg-white pt-24">
        <ProfileCarousel />
      </main>
      <Footer />
    </>
  );
}
