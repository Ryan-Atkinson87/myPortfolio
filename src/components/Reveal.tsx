import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { useScrollReveal } from '@/lib/useScrollReveal'

type RevealProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>

export function Reveal<T extends ElementType = 'div'>({ as, className, children, ...rest }: RevealProps<T>) {
  const Component = (as ?? 'div') as ElementType
  const { ref, revealed } = useScrollReveal<HTMLElement>()
  const classes = ['reveal', revealed ? 'in' : '', className].filter(Boolean).join(' ')

  return (
    <Component ref={ref} className={classes} {...rest}>
      {children}
    </Component>
  )
}
