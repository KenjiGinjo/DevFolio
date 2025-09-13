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
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSkillClick(skill)}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {skill.alias}
          </h3>
        </div>
        <span className="text-sm font-medium text-gray-600">
          {getProficiencyLevel(progress)}
        </span>
      </div>

      <div className="mb-2">
        <Progress value={progress} color={progressColor} />
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>
          Base Level: {skill.baseLevel}
        </span>
        <span>
          Experience: {skill.expierience.length}
        </span>
        <span className="font-medium">
          {progress}/100
        </span>
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
          <div className="bg-white text-gray-900 text-center py-2 px-4 rounded-full text-sm font-medium shadow-lg">
            View Details
          </div>
        </div>
      )}
    </div>
  )
}
