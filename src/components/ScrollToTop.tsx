import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function resetScroll() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

export function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    window.addEventListener('pageshow', resetScroll)
    return () => {
      window.history.scrollRestoration = previous
      window.removeEventListener('pageshow', resetScroll)
    }
  }, [])

  useLayoutEffect(resetScroll, [location])

  return null
}
