import ChatContent from './_components/ChatContent'
import Footer from './_components/Footer'
import Sidemenu from './_components/Sidemenu'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row items-center justify-between'>
      <Sidemenu />
      <div className='flex flex-col flex-1 items-center'>
        <ChatContent />
        <Footer />
      </div>
    </main>
  )
}
