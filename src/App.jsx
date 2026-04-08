import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import LandingPage from "./LandingPage";
import ParallaxGallery from "./ParallaxGallery";
import ZoomTransitionSection from "./main/ZoomTransitionSection";
import ZoomTransitionGallary from "./main/ZoomTransitionGallary";
import CinematicGallery from "./main/CinematicGallery";
import GalleryGrid from "./main/GalleryGrid";
import FallingGallery from "./main/FallingGallery";
import ArtistSection from "./main/ArtistSection";
import ZoomThenScroll from "./main/ZoomThenScroll";
import Footer from "./main/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const ref = useRef(null);

  // framer-motion scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3, // أبطأ، حركة أنعم
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <LandingPage />
      <ZoomTransitionSection />
      <ParallaxGallery />
      <ZoomTransitionGallary />

      <div className="space-y-40" ref={ref}>
        <section className="relative flex items-center justify-center h-screen overflow-hidden bg-black">
          <motion.img
            src="https://images.unsplash.com/photo-1473187983305-f615310e7daa"
            alt=""
            style={{ scale, opacity }}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.h2
            style={{ opacity }}
            className="relative z-10 text-6xl font-bold text-white"
          >
            The Story Begins
          </motion.h2>
        </section>

      
      <ArtistSection  />

      </div>

      <GalleryGrid />
      <FallingGallery />
      <ZoomThenScroll />
      <CinematicGallery />
      <Footer />
    </>
  );
}
