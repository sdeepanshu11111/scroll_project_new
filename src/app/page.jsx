"use client";
import React, { useState } from "react";

import Nav from "./Nav";
import MegaScroll from "react-mega-scroll";
import LandingPageCustom from "./sections/LandingPage";
import SubHeadingSection from "./sections/SubHeadingSection";
import SectionWraper from "./sections/SectionWraper";

function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Nav />
      <MegaScroll onChange={setActive}>
        <div>
          <LandingPageCustom />
        </div>

        <SubHeadingSection />

        <div style={{ background: "#fff" }}>
          <SectionWraper
            heading="Introduction"
            count={1}
            cta={
              <p className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12">
                <button className="bg-coral flex items-center justify-center text-white px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl hover:text-[#fff] transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Discover Our Craft
                </button>
                <button className="bg-transparent  flex items-center justify-center border border-coral px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-lg font-semibold text-coral shadow-lg hover:bg-coral hover:text-[#212121] hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Get in Touch for Custom Builds
                </button>
              </p>
            }
            content="At AJ Motoarts, craftsmanship meets artistry. Founded by Kanwardeep and Anhad Jaura, our family workshop in Saharanpur brings together generations of skill and a passion for unique, handcrafted designs. From electric replicas of vintage cars to sculptural art, each piece is crafted with precision and heart"
          />
        </div>

        <div style={{ background: "#fff" }}>
          <SectionWraper
            heading="About Us"
            subHeading="Crafted with Passion, Driven by Legacy"
            count={2}
            cta={
              <p className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12">
                <button className="bg-coral flex items-center justify-center text-white px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-lg font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl hover:text-[#fff] transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Discover Our Craft
                </button>
                <button className="bg-transparent  flex items-center justify-center border border-coral px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-lg font-semibold text-coral shadow-lg hover:bg-coral hover:text-[#212121] hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Get in Touch for Custom Builds
                </button>
              </p>
            }
            content="At AJ Motoarts, craftsmanship meets artistry. Founded by Kanwardeep and Anhad Jaura, our family workshop in Saharanpur brings together generations of skill and a passion for unique, handcrafted designs. From electric replicas of vintage cars to sculptural art, each piece is crafted with precision and heart"
          />
        </div>
      </MegaScroll>
    </>
  );
}

export default App;
