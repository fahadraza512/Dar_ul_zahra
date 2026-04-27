import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest news and updates from Dar ul Zahra',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl mt-4">Blog page content goes here</p>
      </main>
      <Footer />
    </>
  );
}
