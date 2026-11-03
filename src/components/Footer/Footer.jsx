import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import './Footer.css'

// Componente de informações (README 3.2.1): título + lista de links.
function FooterInfo({ title, informations }) {
  return (
    <div className="footer__info">
      <h3>{title}</h3>
      <ul>
        {informations.map((info) => (
          <li key={info.text}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  const informacao = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/jobs' },
    { text: 'Meus Pedidos', link: '/orders' },
  ]
  const categorias = [
    { text: 'Camisetas', link: '/products' },
    { text: 'Calças', link: '/products' },
    { text: 'Bonés', link: '/products' },
    { text: 'Headphones', link: '/products' },
    { text: 'Tênis', link: '/products' },
  ]

  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__brand">
          <Logo variant="footer" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com"><img src={facebook} alt="Facebook" /></a>
            <a href="https://instagram.com"><img src={instagram} alt="Instagram" /></a>
            <a href="https://twitter.com"><img src={twitter} alt="Twitter" /></a>
          </div>
        </div>

        <FooterInfo title="Informação" informations={informacao} />
        <FooterInfo title="Categorias" informations={categorias} />

        <div className="footer__info">
          <h3>Contato</h3>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <hr />
      <p className="footer__copy">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  )
}

export default Footer