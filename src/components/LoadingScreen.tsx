import { useEffect, useState } from 'react'
import { site } from '../data/site'

type LoadingScreenProps = {
  onDone: () => void
}

export function LoadingScreen({ onDone }: LoadingScreenProps) {
  const [done, setDone] = useState(false)
  const chars = site.loadingLines.join('\n').split('')

  useEffect(() => {
    document.body.classList.add('is-loading')
    const finishAt = chars.length * 90 + 900
    const timer = window.setTimeout(() => {
      setDone(true)
      document.body.classList.remove('is-loading')
      window.setTimeout(onDone, 1100)
    }, finishAt)

    return () => {
      window.clearTimeout(timer)
      document.body.classList.remove('is-loading')
    }
  }, [chars.length, onDone])

  return (
    <div className={`loading-screen${done ? ' is-done' : ''}`} aria-hidden={done}>
      <p className="loading-screen__poem">
        {chars.map((char, index) =>
          char === '\n' ? (
            <br key={`br-${index}`} />
          ) : (
            <span
              key={`${char}-${index}`}
              className="loading-screen__char"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {char}
            </span>
          ),
        )}
      </p>
    </div>
  )
}
