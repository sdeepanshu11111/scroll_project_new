"use client";
import React, { useState } from "react";
import MegaScroll from "react-mega-scroll";
import LandingPageCustom from "./sections/LandingPage";
import SubHeadingSection from "./sections/SubHeadingSection";
import SectionWraper from "./sections/SectionWraper";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "60px",
  textAlign: "center",
  color: "white",
};

function App() {
  const [active, setActive] = useState(0);

  return (
    <MegaScroll onChange={setActive}>
      <div className="relative">
        <LandingPageCustom />
      </div>

      <SubHeadingSection />
      <div style={{ ...styles, background: "#333" }}>
        <SectionWraper />
      </div>
      <div style={{ ...styles, background: "#333" }}>
        <SectionWraper />
      </div>
      <div style={{ ...styles, background: "#333" }}>
        <SectionWraper />
      </div>
    </MegaScroll>
  );
}

export default App;
