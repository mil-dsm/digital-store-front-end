import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ id, image, name, price, priceDiscount }) {
  return (
    <Link to={`/product/${id}`} className="productcard">
      <img src={image} alt={name} />
      <p>{name}</p>

      {priceDiscount ? (
        <>
          <p className="productcard__price productcard__price--old">${price}</p>
          <p className="productcard__price">${priceDiscount}</p>
        </>
      ) : (
        <p className="productcard__price">${price}</p>
      )}
    </Link>
  )
}

export default ProductCard