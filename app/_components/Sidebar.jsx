'use client'

import { useState } from 'react'
import { BsLayoutSidebar, BsPlusSquare } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

export default function Sidebar() {
  const [chatList, setChatList] = useState([
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
  ])
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && (
        <>
          <div className='fixed left-0 top-0 p-4 pt-6 bg-gray-200 rounded-ee-md min-h-screen'>
            <div>
              <BsPlusSquare className='w-5 h-5 mb-8' />
              {chatList.map((chat) => (
                <FiMessageSquare className='w-5 h-5 mb-6' key={chat.id} />
              ))}
            </div>
            <AiOutlineUser className='w-5 h-5 fixed bottom-10' />
          </div>
          <div className='flex flex-col items-center justify-center text-gray-600 bg-gray-200 min-h-screen shadow-md shadow-gray-200 w-12 hover:w-64 transition-all duration-300 delay-300 hover:delay-200 opacity-0 hover:opacity-100 z-10'>
            <div className='flex flex-row fixed top-0 mt-2'>
              <button className='flex flex-row p-4 pr-14 hover:bg-gray-300 rounded-md min-w-fit'>
                <AiOutlinePlus className='w-5 h-5' />
                <span className='text-sm ml-2'>New Chat</span>
              </button>
              <button
                className='p-4 has-tooltip ml-4 hover:bg-gray-300 rounded-md'
                onClick={handleToggle}
              >
                <span class='tooltip rounded shadow-lg p-1 bg-gray-600 text-gray-200 ml-14 w-24 text-xs'>
                  Close Sidebar
                </span>
                <BsLayoutSidebar className='w-5 h-5' />
              </button>
            </div>
            <div className='fixed left-0 top-16'>
              {chatList.map((chat) => (
                <ul
                  className='w-60 pl-3 overflow-y-auto'
                  style={{ maxHeight: 'calc(100vh - 10rem)' }}
                  key={chat.id}
                >
                  <li className='flex flex-row hover:bg-gray-300 rounded-md cursor-pointer'>
                    <div className='p-3'>
                      <FiMessageSquare className='w-5 h-5' />
                    </div>
                    <div className='p-3 text-sm'>{chat.name}</div>
                  </li>
                </ul>
              ))}
            </div>
            <div className='fixed bottom-0 border-t-2 w-48 text-center pt-4 pb-4'>
              <div className='flex flex-row mb-1'>
                <AiOutlineUser className='w-5 h-5' />
                <span className='ml-3 text-sm'>Upgrade to Plus</span>
              </div>
              <div className='flex flex-row justify-between'>
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
          className='fixed left-0 top-0 p-4 bg-gray-200 bg-opacity-40 rounded-ee-md'
          onClick={handleToggle}
        >
          <BsLayoutSidebar className='w-5 h-5' />
        </button>
      )}
    </>
  )
}