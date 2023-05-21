import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import ClientOnly from './components/clientonly'
import ToasterProvider from './components/providers/toasterprovider'
import getCurrentUser from './actions/getcurrentuser'
import RentModal from './components/modals/rentmodal'
import LoginModal from './components/modals/loginmodal'
import RegisterModal from './components/modals/registermodal'
import SearchModal from './components/modals/searchmodal'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets:['latin'],
})


export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <SearchModal/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
        </body>
    </html>
  )
}
