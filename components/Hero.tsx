"use client";

import React from "react";
import { motion } from "framer-motion";

// Découpe chaque caractère
const split = (text: string) => text.split("");

const letter = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.06,
    },
  }),
};

const Hero = () => {
  const fullName = split("Senosiain\u00A0Matthieu");

  return (
    <section className="flex h-80 w-full items-center justify-center">
      <div className="space-y-1 text-5xl leading-none font-semibold">
        <motion.span initial="hidden" animate="visible" className="block">
          {fullName.map((char, i) => (
            <motion.span
              key={`char-${i}`}
              custom={i}
              variants={letter}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;
