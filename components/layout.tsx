import Footer from './footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='xl:w-1/2 mx-auto flex-grow p-8'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout