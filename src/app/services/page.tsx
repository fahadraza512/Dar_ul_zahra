import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the educational services offered by Dar ul Zahra',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl mt-4">Services page content goes here</p>
      </main>
      <Footer />
    </>
  );
}
