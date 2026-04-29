export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpcomingProjectsPage from "@/components/UpcomingProjectsPage";

export const metadata: Metadata = {
  title: "Upcoming Projects | Dar ul Zahra",
  description: "Support Dar ul Zahra's upcoming projects and equipment needs — help us grow and serve more students.",
};

export default function UpcomingProjects() {
  return (
    <>
      <Navbar forceScrolled />
      <main>
        <UpcomingProjectsPage />
      </main>
      <Footer />
    </>
  );
}
