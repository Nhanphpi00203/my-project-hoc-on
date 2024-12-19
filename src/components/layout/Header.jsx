import { NavLink } from 'react-router-dom'
import './Header.css' // Import CSS cho Header

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'active-link' : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? 'active-link' : undefined
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book"
              className={({ isActive }) =>
                isActive ? 'active-link' : undefined
              }
            >
              Book
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <h1>My Website</h1>
      </div>
    </header>
  )
}

export default Header
