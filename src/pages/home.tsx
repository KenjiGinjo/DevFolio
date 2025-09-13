import { useState } from 'react'
import { SKILL_CATEGORIES } from '../constants/skills'
import { backEnd, devOpsAndCloud, frontEnd, frontEndFrameworksAndLibraries, other } from '../data/skills'
import { SkillCategory } from '@/components/skill-category'
import { SkillDrawer } from '@/components/skill-drawer'
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

  const skillCategories = SKILL_CATEGORIES.map(category => ({
    title: category.title,
    skills: skillsData[category.key as keyof typeof skillsData],
  }))

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-lg text-gray-700">
            I'm a full-stack engineer who loves coding and hanging out with kind people. I think I'm pretty nice too! If you want to know more about me, check out my social media. I'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Skills
          </h1>
          <p className="text-xl text-gray-600">
            Technologies and tools I work with
          </p>
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
