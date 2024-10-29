import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./index.scss";

const SubHeadingSection = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Container animation for sliding effect
  const containerVariants = {
    hidden: { opacity: 0, x: -100 }, // Start slightly to the left
    visible: {
      opacity: 1,
      x: 0, // Slide to original position
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="subHeading flex justify-center items-center text-5xl py-10 px-20 text-white flex-wrap"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants} // Apply sliding animation
    >
      <div className="anim-text-wrapper h-[300px] flex items-center justify-center flex-wrap w-[75vw]">
        AJ Motoarts creates custom electric vehicles, sculptures, and
        collectibles, blending timeless design with modern innovation.
      </div>
    </motion.div>
  );
};

export default SubHeadingSection;
