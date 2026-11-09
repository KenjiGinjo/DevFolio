import { calculateSkillLevel } from "@/utils/skillUtils"
import type { Skill } from "@/interfaces"


interface SkillCardProps {
  skill: Skill
  onSkillClick: (skill: Skill) => void
}

export function SkillCard({ skill, onSkillClick }: SkillCardProps) {
  const progress = calculateSkillLevel(skill.baseLevel)

  return (
    <button
      type="button"
      className="group block h-full min-w-0 w-full text-left bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
      onClick={() => onSkillClick(skill)}
    >
      <div className="relative z-10">
        <h3 className="min-w-0 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
          {skill.alias}
        </h3>
        <p className="mt-3 text-sm text-gray-500">
          {progress}/100
          <span className="mx-2 text-gray-300">·</span>
          {skill.experience.length} {skill.experience.length === 1 ? 'note' : 'notes'}
        </p>
      </div>
    </button>
  )
}
