import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryPage from "@/components/gallery/GalleryPage";
import GalleryScrollSheet from "@/components/gallery/GalleryScrollSheet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Dar ul Zahra",
  description: "Photos and videos from Dar ul Zahra Educational Center.",
};

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main>
        {/* Fixed hero */}
        <GalleryHero />
        {/* Spacer */}
        <div style={{ height: "100vh" }} />
        {/* Scrollable sheet slides over hero */}
        <GalleryScrollSheet>
          <GalleryPage />
          <Footer />
        </GalleryScrollSheet>
      </main>
    </>
  );
}
