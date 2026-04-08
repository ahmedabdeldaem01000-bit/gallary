import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import image1 from   "../public/gallery1/image1.jpg"
import image2 from   "../public/gallery1/image2.jpg"
// import image3 from   "../public/gallery1/image3.jpg"
import image4 from   "../public/gallery1/image4.jpg"
// import image5 from   "../public/gallery1/image5.jpg"
import image6 from   "../public/gallery1/image6.jpg"
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    // ✅ تهيئة Lenis
    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ إعداد GSAP ScrollTrigger
    const sections = gsap.utils.toArray(".hero-section");

    sections.forEach((section) => {
      const image = section.querySelector("img");
      const text = section.querySelector(".hero-text");

      // حركة الصورة (Zoom Out + Parallax)
      gsap.fromTo(
        image,
        { scale: 1.2, y: 100 },
        {
          scale: 1,
          y: -100,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // ظهور النص تدريجيًا
      gsap.fromTo(
        text,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "center bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);
 
  const slides = [
    {
      title: "Moments in Motion",
      subtitle: "Photography that tells a story.",
      // src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      src: image2,
    },
    {
      title: "Urban Life",
      subtitle: "Capturing the energy of the city.",
      src: image1,
    },
    {
      title: "Nature Wonders",
      subtitle: "Feel the calm of untouched landscapes.",
      src: image4,
    },
    {
      title: "Timeless Portraits",
      subtitle: "Faces, emotions, and stories frozen in time.",
      src:  image6,
    },
  ];

return (
  <div
    ref={containerRef}
    className="overflow-hidden text-white bg-black lenis"
  >
    {/* Hero Sections */}
    {slides.map((slide, i) => (
      <section
        key={i}
        className="relative flex flex-col items-center justify-center h-screen overflow-hidden hero-section"
      >
        <img
          src={slide.src}
          alt={slide.title}
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 text-center hero-text">
          <h1 className="mb-4 text-5xl font-bold md:text-7xl drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-200 md:text-2xl">
            {slide.subtitle}
          </p>
        </div>
      </section>
    ))}
  </div>
);

}
