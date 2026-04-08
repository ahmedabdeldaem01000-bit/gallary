import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import image from "../../public/mana3.png";
export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen">
      <motion.img
        src={image}
        
        style={{ scale, opacity }}
        className="absolute object-cover w-[20rem]"
      />
      <div className="relative z-10 text-white">About Section Content</div>
    </section>
  );
}
