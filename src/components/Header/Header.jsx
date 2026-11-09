import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import miniCart from '../../assets/mini-cart.svg'
import './Header.css'

// Os links ficam numa lista só, usada no menu do desktop e no menu lateral do celular
const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Produtos' },
  { to: '/categories', label: 'Categorias' },
  { to: '/orders', label: 'Meus Pedidos' },
]

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  )
}

function Header() {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)     // menu lateral (celular)
  const [searchOpen, setSearchOpen] = useState(false) // campo de busca (celular)
  const navigate = useNavigate()

  function handleSearch() {
    navigate(`/products?filter=${encodeURIComponent(search)}`)
    setSearchOpen(false)
  }

  return (
    <header className="header">
      <div className="header__top container">
        <button
          type="button"
          className="header__menu-button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <div className="header__logo">
          <Logo />
        </div>

        <div className={`header__search ${searchOpen ? 'header__search--open' : ''}`}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
          />
          <button type="button" onClick={handleSearch} aria-label="Buscar">
            <SearchIcon />
          </button>
        </div>

        <button
          type="button"
          className="header__search-toggle"
          aria-label="Abrir busca"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <SearchIcon />
        </button>

        <Link to="/signup" className="header__signup">Cadastre-se</Link>
        <Link to="/login" className="header__login">Entrar</Link>

        <div className="header__cart">
          <img src={miniCart} alt="Carrinho" />
          <span className="header__badge">2</span>
        </div>
      </div>

      {/* Navegação do desktop */}
      <nav className="header__nav container">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end}>{link.label}</NavLink>
        ))}
      </nav>

      {/* Menu lateral do celular: só existe enquanto menuOpen for true */}
      {menuOpen && (
        <div className="header__overlay" onClick={() => setMenuOpen(false)}>
          <aside className="header__drawer" onClick={(event) => event.stopPropagation()}>
            <p className="header__drawer-title">Páginas</p>
            <nav>
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="header__drawer-footer">
              <hr />
              <Link to="/login" className="header__drawer-login" onClick={() => setMenuOpen(false)}>Entrar</Link>
              <Link to="/signup" className="header__drawer-signup" onClick={() => setMenuOpen(false)}>Cadastre-se</Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}

export default Header