
import Category from '../../components/Category/Category'
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct'
import Hero from '../../components/Hero/Hero'
import NewArrival from '../../components/NewArrival/NewArrival'
import Offer from '../../components/Offer/Offer'
import ServiceFeature from '../../components/ServiceFeature/ServiceFeature'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Offer/>
      <Category/>
      <FeatureProduct/>
      <SpecialOffer/>
      <NewArrival/>
      <ServiceFeature/>
    </div>
  )
}

export default Home