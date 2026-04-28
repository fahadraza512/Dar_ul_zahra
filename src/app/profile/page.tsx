export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuestProfileCarousel from "@/components/GuestProfileCarousel";

export const metadata: Metadata = {
  title: "Guest Profile | Dar ul Zahra",
  description: "Meet our distinguished guests and supporters.",
};

export default function ProfilePage() {
  return (
    <>
      <Navbar forceScrolled />
      <main className="min-h-screen bg-white">
        <GuestProfileCarousel />
      </main>
      <Footer />
    </>
  );
}
