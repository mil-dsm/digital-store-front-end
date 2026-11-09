import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ id, image, name, category, price, priceDiscount }) {
  return (
    <Link to={`/product/${id}`} className="productcard">
      <img src={image} alt={name} />
      <p className="productcard__category">{category}</p>
      <p className="productcard__name">{name}</p>
      <div className="productcard__prices">
        {priceDiscount ? (
          <>
            <span className="productcard__price productcard__price--old">${price}</span>
            <span className="productcard__price">${priceDiscount}</span>
          </>
        ) : (
          <span className="productcard__price">${price}</span>
        )}
      </div>
    </Link>
  )
}

export default ProductCard