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
        <button
          className='p-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md '
          onClick={() => setTheme('dark')}
        >
          <BsLightbulbFill className='w-5 h-5' />
        </button>
      ) : (
        <button
          className='p-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md '
          onClick={() => setTheme('light')}
        >
          <BsLightbulb className='w-5 h-5' />
        </button>
      )}
    </>
  )
}

export default ThemeSwitcher
