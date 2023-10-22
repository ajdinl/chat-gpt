import ChatContent from './_components/ChatContent'
import Footer from './_components/Footer'
import Sidebar from './_components/Sidebar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row items-center justify-between'>
      <Sidebar />
      <div className='flex flex-col flex-1 items-center'>
        <ChatContent />
        <Footer />
      </div>
    </main>
  )
}
