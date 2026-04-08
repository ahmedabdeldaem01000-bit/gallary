// src/components/HeroSection.jsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-6 text-center text-white bg-neutral-900">
      <motion.h1
        className="mb-4 text-5xl font-bold"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience Smooth Scroll & Motion
      </motion.h1>

      <motion.p
        className="max-w-2xl mb-8 text-lg text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        A modern landing page built with React, Framer Motion, and Lenis for buttery smooth scrolling.
      </motion.p>

      <motion.a
        href="#gallery"
        className="px-8 py-3 text-lg font-medium transition bg-blue-600 rounded-full hover:bg-blue-500"
        whileHover={{ scale: 1.05 }}
      >
        Explore Gallery
      </motion.a>
    </section>
  );
}
