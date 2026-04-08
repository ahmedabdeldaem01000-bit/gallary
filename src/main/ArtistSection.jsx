// ArtistSection.jsx
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import artist from "/public/mana3.png";

export default function ArtistSection({ scale, opacity }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="flex flex-col w-full h-screen overflow-hidden md:flex-row"
    >
      {/* Left (black) side with text */}
      <motion.div
        className="flex items-center justify-center flex-1 px-10 text-center text-white bg-black"
        variants={{
          hidden: { opacity: 0, filter: "blur(6px)" },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <div>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">Mena</h1>
          <p className="max-w-md mx-auto text-lg leading-relaxed text-gray-300 md:text-xl">
            Mena is an artist who paints with emotion, depth, and soul.  
            Her work speaks quietly yet powerfully, blending light and shadow  
            into a world where feeling becomes color.
          </p>
        </div>
      </motion.div>

      {/* Right (white) side with image */}
      <motion.div
        className="flex items-center justify-center flex-1 bg-white"
        variants={{
          hidden: { opacity: 0, filter: "blur(6px)" },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <img
          src={artist} // 👈 استبدل ده بمسار الصورة اللي رفعتها
          alt="Mena Artwork"
          className="max-w-[80%] md:max-w-[70%] rounded-2xl shadow-lg transition-transform duration-700 hover:scale-105"
        />
      </motion.div>
    </section>
  );
}
