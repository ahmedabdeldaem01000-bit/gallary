// main/ZoomTransitionSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomTransitionSection({ target }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom top",
        scrub: true,
        onLeave: () => {
          // ✅ عند نهاية السكشن نعمل Scroll للجزء التالي بسلاسة
          const targetEl = document.getElementById(target);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        },
      },
    });

    // تأثير الزوم
    tl.fromTo(
      section,
      { scale: 1, opacity: 1 },
      { scale: 3, opacity: 0, ease: "power2.inOut" }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [target]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
    >
      <img
        src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
        alt="transition"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/50" />
      <h2 className="relative z-10 text-5xl font-bold text-white">
        Moving to Gallery
      </h2>
    </section>
  );
}
