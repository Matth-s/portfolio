"use client";

import { ISkill } from "@/interface/skill-interface";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type SkillCardProps = {
  skill: ISkill;
  delay: number;
};

const SkillCard = ({ skill, delay }: SkillCardProps) => {
  const { tech, title } = skill;

  return (
    <motion.div
      className="mx-auto w-fit"
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.7,
        },
      }}
    >
      <p className="mb-6 text-center text-xl font-semibold">{title}</p>
      <ul className="flex flex-col gap-y-3">
        {tech.map((item) => (
          <li key={item.name} className="flex gap-x-2">
            <Image
              src={item.logo}
              alt={`${item.name} logo`}
              width={28}
              height={28}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
