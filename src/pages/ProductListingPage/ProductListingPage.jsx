import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from '../Layout'
import Section from '../../components/Section/Section'
import FilterGroup from '../../components/FilterGroup/FilterGroup'
import ProductListing from '../../components/ProductListing/ProductListing'
import { products } from '../../data/products'
import './ProductListingPage.css'

const brandOptions = [
  { text: 'Adidas' },
  { text: 'K-Swiss' },
  { text: 'Nike' },
  { text: 'Puma' },
]

// Preço que a pessoa realmente paga (com desconto, se houver)
const finalPrice = (product) => product.priceDiscount ?? product.price

function ProductListingPage() {
  // Texto vindo da busca do Header: /products?filter=nike
  const [searchParams] = useSearchParams()
  const search = (searchParams.get('filter') || '').toLowerCase()

  const [order, setOrder] = useState('')
  const [brands, setBrands] = useState([])
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Marca ou desmarca uma marca na lista
  function toggleBrand(brand) {
    setBrands(
      brands.includes(brand)
        ? brands.filter((item) => item !== brand)
        : [...brands, brand],
    )
  }

  // 1) filtra pela busca e pelas marcas marcadas
  let visible = products.filter((product) => {
    const text = `${product.name} ${product.brand} ${product.category}`.toLowerCase()
    const matchesSearch = text.includes(search)
    const matchesBrand = brands.length === 0 || brands.includes(product.brand)
    return matchesSearch && matchesBrand
  })

  // 2) ordena (usando uma cópia, para não mexer na lista original)
  if (order === 'asc') {
    visible = [...visible].sort((a, b) => finalPrice(a) - finalPrice(b))
  } else if (order === 'desc') {
    visible = [...visible].sort((a, b) => finalPrice(b) - finalPrice(a))
  }

  const title = `${visible.length} ${visible.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`

  return (
    <Layout>
      <div className="container listing">
        <aside className="listing__sidebar">
          <label className="listing__order">
            Ordenar por
            <select value={order} onChange={(event) => setOrder(event.target.value)}>
              <option value="">Mais relevantes</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </label>

          <button
            type="button"
            className="listing__filter-toggle"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            {filtersOpen ? 'Esconder filtros' : 'Filtrar'}
          </button>

          <div className={`listing__filters ${filtersOpen ? 'listing__filters--open' : ''}`}>
            <h3>Filtrar por</h3>
            <hr />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={brandOptions}
              selected={brands}
              onChange={toggleBrand}
            />
          </div>
        </aside>

        <div className="listing__content">
          <Section title={title} titleAlign="left">
            <ProductListing products={visible} />
          </Section>
        </div>
      </div>
    </Layout>
  )
}

export default ProductListingPage