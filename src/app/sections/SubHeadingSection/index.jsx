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
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="subHeading bg-coral text-center flex justify-center items-center text-white py-10 px-6 md:px-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="anim-text-wrapper flex flex-wrap justify-center text-[#3a4b13] items-center w-full md:w-3/4 h-[250px] md:h-[300px] text-2xl md:text-5xl font-semibold font-manrope leading-tight md:leading-[80px]">
        AJ Motoarts creates custom electric vehicles, sculptures, and
        collectibles, blending timeless design with modern innovation.
      </div>
    </motion.div>
  );
};

export default SubHeadingSection;
