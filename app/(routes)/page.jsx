import ChatContent from '../_components/ChatContent'
import Footer from '../_components/Footer'
import Sidebar from '../_components/Sidebar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row items-center justify-between'>
      <Sidebar />
      <div className='absolute left-0 right-0 m-auto flex flex-col flex-1 items-center justify-center w-2/3 md:w-4/5 xl:w-11/12 break-all overflow-x-hidden'>
        <ChatContent />
        <Footer />
      </div>
    </main>
  )
}