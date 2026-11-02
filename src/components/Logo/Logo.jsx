import { Link } from 'react-router-dom'
import logoHeader from '../../assets/logo-header.svg'
import logoFooter from '../../assets/logo-footer.svg'

function Logo({ variant = 'header' }) {
  const src = variant === 'footer' ? logoFooter : logoHeader
  return (
    <Link to="/">
      <img src={src} alt="Digital Store" width="253" height="44" style={{ maxWidth: '100%', height: 'auto' }} />
    </Link>
  )
}

export default Logo
