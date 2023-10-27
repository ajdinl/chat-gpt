'use client'

import { useState, useEffect } from 'react'
import { BsLayoutSidebar, BsPlusSquare } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import ThemeSwitcher from '../ThemeSwitcher'

export default function Sidebar() {
  const [chatList, setChatList] = useState([
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
  ])

  const [isOpen, setIsOpen] = useState(true)
  const [isBiggerScreen, setIsBiggerScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false)
        setIsBiggerScreen(false)
      } else {
        setIsOpen(true)
        setIsBiggerScreen(true)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && (
        <>
          {isBiggerScreen && (
            <div className='fixed left-0 top-0 p-4 pt-6 bg-gray-200 dark:bg-gray-800 min-h-screen z-10'>
              <div>
                <BsPlusSquare className='w-5 h-5 mb-8' />
                {chatList.map((chat) => (
                  <FiMessageSquare className='w-5 h-5 mb-6' key={chat.id} />
                ))}
              </div>
              <AiOutlineUser className='w-5 h-5 fixed bottom-10' />
            </div>
          )}
          <div
            className={`flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 min-h-screen shadow-md shadow-gray-200 dark:shadow-gray-700 z-10 ${
              isBiggerScreen
                ? 'w-12 hover:w-80 transition-all duration-300 delay-300 hover:delay-200 opacity-0 hover:opacity-100'
                : 'w-80'
            }`}
          >
            <div className='flex flex-row justify-between w-72 fixed top-0 mt-2'>
              <button className='flex flex-row p-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md min-w-fit border border-gray-600'>
                <AiOutlinePlus className='w-5 h-5' />
                <span className='text-sm ml-2'>New Chat</span>
              </button>
              <ThemeSwitcher />
              <button
                className='p-4 has-tooltip ml-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md'
                onClick={handleToggle}
              >
                <span className='tooltip rounded shadow-lg p-1 bg-gray-600 text-gray-200 ml-14 w-24 text-xs'>
                  Close Sidebar
                </span>
                <BsLayoutSidebar className='w-5 h-5' />
              </button>
            </div>
            <div className='fixed left-0 top-16'>
              <ul
                className='w-60 pl-3 overflow-y-auto'
                style={{ maxHeight: 'calc(100vh - 10rem)' }}
              >
                {chatList.map((chat) => (
                  <li
                    className='flex flex-row hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md cursor-pointer'
                    key={chat.id}
                  >
                    <div className='p-3'>
                      <FiMessageSquare className='w-5 h-5' />
                    </div>
                    <div className='p-3 text-sm'>{chat.name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='fixed bottom-0 border-gray-300 border-t-2 pt-4 pb-4'>
              <div className='flex flex-row mb-4'>
                <AiOutlineUser className='w-5 h-5' />
                <span className='ml-3 text-sm'>Upgrade to Plus</span>
              </div>
              <div className='flex flex-row w-64 justify-between'>
                <div className='flex flex-row space-x-2'>
                  <div className='text-sm'>Avatar</div>
                  <div className='text-sm font-bold'>ajdinl@live.com</div>
                </div>
                <HiOutlineDotsHorizontal />
              </div>
            </div>
          </div>
        </>
      )}
      {!isOpen && (
        <button
          className='fixed left-0 top-0 p-4 bg-gray-200 dark:bg-gray-800 bg-opacity-40 rounded-ee-md'
          onClick={handleToggle}
        >
          <BsLayoutSidebar className='w-5 h-5' />
        </button>
      )}
    </>
  )
}
