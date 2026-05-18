
import Category from '../../components/Category/Category'
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct'
import Hero from '../../components/Hero/Hero'
import Offer from '../../components/Offer/Offer'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Offer/>
      <Category/>
      <FeatureProduct/>
      <SpecialOffer/>
    </div>
  )
}

export default Home