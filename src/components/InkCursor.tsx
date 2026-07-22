import { useEffect, useState } from 'react'

export function InkCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setHidden(false)
      setPos({ x: event.clientX, y: event.clientY })
      const target = event.target as HTMLElement | null
      const interactive = Boolean(target?.closest('a, button, .seal, .shelf-item, .scroll-item'))
      setHover(interactive)
    }

    const onLeave = () => setHidden(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      className={`ink-cursor${hover ? ' is-hover' : ''}${hidden ? ' is-hidden' : ''}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  )
}
