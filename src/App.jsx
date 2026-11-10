import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProductListingPage from './pages/ProductListingPage/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage/ProductViewPage'
import PlaceholderPage from './pages/PlaceholderPage'

// Aqui ficam as rotas: cada URL aponta para uma página.
// Padronizamos /products (o README mistura /products e /produtos).
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />

        {/* Páginas sem especificação: só um texto "em construção". */}
        <Route path="/categories" element={<PlaceholderPage title="Categorias" />} />
        <Route path="/orders" element={<PlaceholderPage title="Meus Pedidos" />} />
        <Route path="/login" element={<PlaceholderPage title="Entrar" />} />
        <Route path="/signup" element={<PlaceholderPage title="Cadastre-se" />} />
        <Route path="*" element={<PlaceholderPage title="Página não encontrada" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
