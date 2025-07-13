import React from "react";
import SkillCard from "./SkillCard";
import {
  frontendSkill,
  backendSkill,
  othersSkills,
} from "@/constants/skills-constant";

const SkillList = () => {
  return (
    <section className="border-y-2 bg-[#141726] py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">Skills</h2>
      <div className="mx-auto flex w-4/5 flex-col justify-between gap-y-8 md:w-3/5 md:flex-row md:gap-y-0">
        <SkillCard skill={frontendSkill} delay={0.2} />
        <SkillCard skill={backendSkill} delay={0.4} />
        <SkillCard skill={othersSkills} delay={0.6} />
      </div>
    </section>
  );
};

export default SkillList;
