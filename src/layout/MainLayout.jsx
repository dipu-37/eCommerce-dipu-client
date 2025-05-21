
import { Outlet } from 'react-router-dom'
import Header from '../components/ui/Header'
import Hero from '../components/ui/Hero'
import Footer from '../components/ui/Footer'

const MainLayout = () => {
  return (
    <div>
       <Header></Header>
       {/* <Hero></Hero> */}
       <Outlet />
       <Footer></Footer>

    </div>
  )
}

export default MainLayout
