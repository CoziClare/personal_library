import { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Atmosphere } from './Atmosphere'
import { InkCursor } from './InkCursor'
import { LoadingScreen } from './LoadingScreen'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout() {
  const [booting, setBooting] = useState(true)
  const handleDone = useCallback(() => setBooting(false), [])

  return (
    <div className="site">
      {booting && <LoadingScreen onDone={handleDone} />}
      <Atmosphere />
      <InkCursor />
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
