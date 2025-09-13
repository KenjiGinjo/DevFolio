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
      className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onSkillClick(skill)}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
     
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {skill.alias}
            </h3>
          </div>
          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${badgeColor}`}>
            {getProficiencyLevel(progress)}
          </span>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Proficiency</span>
            <span className="text-sm font-bold text-gray-900">{progress}/100</span>
          </div>
          <Progress value={progress} color={progressColor} />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-gray-500 text-xs font-medium mb-1">Base Level</div>
            <div className="font-semibold text-gray-900">{skill.baseLevel}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-gray-500 text-xs font-medium mb-1">Experience</div>
            <div className="font-semibold text-gray-900">{skill.expierience.length} projects</div>
          </div>
        </div>
      </div>
    </div>
  )
}
