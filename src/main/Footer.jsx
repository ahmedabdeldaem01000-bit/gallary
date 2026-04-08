// src/components/FooterSection.jsx
import { motion } from "framer-motion";
import image from "/public/MenaFooter.png"
export default function FooterSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center bg-black">
      {/* نجوم صغيرة */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* ضوء أزرق خفيف في المنتصف */}
      <div className="absolute bg-blue-500 rounded-full w-80 h-80 opacity-20 blur-3xl" />

      {/* صورة الفنانة */}
      <motion.img
        src={image} // عدل المسار حسب الصورة
        alt="Thank You Artist"
        className="relative object-contain w-[20rem] shadow-2xl rounded-2xl z-10"
        initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* النص */}
      <motion.h2
        className="relative z-10 mt-10 text-3xl font-semibold text-white md:text-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        With love and gratitude ❤️
      </motion.h2>
    </section>
  );
}
