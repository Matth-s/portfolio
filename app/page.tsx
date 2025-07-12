import Hero from '@/components/Hero';
import ProjectList from '@/components/ProjectList';
import SkillList from '@/components/SkillList';

export default function Home() {
  return (
    <div>
      <Hero />
      <SkillList />
      <ProjectList />
    </div>
  );
}
