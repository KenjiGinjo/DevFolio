import { DrawerDescription } from "./ui/drawer"
import type { Experience, Skill } from "@/interfaces"
import { calculateSkillLevel, formatDate, getProgressColor } from "@/utils/skillUtils"
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

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] sm:max-h-[85vh]">
        <DrawerHeader className="border-b border-gray-100 pb-4 sm:pb-6">
          <DrawerTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            {skill.alias}
          </DrawerTitle>
          <DrawerDescription className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            skill description and experience list
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6 overflow-y-auto">
          {/* Skill Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{skill.baseLevel}</div>
              <div className="text-xs sm:text-sm text-gray-600">Base Level</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{skill.expierience.length}</div>
              <div className="text-xs sm:text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{progress}</div>
              <div className="text-xs sm:text-sm text-gray-600">Score</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base font-medium text-gray-700">Proficiency</span>
              <span className="text-sm text-gray-500">{progress}/100</span>
            </div>
            <Progress value={progress} color={progressColor} className="h-2 sm:h-3" />
          </div>

          {/* Experience List */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Experience</h3>
            <div className="space-y-3 sm:space-y-4">
              {skill.expierience.map((exp: Experience, index: number) => (
                <div key={index} className="p-3 sm:p-4 bg-white border border-gray-200 rounded-lg transition-colors hover:shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-primary">
                      {formatDate(exp.date)}
                    </span>
                    <span className="text-xs text-gray-400">#{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
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
