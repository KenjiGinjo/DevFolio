import { calculateSkillLevel, getProficiencyLevel, getProgressColor, getProficiencyBadgeColor } from "@/utils/skillUtils"
import { Progress } from "./ui/progress"
import type { Skill } from "@/interfaces"


interface SkillCardProps {
  skill: Skill
  onSkillClick: (skill: Skill) => void
}

export function SkillCard({ skill, onSkillClick }: SkillCardProps) {
  const progress = calculateSkillLevel(skill.baseLevel, skill.expierience.length)
  const progressColor = getProgressColor(progress)
  const badgeColor = getProficiencyBadgeColor(progress)

  return (
    <div
      className="group bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onClick={() => onSkillClick(skill)}
    >
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-5 gap-3 sm:gap-0">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {skill.alias}
            </h3>
          </div>
          <span className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full self-start sm:self-auto ${badgeColor}`}>
            {getProficiencyLevel(progress)}
          </span>
        </div>

        <div className="mb-4 sm:mb-5">
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-medium text-gray-600">Proficiency</span>
            <span className="text-xs sm:text-sm font-bold text-gray-900">{progress}/100</span>
          </div>
          <Progress value={progress} color={progressColor} className="h-2 sm:h-3" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
            <div className="text-gray-500 text-xs font-medium mb-1">Base Level</div>
            <div className="font-semibold text-gray-900">{skill.baseLevel}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
            <div className="text-gray-500 text-xs font-medium mb-1">Experience</div>
            <div className="font-semibold text-gray-900">{skill.expierience.length} projects</div>
          </div>
        </div>
      </div>
    </div>
  )
}
