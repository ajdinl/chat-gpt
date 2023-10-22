export default function Footer() {
  return (
    <form className='flex flex-row fixed bottom-0 p-6 drop-shadow-md w-1/2 justify-center'>
      <input
        className='bg-gray-300 rounded-s-md p-3 w-screen outline-none'
        type='text'
        placeholder='Send a message'
      />
      <input
        className='p-3 bg-teal-200 rounded-e-md text-gray-600'
        type='submit'
        value='Send'
      />
    </form>
  )
}
