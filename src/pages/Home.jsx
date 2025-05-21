

import HeroSection from '../components/ui/Hero'
import Products from '../components/ui/Product'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <HeroSection></HeroSection>
      {/* <BestSellers></BestSellers> */}
      <Products></Products>
    </div>
  )
}

export default Home
