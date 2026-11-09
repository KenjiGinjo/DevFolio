import type { Skill } from "@/interfaces"
import { SkillCard } from "./skill-card"

interface SkillCategoryProps {
  title: string
  skills: Record<string, Skill>
  onSkillClick: (skill: Skill, skillKey: string) => void
}

export function SkillCategory({ title, skills, onSkillClick }: SkillCategoryProps) {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-24">
      <div className="flex items-center mb-8 sm:mb-10 lg:mb-12">
        <div className="w-1 h-6 sm:h-8 lg:h-10 bg-primary rounded-full mr-3 sm:mr-4"></div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-200 ml-3 sm:ml-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
        {Object.entries(skills).map(([key, skill]: [string, Skill]) => (
          <SkillCard
            key={key}
            skill={skill}
            onSkillClick={skill => onSkillClick(skill, key)}
          />
        ))}
      </div>
    </div>
  )
}
