// src/components/GalleryGrid.jsx
import { motion } from "framer-motion";

const images = [
  "/gallery1/image1.jpg",
  "/public/gallery1/image2.jpg",
  "/public/gallery1/image3.jpg",
  "/public/gallery1/image4.jpg",
  "/public/gallery1/image5.jpg",
  "/public/gallery1/image6.jpg",
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function GalleryGrid() {
  return (
    <section
      id="gallery"
      className="relative min-h-screen px-6 py-32 bg-gradient-to-b from-black via-[#0a0a0f] to-[#020202] overflow-hidden"
    >
      {/* إضاءة خلفية خفيفة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 drop-shadow-lg"
        >
          Fantasy Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-gray-400"
        >
          A magical visual experience — scroll down to reveal the art ✨
        </motion.p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.1)] group"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />

              {/* طبقة Glow على الصورة */}
              <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 group-hover:opacity-100"></div>

              {/* عنوان خيالي بسيط فوق الصورة */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute text-lg font-medium tracking-wide bottom-5 left-5 text-white/90"
              >
                Dreamscape #{index + 1}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
