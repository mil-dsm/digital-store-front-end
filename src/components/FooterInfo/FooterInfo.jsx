import { Link } from 'react-router-dom'

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

export default FooterInfo