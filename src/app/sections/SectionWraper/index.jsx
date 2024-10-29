import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./index.scss";

const SectionWraper = () => {
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
    <div ref={ref} className="section-wraper flex items-center">
      {/* left side */}
      <motion.div
        className="section-info"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl w-full flex justify-between gap-4 font-bold text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PARTICIPATION <span>1</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Architecture is a social act.
        </motion.h2>
      </motion.div>

      {/* right side */}
      <motion.div
        className="image-wraper"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="https://cdn.prod.website-files.com/64b9454a98bce9c77375c5d9/65e06543ee7ef8e31a1717f9_ALMA-NAC-ANIMAL-HOSPITAL%20(4)-p-1080.webp"
          alt="Architecture"
        />
      </motion.div>
    </div>
  );
};

export default SectionWraper;
