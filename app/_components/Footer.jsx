'use client'

import { useState } from 'react'

export default function Footer() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
  }

  return (
    <form
      className='flex flex-row fixed bottom-0 p-6 drop-shadow-md w-1/2 justify-center'
      onSubmit={handleSubmit}
    >
      <input
        className='bg-gray-300 dark:bg-gray-600 rounded-s-md p-3 w-screen outline-none'
        type='text'
        placeholder='Send a message'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <input
        className='p-3 bg-teal-200 rounded-e-md text-gray-600'
        type='submit'
        value='Send'
      />
    </form>
  )
}
