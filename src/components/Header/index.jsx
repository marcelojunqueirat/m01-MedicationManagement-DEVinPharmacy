import { Link } from "react-router-dom"
import { pages } from "../../data/pages"
import "./style.css"

function Header() {
  return (
    <header>
      <div id="titulo-sistema-header">
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'var(--secondary-text-color)' }}
        >
          <img src="./logo.png" alt="Logo do sistema Medication Management - DEVinPharmacy" />
        </Link>
        <h3>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: 'var(--secondary-text-color)' }}
          >
            Medication Management
          </Link>
        </h3>
      </div>

      <nav>
        <ul>
          {
            pages.map(({ route, description }) => (
              <li key={route}>
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
      </nav>
    </header>
  )
}

export { Header }