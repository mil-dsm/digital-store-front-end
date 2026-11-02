import { Link } from 'react-router-dom'
import './Section.css'

// EXEMPLO PRONTO. Props:
//  - title, titleAlign ("left" | "center", padrão "left"),
//  - link ({ text, href }) opcional, children = conteúdo da seção.
function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="section container">
      <div className={`section__header section__header--${titleAlign}`}>
        <h2 className="section__title">{title}</h2>
        {link && (
          // Link interno (/products) usa <Link> para não recarregar a página.
          // Link externo (https://...) usa <a> normal.
          link.href.startsWith('/') ? (
            <Link className="section__link" to={link.href}>{link.text}</Link>
          ) : (
            <a className="section__link" href={link.href}>{link.text}</a>
          )
        )}
      </div>
      {children}
    </section>
  )
}

export default Section
