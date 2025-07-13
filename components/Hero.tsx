"use client";

import React from "react";
import { motion } from "framer-motion";

const splitWords = (text: string) =>
  text.split(" ").map((word) => word.split(""));

const letterVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.06,
    },
  }),
};

const Hero = () => {
  const fullName = splitWords("Senosiain Matthieu");

  return (
    <section className="flex h-80 w-full items-center justify-center px-4 text-center">
      <div className="flex flex-wrap justify-center text-5xl leading-tight font-semibold">
        {fullName.map((letters, wordIndex) => (
          <motion.span
            key={`word-${wordIndex}`}
            className="mr-2 inline-block whitespace-nowrap"
            initial="hidden"
            animate="visible"
          >
            {letters.map((char, i) => (
              <motion.span
                key={`char-${wordIndex}-${i}`}
                custom={wordIndex * 10 + i}
                variants={letterVariant}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
