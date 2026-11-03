import './HomePage.css'
import Layout from '../Layout'
import Section from '../../components/Section/Section'
import ProductListing from '../../components/ProductListing/ProductListing'
import { products } from '../../data/products'
import Gallery from '../../components/Gallery/Gallery'

const slides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
]

// A página só chama os componentes, sem lógica a mais.
function HomePage() {
  return (
    <Layout>
      <Gallery images={slides} width="1440px" height="681px" />

      <div className="home-sections">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="home-collections">
            <img src="/collection-1.png" alt="Coleção 1" />
            <img src="/collection-2.png" alt="Coleção 2" />
            <img src="/collection-3.png" alt="Coleção 3" />
          </div>
        </Section>

        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  )
}

export default HomePage
