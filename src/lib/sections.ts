import type { ComponentType } from 'react'

import HomeHeroBody, { frontmatter as homeHeroFm } from '@/content/sections/home-hero.mdx'
import HomeIntroBody from '@/content/sections/home-intro.mdx'
import AboutBody, { frontmatter as aboutFm } from '@/content/sections/about.mdx'
import SkillsBody, { frontmatter as skillsFm } from '@/content/sections/skills.mdx'
import LinksBody, { frontmatter as linksFm } from '@/content/sections/links.mdx'
import ContactBody from '@/content/sections/contact.mdx'

export interface HeroStat {
  n: string
  k: string
}

export interface HomeHeroFrontmatter {
  availability: string
  stats: HeroStat[]
}

export interface DriveCard {
  label: string
  title: string
  body: string
}

export interface HobbyCard {
  title: string
  body: string
  icon: string
}

export interface Venture {
  name: string
  accent: string
  url: string
  body: string
}

export interface AboutFrontmatter {
  basedIn: string
  currently: string
  openTo: string
  drives: DriveCard[]
  hobbies: HobbyCard[]
  ventures: Venture[]
}

export interface SkillGroup {
  icon: string
  name: string
  note: string
  items: string[]
}

export interface HowIWorkStep {
  n: string
  title: string
  body: string
}

export interface SkillsFrontmatter {
  groups: SkillGroup[]
  howIWork: HowIWorkStep[]
}

export interface LinkItem {
  tag: string
  name: string
  handle: string
  url: string
  icon: string
}

export interface LinksFrontmatter {
  items: LinkItem[]
}

export const homeHero = {
  frontmatter: homeHeroFm as unknown as HomeHeroFrontmatter,
  Body: HomeHeroBody as ComponentType,
}

export const homeIntro = {
  Body: HomeIntroBody as ComponentType,
}

export const about = {
  frontmatter: aboutFm as unknown as AboutFrontmatter,
  Body: AboutBody as ComponentType,
}

export const skills = {
  frontmatter: skillsFm as unknown as SkillsFrontmatter,
  Body: SkillsBody as ComponentType,
}

export const links = {
  frontmatter: linksFm as unknown as LinksFrontmatter,
  Body: LinksBody as ComponentType,
}

export const contact = {
  Body: ContactBody as ComponentType,
}
