import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'
import { Link } from 'react-router-dom'

function ProductListing({ products }) {
  return (
    <div className="productlisting">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          category={product.category}
        />
      ))}
    </div>
  )
}

export default ProductListing