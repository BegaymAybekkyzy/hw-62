import "./Toolbar.css";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <NavLink to="/" className="logo">
            <img src={logo} alt="Sportova спортивные комплексы" />
          </NavLink>
        </div>

        <div className="contacts">
          <span className="phone">8800 550-22-16</span>
          Ежедневно с 09:00 до 19:00
        </div>

        <a href="#" className="cart">
          <b>Корзина</b> (0)
          <span>Нет товаров</span>
        </a>
      </div>
    </header>
  );
};

export default Toolbar;
