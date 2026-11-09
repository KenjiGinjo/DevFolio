export interface Experience {
  tip: string
  date: string
}

export interface Skill {
  alias: string
  baseLevel: number
  experience: Experience[]
}
