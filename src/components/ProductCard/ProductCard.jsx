import './ProductCard.css'

// Props: id, image, name, price, priceDiscount
function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <div className="productcard">
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
    </div>
  )
}

export default ProductCard