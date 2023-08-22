import { Link } from "react-router-dom"
import { pages } from "../../data"
import "./style.css"

function Footer() {
  return (
    <footer>
      <ul className="ul-list">
        {
          pages.map(({ route, description }) => (
            <li className="li-item" key={route}>
              <Link
                to={route}
                style={{ textDecoration: 'none', color: 'var(--secondary-text-color)' }}
              >
                {description}
              </Link>
            </li>
          ))
        }
      </ul>
      <div id="footer">
        <a href="#top">
          © DEVinPharmacy LTDA | 💊
        </a>
      </div>
    </footer>
  )
}

export { Footer }