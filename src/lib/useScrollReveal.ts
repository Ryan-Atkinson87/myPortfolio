import { useEffect, useRef, useState } from 'react'

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: '0px 0px -8% 0px',
}

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const node = ref.current
    if (!node || revealed) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true)
        observer.unobserve(node)
      }
    }, OBSERVER_OPTIONS)

    observer.observe(node)
    return () => observer.disconnect()
  }, [revealed])

  return { ref, revealed }
}
