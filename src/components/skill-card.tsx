import { calculateSkillLevel, getProficiencyLevel, getProgressColor } from "@/utils/skillUtils"
import React from "react"
import { Progress } from "./ui/progress"
import type { Skill } from "@/interfaces"


interface SkillCardProps {
  skill: Skill
  onSkillClick: (skill: Skill) => void
}

export function SkillCard({ skill, onSkillClick }: SkillCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const progress = calculateSkillLevel(skill.baseLevel, skill.expierience.length)
  const progressColor = getProgressColor(progress)

  return (
    <div
      className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSkillClick(skill)}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">
                {skill.alias.charAt(0).toUpperCase()}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {skill.alias}
            </h3>
          </div>
          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold rounded-full">
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

      {isHovered && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-xl">
          <div className="bg-white/95 backdrop-blur-sm text-gray-900 text-center py-3 px-6 rounded-full text-sm font-bold shadow-xl transform scale-105 transition-transform">
            View Details →
          </div>
        </div>
      )}
    </div>
  )
}
