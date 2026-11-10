import starIcon from '../../assets/star-icon.svg'
import './BuyBox.css'

// Formato brasileiro, com 2 casas
const formatPrice = (value) => value.toFixed(2).replace('.', ',')

// "R$" pequeno + reais grandes + centavos pequenos
function Price({ value }) {
  const [reais, centavos] = formatPrice(value).split(',')
  return (
    <span className="buybox__price">
      <span className="buybox__currency">R$</span>
      <span className="buybox__integer">{reais}</span>
      <span className="buybox__cents">,{centavos}</span>
    </span>
  )
}

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
            <Price value={priceDiscount} />
            <span className="buybox__price buybox__price--old">{formatPrice(price)}</span>
          </>
        ) : (
          <Price value={price} />
        )}
      </div>

      <p className="buybox__label">Descrição do produto</p>
      <p className="buybox__description">{description}</p>

      {/* ProductOptions passados pela página */}
      {children}

      <button type="button" className="buybox__buy">COMPRAR</button>
    </div>
  )
}

export default BuyBox