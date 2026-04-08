// src/components/LandingGrid.jsx
import { motion } from "framer-motion";
import image1 from "../../public/gallery1/image1.jpg"
import image2 from "../../public/gallery1/image2.jpg"
import image3 from "../../public/gallery1/image3.jpg"
import image4 from "../../public/gallery1/image4.jpg"
import image5 from "../../public/gallery1/image5.jpg"
import image6 from "../../public/gallery1/image6.jpg"
import image7 from "../../public/gallery1/image7.jpg"
import image8 from "../../public/gallery1/image8.jpg"
import image9 from "../../public/gallery1/image9.jpg"
import image10 from "../../public/gallery1/image10.jpg"
const images = [
 image1,
 image2,
 image3,
 image4,
 image5,
 image6,
 image7,
 image8,
 image9,
 image10,

];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function LandingGrid() {
  return (
    <section className="min-h-screen px-6 py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Discover Stunning Visuals
        </h1>
        <p className="text-gray-400">
          Scroll down to explore a grid of smooth-animated images
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden shadow-lg rounded-2xl"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={src}
              alt={`Grid image ${index + 1}`}
              className="object-cover w-full transition-transform duration-500 h-72 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
