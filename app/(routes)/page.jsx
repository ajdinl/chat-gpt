import ChatContent from '@components/ChatContent'
import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'

export default function Home() {
  return (
    <main className='flex flex-row min-h-screen items-center justify-between'>
      <Sidebar />
      <div className='absolute left-0 right-0 top-10 flex flex-col flex-1 items-left justify-center break-all overflow-x-hidden'>
        <ChatContent />
        <div className='flex justify-center'>
          <Footer />
        </div>
      </div>
    </main>
  )
}
