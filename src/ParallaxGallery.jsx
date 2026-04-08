import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxGallery() {
  useEffect(() => {
    ScrollTrigger.refresh();

    const sections = gsap.utils.toArray(".image-section");

    sections.forEach((section) => {
      const img = section.querySelector("img");
      const text = section.querySelector(".overlay-text");

  gsap.fromTo(
  img,
  { scale: 1, x: 0, y: 0 },
  {
    scale: 3,
    x: -300, 
    y: -50,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 1.2, // يجعل الحركة سلسة
      pin: true,
      anticipatePin: 1,
    },
  }
);

      gsap.to(section, {
        backgroundPositionY: "60%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "center 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    });

    return () => ScrollTrigger.killAll();
  }, []);
const galleries = ['gallery1'];
const sections = [];

galleries.forEach((gallery, gIndex) => {
  for (let i = 1; i <= 10; i++) {
    sections.push({
      src: `/${gallery}/image${i}.jpg`,
      title: `Gallery ${gIndex + 1} - Image ${i}`,
      bg: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))`,
    });
  }
});

  return (
    <div className="text-white bg-black">
      {sections.map((item, i) => (
        <section
          key={i}
          className="relative flex items-center justify-center h-screen overflow-hidden image-section"
          style={{
            backgroundImage: `${item.bg}, url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <img
            src={item.src}
            alt=""
            className="absolute object-cover w-full h-full opacity-70"
          />

          <div className="relative z-10 text-center overlay-text">
            <h2 className="mb-3 text-4xl font-bold md:text-6xl">{item.title}</h2>
            <p className="max-w-lg mx-auto text-lg text-gray-200">
            new commit to test the parallax effect with the new images and see how it enhances the visual experience of the gallery.
            </p>
          </div>

          <div className="absolute inset-0 bg-black/40"></div>
        </section>
      ))}
    </div>
  );
}
