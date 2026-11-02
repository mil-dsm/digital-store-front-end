import './HomePage.css'
import Layout from '../Layout'
import Section from '../../components/Section/Section'
import ProductListing from '../../components/ProductListing/ProductListing'
import { products } from '../../data/products'
// import Gallery from '../../components/Gallery/Gallery'

// Regra do README: a página só chama os componentes, sem lógica a mais.
function HomePage() {
  return (
    <Layout>
      {/* TODO 5.1: <Gallery images={...} width="1440px" height="681px" /> com as home-slide-N.jpeg */}

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="home-collections">
          <img src="/collection-1.png" alt="Coleção 1" />
          <img src="/collection-2.png" alt="Coleção 2" />
          <img src="/collection-3.png" alt="Coleção 3" />
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </Layout>
  )
}

export default HomePage
