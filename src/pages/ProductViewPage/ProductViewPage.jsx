import { useParams } from 'react-router-dom'
import Layout from '../Layout'
import Section from '../../components/Section/Section'
import Gallery from '../../components/Gallery/Gallery'
import { getProductById } from '../../data/products'
import './ProductViewPage.css'
// import BuyBox from '../components/BuyBox/BuyBox'
// import ProductOptions from '../components/ProductOptions/ProductOptions'
// import ProductListing from '../components/ProductListing/ProductListing'
import ProductOptions from '../../components/ProductOptions/ProductOptions'

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
            {/* Teste BuyBox */}
            <h1>{product.name}</h1>
            <ProductOptions options={product.sizes} shape="square" radius="4px" type="text" />
            <ProductOptions options={product.colors} shape="circle" type="color" />
          </div>
        </div>

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <p>TODO: ProductListing</p>
        </Section>
      </div>
    </Layout>
  )
}

export default ProductViewPage
