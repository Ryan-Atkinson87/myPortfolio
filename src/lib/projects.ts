import type { ComponentType } from 'react'

export type ProjectStatus = 'live' | 'building' | 'design'

export interface ProjectStackGroup {
  group: string
  items: string[]
}

export interface ProjectLinks {
  live?: string
  github?: string
  video?: string
}

export interface ProjectFrontmatter {
  /** Controls listing order (lower first) — set when adding/reordering projects. */
  order: number
  slug: string
  title: string
  kind: string
  status: ProjectStatus
  statusLabel: string
  year: string
  /** Path to a cover/hero screenshot, e.g. "/assets/zwift-tool-editor.png". Omit to show the placeholder. */
  image?: string
  summary: string
  role: string
  stackShort: string[]
  links: ProjectLinks
  stack: ProjectStackGroup[]
  milestones: string[]
  inProgress?: string
  future: string[]
}

export interface Project extends ProjectFrontmatter {
  /** Rendered MDX body — the "why this exists" prose paragraphs. */
  Why: ComponentType
}

const modules = import.meta.glob<{
  frontmatter: ProjectFrontmatter
  default: ComponentType
}>('/src/content/projects/*.mdx', { eager: true })

export const projects: Project[] = Object.values(modules)
  .map((mod) => ({ ...mod.frontmatter, Why: mod.default }))
  .sort((a, b) => a.order - b.order)

export const projectBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
)
