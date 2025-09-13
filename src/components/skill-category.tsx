import type { Skill } from "@/interfaces"
import { SkillCard } from "./skill-card"

interface SkillCategoryProps {
  title: string
  skills: Record<string, Skill>
  onSkillClick: (skill: Skill, skillKey: string) => void
}

export function SkillCategory({ title, skills, onSkillClick }: SkillCategoryProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
      </div>
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
