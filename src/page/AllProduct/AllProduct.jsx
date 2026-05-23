
import ProductCard from '../../components/ProductCard/ProductCard'
import { useSelector } from 'react-redux'

const AllProduct = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className='container-section'>
        <h2 class="text-3xl font-bold text-center mb-12">All Product</h2>
        <ProductCard products={products}/>
    </div>
  )
}

export default AllProduct