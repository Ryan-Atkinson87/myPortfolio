# Content

All editable copy lives here as MDX — frontmatter for structured data, the MDX body for prose. Pages import typed bundles from `src/lib/projects.ts` and `src/lib/sections.ts`; you shouldn't need to touch component code to update text.

## Projects (`projects/*.mdx`)

Each file is one project card + detail page. To add a project, copy an existing file (e.g. `zwift-tool.mdx`), rename it to a new `slug`, and fill in:

- **Frontmatter** — `order` (controls display order across the site), `slug`, `title`, `kind`, `status` (`live` | `building` | `design`), `statusLabel`, `year`, `summary`, `role`, `stackShort`, `links` (`live`/`github`/`video`, all optional), `stack` (grouped tech list), `milestones`, optional `inProgress`, `future`.
- **Body** — two or three short paragraphs answering "why does this exist?" Rendered as the project's "Why I built this" section.

`src/lib/projects.ts` globs every file in this folder, attaches the compiled MDX body as `Why`, and sorts by `order`.

## Sections (`sections/*.mdx`)

Each file backs one page section of editable prose and/or structured lists (the kind of thing that changes more often than page structure). Page titles, labels and layout stay in the page components — only the copy lives here.

| File | Frontmatter | Body |
| --- | --- | --- |
| `home-hero.mdx` | `availability`, `stats[]` | Hero lede paragraph |
| `home-intro.mdx` | — | "What I care about" intro paragraphs |
| `about.mdx` | `basedIn`, `currently`, `openTo`, `drives[]`, `hobbies[]`, `ventures[]` | Bio paragraphs |
| `skills.mdx` | `groups[]` (skill categories with icon keys), `howIWork[]` | — |
| `links.mdx` | `items[]` (link cards with icon keys) | — |
| `contact.mdx` | — | Contact intro paragraph |

`icon` values are short keys (e.g. `fish`, `github`, `code`) mapped to inline SVGs in each page's icon registry — to add a new icon, add a key there and reference it from the frontmatter here.

`src/lib/sections.ts` imports each file directly and types its `frontmatter` export — if you add a new field, update the matching interface there too.

## Placeholder media — still needed

Drop real files into `public/assets/` and update the `src` reference in the relevant component or frontmatter field (no other code changes required).

- [ ] **Hero portrait** — `public/assets/ryan-portrait.jpg` (used on Home hero)
- [ ] **About portrait** — `public/assets/ryan-about.jpg` (used on About page)
- [ ] **Zwift Tool hero** — `public/assets/projects/zwift-tool-hero.jpg`
- [ ] **Zwift Tool screenshot(s)** — `public/assets/projects/zwift-tool-*.jpg`
- [ ] **Trive Services hero** — `public/assets/projects/trive-services-hero.jpg`
- [ ] **Trive Services screenshot(s)** — `public/assets/projects/trive-services-*.jpg`
- [ ] **Aquasense hero** — `public/assets/projects/aquasense-hero.jpg` (PCB / tank photo)
- [ ] **Aquasense hardware photos** — `public/assets/projects/aquasense-*.jpg`
- [ ] **Code Runner hero** — `public/assets/projects/code-runner-hero.jpg`
- [ ] **ROBERT hero** — `public/assets/projects/robert-hero.jpg` (robot / tank photo)
- [ ] **ROBERT hardware photos** — `public/assets/projects/robert-*.jpg`
- [ ] **Résumé PDF** — `public/assets/ryan-atkinson-cv.pdf` (Links page download button)
