import { DrawerDescription } from "./ui/drawer"
import type { Experience, Skill } from "@/interfaces"
import { calculateSkillLevel, formatDate } from "@/utils/skillUtils"
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

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center space-x-3">
            <DrawerTitle className="text-2xl">{skill.alias}</DrawerTitle>
          </div>
          <DrawerDescription>
            skill details and proficiency information
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 pb-4 space-y-6">
          <div>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              <span>Base Level: {skill.baseLevel}</span>
              <span>Experience: {skill.expierience.length}</span>
              <span className="font-medium">{progress}/100</span>
            </div>
            <Progress value={progress} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Experience Timeline
            </h3>
            <div className="space-y-4">
              {skill.expierience.map((exp: Experience, index: number) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4 pb-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    {formatDate(exp.date)}
                  </div>
                  <p className="text-gray-700">
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
