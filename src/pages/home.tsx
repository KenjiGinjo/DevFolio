import { useState } from 'react'

import { Icon } from '../components/Icon/Icon'
import { ProgressBar } from '../components/ProgressBar/ProgressBar'
import { SKILL_CATEGORIES } from '../constants/skills'
import { STYLES } from '../constants/styles'
import { calculateSkillLevel, formatDate, getProficiencyLevel } from '../utils/skillUtils'
import { backEnd, devOpsAndCloud, frontEnd, frontEndFrameworksAndLibraries, other } from './skills'
// 技能卡片组件
interface SkillCardProps {
  skill: {
    alias: string
    baseLevel: number
    expierience: Array<{
      tip: string
      date: string
    }>
    iconDimensions?: [number, number]
  }
  skillKey: string
  onSkillClick: (skill: any) => void
}

function SkillCard({ skill, skillKey, onSkillClick }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const progress = calculateSkillLevel(skill.baseLevel, skill.expierience.length)

  return (
    <div
      className={STYLES.CARD.BASE}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSkillClick(skill)}
    >
      <div className={`${STYLES.LAYOUT.FLEX_BETWEEN} mb-3`}>
        <div className={STYLES.LAYOUT.FLEX_SPACE}>
          <Icon skillKey={skillKey} alt={skill.alias} size="card" />
          <h3 className={STYLES.TEXT.TITLE}>
            {skill.alias}
          </h3>
        </div>
        <span className={STYLES.TEXT.SUBTITLE}>
          {getProficiencyLevel(progress)}
        </span>
      </div>

      <div className="mb-2">
        <ProgressBar progress={progress} height="small" />
      </div>

      <div className={`${STYLES.LAYOUT.FLEX_BETWEEN} ${STYLES.TEXT.BODY_SMALL}`}>
        <span>
          Base Level:
          {' '}
          {skill.baseLevel}
        </span>
        <span>
          Experience:
          {' '}
          {skill.expierience.length}
        </span>
        <span className="font-medium">
          {progress}
          /100
        </span>
      </div>

      {isHovered && (
        <div className={STYLES.CARD.HOVER_TOOLTIP}>
          <p className={STYLES.TEXT.BODY_SMALL}>
            Click to view details
          </p>
        </div>
      )}
    </div>
  )
}

// 技能详情模态框组件
interface SkillModalProps {
  skill: any
  skillKey?: string
  isOpen: boolean
  onClose: () => void
}

function SkillModal({ skill, skillKey, onClose }: SkillModalProps) {
  if (!skill) {
    return null
  }

  const progress = calculateSkillLevel(skill.baseLevel, skill.expierience.length)

  return (
    <div className={STYLES.MODAL.OVERLAY}>
      <div className={STYLES.MODAL.CONTAINER}>
        <div className={STYLES.MODAL.HEADER}>
          <div className={STYLES.LAYOUT.FLEX_BETWEEN}>
            <div className={STYLES.LAYOUT.FLEX_SPACE}>
              {skillKey && <Icon skillKey={skillKey} alt={skill.alias} size="modal" />}
              <h2 className={STYLES.TEXT.TITLE_LARGE}>
                {skill.alias}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={STYLES.MODAL.CLOSE_BUTTON}
            >
              ×
            </button>
          </div>
        </div>

        <div className={STYLES.MODAL.CONTENT}>
          <div className="mb-6">
            <div className={`${STYLES.LAYOUT.FLEX_BETWEEN} ${STYLES.TEXT.BODY_SMALL} mb-2`}>
              <span>
                Base Level:
                {' '}
                {skill.baseLevel}
              </span>
              <span>
                Experience:
                {' '}
                {skill.expierience.length}
              </span>
              <span className="font-medium">
                {progress}
                /100
              </span>
            </div>
            <ProgressBar progress={progress} height="medium" />
          </div>

          <div>
            <h3 className={`${STYLES.TEXT.TITLE} mb-4`}>
              Experience Timeline
            </h3>
            <div className="space-y-4">
              {skill.expierience.map((exp: any, index: number) => (
                <div key={index} className={STYLES.TIMELINE.ITEM}>
                  <div className={`${STYLES.TIMELINE.DATE} mb-1`}>
                    {formatDate(exp.date)}
                  </div>
                  <p className={STYLES.TIMELINE.CONTENT}>
                    {exp.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 技能分类组件
interface SkillCategoryProps {
  title: string
  skills: any
  onSkillClick: (skill: any, skillKey: string) => void
}

function SkillCategory({ title, skills, onSkillClick }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <h2 className={`${STYLES.TEXT.TITLE_LARGE} mb-4`}>{title}</h2>
      <div className={STYLES.LAYOUT.GRID_SKILLS}>
        {Object.entries(skills).map(([key, skill]: [string, any]) => (
          <SkillCard
            key={key}
            skill={skill}
            skillKey={key}
            onSkillClick={skill => onSkillClick(skill, key)}
          />
        ))}
      </div>
    </div>
  )
}

export function Home() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null)
  const [selectedSkillKey, setSelectedSkillKey] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSkillClick = (skill: any, skillKey: string) => {
    setSelectedSkill(skill)
    setSelectedSkillKey(skillKey)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSkill(null)
    setSelectedSkillKey('')
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
    {/* Introduction */}
    <div className={`${STYLES.LAYOUT.CONTAINER} ${STYLES.LAYOUT.SECTION}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <p className={STYLES.TEXT.BODY_LARGE}>
          I'm a full-stack engineer who loves coding and hanging out with kind people. I think I'm pretty nice too! If you want to know more about me, check out my social media. I'd love to hear from you!
        </p>
      </div>
    </div>

    {/* Skills Section */}
    <div className={`${STYLES.LAYOUT.CONTAINER} ${STYLES.LAYOUT.SECTION}`}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Skills
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
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

    {/* Skill Modal */}
    <SkillModal
      skill={selectedSkill}
      skillKey={selectedSkillKey}
      isOpen={isModalOpen}
      onClose={closeModal}
    />
    </div>
  )
}
