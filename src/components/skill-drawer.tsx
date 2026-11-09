import { DrawerDescription } from "./ui/drawer"
import type { Experience, Skill } from "@/interfaces"
import { formatDate } from "@/utils/skillUtils"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer"

interface SkillDrawerProps {
  skill: Skill | null
  isOpen: boolean
  onClose: () => void
}

export function SkillDrawer({ skill, isOpen, onClose }: SkillDrawerProps) {
  if (!skill) {
    return null
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] sm:max-h-[85vh]">
        <DrawerHeader className="border-b border-gray-100 pb-4 sm:pb-6">
          <DrawerTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            {skill.alias}
          </DrawerTitle>
          <DrawerDescription className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            Experience
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-y-auto">
          <div className="space-y-3 sm:space-y-4">
            {skill.experience.map((exp: Experience, index: number) => (
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
      </DrawerContent>
    </Drawer>
  )
}
