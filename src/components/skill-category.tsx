import type { Skill } from "@/interfaces"
import { SkillCard } from "./skill-card"

interface SkillCategoryProps {
  title: string
  skills: Record<string, Skill>
  onSkillClick: (skill: Skill, skillKey: string) => void
}

export function SkillCategory({ title, skills, onSkillClick }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
