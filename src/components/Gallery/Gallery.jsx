import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import './Gallery.css'

function Gallery({ images, width, height, radius, showThumbs, className = '' }) {
  // Índice da imagem em destaque (0 = primeira)
  const [current, setCurrent] = useState(0)

  const isFirst = current === 0
  const isLast = current === images.length - 1

  return (
    <div className={`gallery ${className}`} style={{ maxWidth: width }}>
      <div className="gallery__slide" style={{ height, borderRadius: radius }}>
        {/* Todas as imagens ficam lado a lado; deslocamos a barra para mostrar a atual */}
        <div className="gallery__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`Imagem ${index + 1}`} />
          ))}
        </div>

        <button
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setCurrent(current - 1)}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setCurrent(current + 1)}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {/* Miniaturas só aparecem se a prop showThumbs existir */}
      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery__thumb ${index === current ? 'gallery__thumb--active' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrent(index)}
            >
              <img src={image.src} alt={`Miniatura ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery