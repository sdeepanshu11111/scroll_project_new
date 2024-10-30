import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./index.scss";

const SectionWrapper = ({ heading, count, cta, content, subHeading }) => {
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

  return (
    <div
      ref={ref}
      className="section-wrapper w-screen flex flex-col md:flex-row items-center"
    >
      {/* Left side - Text Section */}
      <motion.div
        className="section-info flex flex-col items-center justify-center md:w-3/5 w-full px-4 py-8 md:px-16 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-xl md:text-3xl flex justify-between gap-4 w-full font-bold text-white tracking-wide uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {heading} <span>{count}</span>
        </motion.h1>

        {subHeading && (
          <motion.h2
            className="text-lg md:text-2xl font-bold leading-tight text-white mt-6 md:mt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {content}
          </motion.h2>
        )}
        <motion.h3
          className="text-lg md:text-1xl font-normal leading-tight text-white mt-6 md:mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {content}
        </motion.h3>

        <motion.p
          style={{ height: "40px !important" }}
          className="text-base md:text-2xl font-semibold leading-tight text-white mt-6 md:mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {cta}
        </motion.p>
      </motion.div>

      {/* Right side - Image Section */}
      <motion.div
        className="image-wrapper md:w-2/5 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="https://cdn.prod.website-files.com/64b9454a98bce9c77375c5d9/65e06543ee7ef8e31a1717f9_ALMA-NAC-ANIMAL-HOSPITAL%20(4)-p-1080.webp"
          alt="Architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper;
