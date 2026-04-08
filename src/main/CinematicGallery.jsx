import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";
const images = import.meta.glob('../../public/gallery3/*.jpg', { eager: true });

 gsap.registerPlugin(ScrollTrigger);

 
const sections = Object.values(images).map((img, index) => ({
  src: img.default,
  title: `Gallery 1 - Image ${index + 1}`,
  bg: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))`,
}));

// console.log("aaaaaaaaa",images)
export default function ScrollAnimationsGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".gallery-item");

    items.forEach((item, index) => {
      // Random small offsets for 'organized chaos'
      const x = gsap.utils.random(-40, 40);
      const y = gsap.utils.random(-40, 40);
      const rotate = gsap.utils.random(-6, 6);
      const scale = gsap.utils.random(0.9, 1.05);

      gsap.set(item, { x, y, rotate, scale, opacity: 0 });

      // Animate in on scroll
      gsap.to(item, {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      // Parallax subtle
      gsap.to(item, {
        y: "+=30",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8 + index * 0.05,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen px-6 py-32 bg-gradient-to-b from-black via-[#0a0a0f] to-[#020202] overflow-hidden"
    >
      <h2 className="mb-16 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 drop-shadow-lg">
        Fantasy Cinematic Grid
      </h2>

      <div className="relative flex flex-wrap justify-center w-full gap-6">
        {sections.map((src, i) => (
          <div
            key={i}
            className="gallery-item relative w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-110 hover:rotate-1"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <span className="absolute text-lg font-medium bottom-5 left-5 text-white/90">
              Dreamscape #{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
