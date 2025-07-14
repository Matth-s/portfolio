"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const letterVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.02 },
  }),
};

const Hero = () => {
  const intro = "Bonjour, je suis Matthieu Senosiain";

  const renderAnimatedText = (text: string) =>
    text.split(" ").map((word, wordIdx) => (
      <span key={wordIdx} className="inline-flex">
        {word.split("").map((char, charIdx) => (
          <motion.span
            key={`${wordIdx}-${charIdx}`}
            custom={wordIdx * 10 + charIdx}
            variants={letterVariant}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
        <span className="inline-block">&nbsp;</span>
      </span>
    ));

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <motion.h1
        className="text-3xl font-semibold sm:text-4xl md:text-5xl"
        initial="hidden"
        animate="visible"
      >
        {renderAnimatedText(intro)}
      </motion.h1>

      <motion.p
        className="mt-4 max-w-3xl text-base text-[var(--text)] sm:text-lg md:text-xl"
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.6,
          },
        }}
      >
        À la recherche d&apos;une alternance en tant que Concepteur Développeur
        d&apos;Applications (Bac +3 – École CESI)
      </motion.p>

      <div className="pt-4">
        <Link
          href={"https://www.linkedin.com/in/senosiain-matthieu/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[var(--card)]">
            <Image
              src={"/icons/linkedin.svg"}
              alt="logo"
              width={24}
              height={24}
            />
            Linkedin
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
