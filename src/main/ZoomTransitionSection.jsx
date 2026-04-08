import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomPanTransitionSection() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;

    // Zoom + Pan Left effect
    gsap.fromTo(
      img,
      { scale: 1, x: 0, y: 0 },
      {
        scale: 3,
        x: -200, // pan left
        y: -100, // slight up
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true, // هنا بنثبت الـ section
          anticipatePin: 1,
        },
      }
    );

    // Floating text animation
    gsap.fromTo(
      section.querySelector(".overlay-text"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
      >
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
          alt="Zoom transition"
          className="absolute object-cover w-full h-full"
        />

        {/* نص floating overlay */}
        <div className="relative z-10 text-center overlay-text">
          <h2 className="mb-4 text-5xl font-bold drop-shadow-lg">
            Journey Begins
          </h2>
          <p className="text-lg text-gray-300">
            Scroll to enter the next world
          </p>
        </div>

        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Section التالي */}
      {/* <section className="flex items-center justify-center h-screen text-white bg-gray-900">
        <h2 className="text-4xl font-bold">Next Section</h2>
      </section> */}
    </>
  );
}
