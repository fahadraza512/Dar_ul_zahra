import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacilitiesPage from "@/components/facilities/FacilitiesPage";

export const metadata: Metadata = {
  title: "Facilities | Dar ul Zahra",
  description: "Explore the facilities at Dar ul Zahra Educational Center — classrooms, accommodation, meals, and more.",
};

export default function Facilities() {
  return (
    <>
      <Navbar forceScrolled />
      <main>
        <FacilitiesPage />
      </main>
      <Footer />
    </>
  );
}
