import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav nav-hidden" id="mainNav">
      <ul className="container nav-list">
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/payment-delivery">Доставка и оплата</NavLink>
        </li>
        <li>
          <NavLink to="/about">О компании</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Портфолио</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
