import React from 'react';
import SkillCard from './SkillCard';
import {
  frontendSkill,
  backendSkill,
  othersSkills,
} from '@/constants/skills-constant';

const SkillList = () => {
  return (
    <section className="bg-[#141726] py-16 border-y-2">
      <h2 className="text-center font-bold text-4xl mb-12">Skills</h2>
      <div className="flex flex-col justify-between w-4/5 gap-y-8 mx-auto md:w-3/5 md:flex-row md:gap-y-0">
        <SkillCard skill={frontendSkill} delay={0.2} />
        <SkillCard skill={backendSkill} delay={0.4} />
        <SkillCard skill={othersSkills} delay={0.6} />
      </div>
    </section>
  );
};

export default SkillList;
