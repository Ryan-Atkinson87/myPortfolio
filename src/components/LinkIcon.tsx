import type { SVGProps } from 'react'

const ICONS: Record<string, { fill?: boolean; html: string }> = {
  github: {
    fill: true,
    html: '<path d="M12 1.5A10.5 10.5 0 0 0 1.5 12c0 4.64 3 8.57 7.18 9.96.53.1.72-.23.72-.5l-.01-1.96c-2.92.63-3.54-1.25-3.54-1.25-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.07a10 10 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.45.21 2.52.1 2.79.68.74 1.08 1.67 1.08 2.82 0 4.02-2.45 4.9-4.79 5.16.38.33.71.97.71 1.96l-.01 2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 22.5 12 10.5 10.5 0 0 0 12 1.5z"/>',
  },
  linkedin: {
    fill: true,
    html: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21H17.6v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z"/>',
  },
  email: {
    html: '<rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/>',
  },
  globe: {
    html: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  },
  live: {
    html: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17 10 8h5l3 9"/><line x1="10" y1="8" x2="13" y2="8"/>',
  },
  writing: {
    html: '<path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1z"/><path d="M14 4v5h5"/>',
  },
}

interface LinkIconProps extends SVGProps<SVGSVGElement> {
  icon: string
}

export function LinkIcon({ icon, ...rest }: LinkIconProps) {
  const entry = ICONS[icon]
  return (
    <svg
      viewBox="0 0 24 24"
      fill={entry?.fill ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: entry?.html ?? '' }}
      {...rest}
    />
  )
}
