import Layout from './Layout'
import Section from '../components/Section/Section'
// import FilterGroup from '../components/FilterGroup/FilterGroup'
// import ProductListing from '../components/ProductListing/ProductListing'
// import { useSearchParams } from 'react-router-dom'
// import { products } from '../data/products'

function ProductListingPage() {
  return (
    <Layout>
      <div className="container">
        {/* TODO 6.1: select "Ordenar por" (Menor preço / Maior preço), 308x60 */}
        {/* TODO 6.2: caixa "Filtrar por" com <FilterGroup /> (marca, categoria...) */}
        {/* TODO 6.3: título = total de produtos encontrados */}
        <Section title="0 produtos encontrados" titleAlign="left">
          <p>TODO: ProductListing</p>
        </Section>
      </div>
    </Layout>
  )
}

export default ProductListingPage
