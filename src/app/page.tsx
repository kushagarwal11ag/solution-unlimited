"use client";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Services from "@/components/services";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Home />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
