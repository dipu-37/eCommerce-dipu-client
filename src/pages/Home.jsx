

import HeroSection from '../components/ui/Hero'
import Products from '../components/ui/Product'
import BestProducts from "../components/ui/BestProducts"

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <HeroSection></HeroSection>
       <h2 className="text-2xl font-medium md:text-3xl text-gray-800 mb-4 mt-8">Best Sellers</h2>
       <BestProducts></BestProducts>
    </div>
  )
}

export default Home
