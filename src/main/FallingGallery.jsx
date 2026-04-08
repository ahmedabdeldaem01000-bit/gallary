// src/components/FallingGallery.jsx
import { motion } from "framer-motion";
import image1 from "../../public/gallery2/image1.jpg"
import image2 from "../../public/gallery2/image2.jpg"
import image3 from "../../public/gallery2/image3.jpg"
import image4 from "../../public/gallery2/image4.jpg"
import image5 from "../../public/gallery2/image5.jpg"
import image6 from "../../public/gallery2/image6.jpg"
const images = [
image1,
image2,
image3,
image4,
image5,
image6,
];

const imageVariants = {
  hidden: {
    y: -150,          // تبدأ من فوق
    opacity: 0,
    rotate: -25,      // ميل أولي
    scale: 0.8,
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotate: 0,        // ترجع للوضع الطبيعي
    scale: 1,
    transition: {
      delay: i * 0.2,   // كل صورة تقع بعد الثانية
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  }),
};

export default function FallingGallery() {
  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-wide text-white md:text-5xl">
          Falling Fantasy Gallery
        </h2>
        <p className="text-lg text-gray-400">
          Scroll until halfway to see them fall ✨
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden shadow-xl rounded-2xl"
            custom={i}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // يبدأ لما العنصر يكون في نص الشاشة
          >
            <motion.img
              src={src}
              alt={`Falling Image ${i + 1}`}
              className="w-full h-[250px] object-cover hover:scale-110 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
