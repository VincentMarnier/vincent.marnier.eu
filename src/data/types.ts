import { SvgIconProps } from '@mui/material'
import { ReactNode } from 'react'

export interface ResumeTitles {
  "Main title": string
  "Profile": string
  "Professional experience": string
  "Education": string
  "Projects & Contributions": string
  "Technical Skills": string
  "Languages": string
  "Interests": string
}

export interface AboutMeRow {
  key: string
  icon: ReactNode
  text: string
}

export interface SkillGroup {
  icon: React.ComponentType<SvgIconProps>
  title: string
  data: string[]
}

export interface TimelineEntry {
  title?: string
  subTitle?: string
  subTitleBadge?: string
  color: string
  logoSrc: string
  logoSize: number
  startDate?: string
  endDate?: string
  description?: ReactNode
  url?: string
  pb?: number
  drawConnector?: boolean
}

export interface ResumeData {
  titles: ResumeTitles
  profile: ReactNode
  aboutMe: AboutMeRow[]
  keySkills: SkillGroup
  skills: SkillGroup[]
  languages: string[]
  interests: string[]
  jobs: TimelineEntry[]
  diplomas: TimelineEntry[]
  projectsAndContributions: TimelineEntry[]
}
