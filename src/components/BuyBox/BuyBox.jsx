import starIcon from '../../assets/star-icon.svg'
import './BuyBox.css'

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <div className="buybox">
      <h1 className="buybox__name">{name}</h1>
      <p className="buybox__reference">Ref: {reference}</p>

      <div className="buybox__rating">
        <span className="buybox__stars">
          {stars} <img src={starIcon} alt="" />
        </span>
        <span className="buybox__reviews">({rating} avaliações)</span>
      </div>

      {/* Com desconto: preço novo grande + preço antigo pequeno riscado */}
      <div className="buybox__prices">
        {priceDiscount ? (
          <>
            <span className="buybox__price">${priceDiscount}</span>
            <span className="buybox__price buybox__price--old">${price}</span>
          </>
        ) : (
          <span className="buybox__price">${price}</span>
        )}
      </div>

      <p className="buybox__label">Descrição do produto</p>
      <p className="buybox__description">{description}</p>

      {/* Aqui entram os ProductOptions passados pela página */}
      {children}

      <button type="button" className="buybox__buy">COMPRAR</button>
    </div>
  )
}

export default BuyBox