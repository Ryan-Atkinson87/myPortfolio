import type { SVGProps } from 'react'

const PATHS: Record<string, string> = {
  fish: '<path d="M3 12c3-5 9-5 12-2l4-3-1 5 1 5-4-3c-3 3-9 3-12-2z"/><circle cx="15" cy="11" r="1" fill="currentColor" stroke="none"/>',
  bike: '<circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="M6 17 10 8h5l3 9"/><line x1="10" y1="8" x2="13" y2="8"/>',
  robot: '<rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/><circle cx="12" cy="14" r="1.6"/>',
  cube: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
}

interface HobbyIconProps extends SVGProps<SVGSVGElement> {
  icon: string
}

export function HobbyIcon({ icon, ...rest }: HobbyIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: PATHS[icon] ?? '' }}
      {...rest}
    />
  )
}
