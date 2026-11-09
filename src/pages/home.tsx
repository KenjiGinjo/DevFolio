import { useState } from 'react'
import { SKILL_CATEGORIES } from '../constants/skills'
import { backEnd, devOpsAndCloud, frontEnd, frontEndFrameworksAndLibraries, other } from '../data/skills'
import { profile } from '@/data/profile'
import { SkillCategory } from '@/components/skill-category'
import { SkillDrawer } from '@/components/skill-drawer'
import { calculateSkillLevel } from '@/utils/skillUtils'
import type { Skill } from '@/interfaces'

const formatActivityDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number)
  if (!year || !month || !day) return dateString
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

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
        score: calculateSkillLevel(skill.baseLevel)
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-200/50">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-100/60 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-amber-100/60 rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Profile Photo */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-3xl overflow-hidden shadow-xl border-4 border-white/60">
                  <img 
                    src={profile.photo} 
                    alt={profile.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {profile.greeting}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0">
                  {profile.bio.before}<a
                    href={profile.bio.highlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-amber-600 hover:underline"
                  >{profile.bio.highlight}</a>{profile.bio.after}
                  <span className="block mt-3 sm:mt-4 text-gray-600">{profile.bio.closing}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">GitHub</h2>
        <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl">
          <a
            href={profile.githubActivity.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-600 hover:underline"
          >
            {profile.githubActivity.contributions.toLocaleString('en-US')} contributions
          </a>
          {' '}in the last year, on {profile.githubActivity.activeDays} days.
          <span className="block mt-1 text-sm sm:text-base text-gray-500">
            GitHub&apos;s count on {formatActivityDate(profile.githubActivity.countedOn)}.
          </span>
        </p>
        <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-700 max-w-3xl">
          {profile.githubActivity.repos.map((repo) => (
            <li key={repo.name} className="flex flex-wrap gap-x-3 gap-y-1">
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 hover:underline"
              >
                {repo.name}
              </a>
              <span className="text-gray-500">Last push {formatActivityDate(repo.pushedAt)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            My Skills
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with
            <span className="block mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
              Select a skill to read the experience.
            </span>
          </p>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-800 max-w-3xl mx-auto leading-relaxed border border-amber-200 bg-amber-50 rounded-xl px-4 py-3">
            {profile.skillsDisclaimer}
          </p>
          <div className="mt-6 sm:mt-8 h-1 w-16 sm:w-20 lg:w-24 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              onSkillClick={handleSkillClick}
            />
          ))}
        </div>
      </div>

      <SkillDrawer
        skill={selectedSkill}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
      />
    </div>
  )
}
