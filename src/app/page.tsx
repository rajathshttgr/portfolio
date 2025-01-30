"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/navbar";
import About from "../components/about";
import Project from "../components/projects";
import Games from "../components/games";
import Footer from "../components/footer";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="games">
        <Games />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
