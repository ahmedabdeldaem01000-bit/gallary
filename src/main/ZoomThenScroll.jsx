import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomThenScroll() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = section.querySelector("img");

    gsap.to(img, {
      scale: 1.5,
      x: -100, // لو عايز pan شوية
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true, // هنا بنثبت الـ section لحد نهاية الـ scroll
      },
    });
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
      >
        <img
          src="/assets/gallery1/image1.jpg"
          alt="Zoom Scene"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to the Gallery</h1>
          <p className="mt-4 text-lg">Scroll down to enter the next scene</p>
        </div>
      </section>

      {/* Section التالي */}
      {/* <section className="flex items-center justify-center h-screen text-white bg-gray-900">
        <h2 className="text-4xl font-bold">Next Section</h2>
      </section> */}
    </>
  );
}
