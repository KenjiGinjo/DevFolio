import { DrawerDescription } from "./ui/drawer"
import type { Experience, Skill } from "@/interfaces"
import { calculateSkillLevel, formatDate, getProgressColor, getProficiencyLevel } from "@/utils/skillUtils"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer"
import { Progress } from "./ui/progress"
  
interface SkillDrawerProps {
  skill: Skill | null
  isOpen: boolean
  onClose: () => void
}

export function SkillDrawer({ skill, isOpen, onClose }: SkillDrawerProps) {
  if (!skill) {
    return null
  }

  const progress = calculateSkillLevel(skill.baseLevel, skill.expierience.length)
  const progressColor = getProgressColor(progress)
  const proficiencyLevel = getProficiencyLevel(progress)

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {skill.alias.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <DrawerTitle className="text-2xl font-bold text-gray-900">
                {skill.alias}
              </DrawerTitle>
              <DrawerDescription className="text-gray-600 mt-1">
                {proficiencyLevel} • {skill.expierience.length} projects
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        
        <div className="px-6 py-6 space-y-6 overflow-y-auto">
          {/* Skill Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{skill.baseLevel}</div>
              <div className="text-sm text-gray-600">Base Level</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{skill.expierience.length}</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{progress}</div>
              <div className="text-sm text-gray-600">Score</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Proficiency</span>
              <span className="text-sm text-gray-500">{progress}/100</span>
            </div>
            <Progress value={progress} color={progressColor} className="h-2" />
          </div>

          {/* Experience List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience</h3>
            <div className="space-y-3">
              {skill.expierience.map((exp: Experience, index: number) => (
                <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary">
                      {formatDate(exp.date)}
                    </span>
                    <span className="text-xs text-gray-400">#{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {exp.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
