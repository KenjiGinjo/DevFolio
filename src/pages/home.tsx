import { useState } from 'react'
import { SKILL_CATEGORIES } from '../constants/skills'
import { backEnd, devOpsAndCloud, frontEnd, frontEndFrameworksAndLibraries, other } from '../data/skills'
import { SkillCategory } from '@/components/skill-category'
import { SkillDrawer } from '@/components/skill-drawer'
import { calculateSkillLevel } from '@/utils/skillUtils'
import type { Skill } from '@/interfaces'

export function Home() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedSkill(null)
  }

  const skillsData = {
    frontEnd,
    frontEndFrameworksAndLibraries,
    backEnd,
    devOpsAndCloud,
    other,
  }

  const skillCategories = SKILL_CATEGORIES.map(category => {
    const skills = skillsData[category.key as keyof typeof skillsData]
    
    // 将技能对象转换为数组并按分数排序
    const sortedSkills = Object.entries(skills)
      .map(([key, skill]) => ({
        key,
        skill,
        score: calculateSkillLevel(skill.baseLevel, skill.expierience.length)
      }))
      .sort((a, b) => b.score - a.score) // 按分数从高到低排序
      .reduce((acc, { key, skill }) => {
        acc[key] = skill
        return acc
      }, {} as Record<string, Skill>)
    
    return {
      title: category.title,
      skills: sortedSkills,
    }
  })

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden bg-yellow-50 rounded-2xl p-8 shadow-sm border border-gray-200">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white/50">
                  <img 
                    src="/profile-photo.jpeg" 
                    alt="Kenji Ginjo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  👋 Hello, I'm Kenji
                  </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  I'm a <span className="font-semibold text-amber-600">full-stack engineer</span> who loves coding and hanging out with kind people. 
                  I think I'm pretty nice too! If you want to know more about me, check out my social media. 
                  <span className="block mt-3 text-gray-600">I'd love to hear from you! 💬</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I work with
            <span className="block mt-2 text-sm text-gray-500">
              Click on any skill to learn more about my experience
            </span>
            <span className="block mt-3 text-sm text-amber-600 font-medium">
              * Content as of 2023. For the latest updates, follow my GitHub code
            </span>
          </p>
          <div className="mt-8 h-1 w-24 bg-primary rounded-full mx-auto"></div>
        </div>

        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            onSkillClick={handleSkillClick}
          />
        ))}
      </div>

      <SkillDrawer
        skill={selectedSkill}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
      />
    </div>
  )
}
