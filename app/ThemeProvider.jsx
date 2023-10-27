'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsLightbulbFill, BsLightbulb } from 'react-icons/bs'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <BsLightbulbFill className='w-5 h-5' />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <BsLightbulb className='w-5 h-5' />
        </button>
      )}
    </>
  )
}

export default ThemeSwitcher
