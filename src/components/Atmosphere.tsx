import { useEffect, useRef } from 'react'

export function Atmosphere() {
  const moonRef = useRef<HTMLDivElement>(null)
  const mountainsRef = useRef<HTMLDivElement>(null)
  const cloudsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (moonRef.current) moonRef.current.style.transform = `translateY(${y * 0.03}px)`
      if (mountainsRef.current) mountainsRef.current.style.transform = `translateY(${y * 0.01}px)`
      if (cloudsRef.current) cloudsRef.current.style.transform = `translateY(${y * 0.05}px)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere__moon" ref={moonRef} />
      <div className="atmosphere__clouds" ref={cloudsRef} />
      <div className="atmosphere__mountains" ref={mountainsRef} />
      <div className="atmosphere__dust" />
      <div className="atmosphere__grain" />
    </div>
  )
}
