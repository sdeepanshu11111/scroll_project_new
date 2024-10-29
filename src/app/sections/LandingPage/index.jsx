import React from "react";
import { motion } from "framer-motion";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landing-page relative w-full h-screen overflow-hidden">
      {/* Curtain Overlay */}
      <motion.div
        className="curtain absolute top-0 left-0 w-full h-full bg-black z-10"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Background Video */}
      <video
        src="https://dl.dropbox.com/scl/fi/23d2a5x65bi9kc0omt63v/240320-Alma-Nac-Homepage-Compilation-Video-1001_compressed.mp4?rlkey=bp3hxj59mzqdq43d76td3bi18&amp;dl=0"
        autoPlay
        muted
        playsInline
        loop
        className="main-header_bg-video-embed absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Text with Staggered Fade-in Effect */}
      <motion.h1
        className="absolute top-1/3 text-[7.5vw] left-2/4 transform -translate-x-2/4 text-white text-5xl flex justify-center items-center z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        Art in Motion and More
      </motion.h1>
    </div>
  );
};

export default LandingPage;
