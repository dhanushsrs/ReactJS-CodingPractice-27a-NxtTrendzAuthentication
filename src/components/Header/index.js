// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />

        <button className="nav-mobile-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="nav-bar-img"
            alt="nav logout"
          />
        </button>
      </div>

      <div className="nav-content nav-bar-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-menu-item">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="nav-menu-item">
              Products
            </Link>
          </li>

          <li>
            <Link to="/cart" className="nav-menu-item">
              Cart
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </div>

    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/products">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
            />
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
