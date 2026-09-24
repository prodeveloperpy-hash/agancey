import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('upforge-theme')
  return savedTheme === 'light' ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('upforge-theme', theme)
  }, [theme])

  return (
    <label className="theme-toggle cosmic-toggle" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <input
        className="cosmic-toggle-input"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={event => setTheme(event.target.checked ? 'dark' : 'light')}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
      <span className="cosmic-slider" aria-hidden="true">
        <i className="cosmos" />
        <i className="energy-line energy-one" />
        <i className="energy-line energy-two" />
        <i className="energy-line energy-three" />
        <i className="toggle-orb"><i className="inner-orb" /><i className="orb-ring" /></i>
        <i className="particles">{Array.from({ length:6 }, (_, index) => <i className="particle" key={index} />)}</i>
      </span>
    </label>
  )
}
