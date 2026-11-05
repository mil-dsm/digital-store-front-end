import { useParams } from 'react-router-dom'
import Layout from '../Layout'
import Section from '../../components/Section/Section'
import Gallery from '../../components/Gallery/Gallery'
import BuyBox from '../../components/BuyBox/BuyBox'
import ProductOptions from '../../components/ProductOptions/ProductOptions'
import ProductListing from '../../components/ProductListing/ProductListing'
import { products, getProductById } from '../../data/products'
import './ProductViewPage.css'

function ProductViewPage() {
  const { id } = useParams() // o ":id" da rota /product/:id
  const product = getProductById(id)

  if (!product) {
    return (
      <Layout>
        <div className="container"><p>Produto não encontrado.</p></div>
      </Layout>
    )
  }

  // Mostra 4 produtos, menos o que a pessoa já está vendo
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <Layout>
      <div className="container">
        <div className="product-view">
          <Gallery
            images={product.images}
            showThumbs
            width="700px"
            height="570px"
            radius="4px"
          />

          <div className="product-view__info">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <div>
                <p className="buybox__label">Tamanho</p>
                <ProductOptions options={product.sizes} shape="square" radius="4px" type="text" />
              </div>
              <div>
                <p className="buybox__label">Cor</p>
                <ProductOptions options={product.colors} shape="circle" type="color" />
              </div>
            </BuyBox>
          </div>
        </div>

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={related} />
        </Section>
      </div>
    </Layout>
  )
}

export default ProductViewPage