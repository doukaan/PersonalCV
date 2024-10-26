import React from "react";
import Navbar from "@/Components/Navbar";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
        <div>
            <About />
        </div>
        <div>
            <Skills />
        </div>
        <Footer />

    </div>
  )
}
