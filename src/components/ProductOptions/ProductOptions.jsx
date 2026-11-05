import { useState } from 'react'
import './ProductOptions.css'

function ProductOptions({ options, radius, shape = 'square', type = 'text' }) {
  // Guarda qual opção está selecionada (começa sem nenhuma)
  const [selected, setSelected] = useState(null)

  return (
    <div className="product-options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`product-options__item product-options__item--${shape} ${selected === option ? 'product-options__item--selected' : ''
            }`}
          style={{
            // radius só vale para o formato quadrado
            borderRadius: shape === 'square' ? radius : undefined,
            // no tipo color, a opção vira a cor de fundo
            backgroundColor: type === 'color' ? option : undefined,
          }}
          onClick={() => setSelected(option)}
        >
          {type === 'text' ? option : null}
        </button>
      ))}
    </div>
  )
}

export default ProductOptions