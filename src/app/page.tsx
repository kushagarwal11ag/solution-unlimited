"use client";
import Link from "next/link";
import Image from "next/image";
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
      <Link
        href="tel:+919624019466"
        className="fixed bottom-14 right-9 p-4 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-lg transition-colors flex items-center justify-center"
      >
        <i className="fas fa-phone-alt text-2xl"></i>
      </Link>
    </div>
  );
}
