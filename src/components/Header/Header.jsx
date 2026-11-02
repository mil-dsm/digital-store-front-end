import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import miniCart from '../../assets/mini-cart.svg'
import './Header.css'

function Header() {
  // O que a pessoa digita na busca fica guardado neste "estado"
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  // Vai para /products?filter=texto
  function handleSearch() {
    navigate(`/products?filter=${encodeURIComponent(search)}`)
  }

  return (
    <header className="header">
      <div className="header__top container">
        <Logo />

        <div className="header__search">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
          />
          <button type="button" onClick={handleSearch} aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
          </button>
        </div>

        <Link to="/signup" className="header__signup">Cadastre-se</Link>
        <Link to="/login" className="header__login">Entrar</Link>
        <img src={miniCart} alt="Carrinho" />
      </div>

      <nav className="header__nav container">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/categories">Categorias</NavLink>
        <NavLink to="/orders">Meus Pedidos</NavLink>
      </nav>
    </header>
  )
}

export default Header