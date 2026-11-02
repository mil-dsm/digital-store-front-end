import { useParams } from 'react-router-dom'
import Layout from './Layout'
import Section from '../components/Section/Section'
import { getProductById } from '../data/products'
// import Gallery from '../components/Gallery/Gallery'
// import BuyBox from '../components/BuyBox/BuyBox'
// import ProductOptions from '../components/ProductOptions/ProductOptions'
// import ProductListing from '../components/ProductListing/ProductListing'

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
        {/* TODO 7.1: <Gallery images={product.images} showThumbs width="700px" height="570px" radius="4px" /> */}
        {/* TODO 7.3: <BuyBox ...> com dois <ProductOptions /> (tamanho e cor) como filhos */}
        <h1>{product.name}</h1>

        {/* TODO 7.4: Section "Produtos recomendados" com link { text: 'Ver todos', href: '/products' } */}
        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <p>TODO: ProductListing</p>
        </Section>
      </div>
    </Layout>
  )
}

export default ProductViewPage
