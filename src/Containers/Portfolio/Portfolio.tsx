import { NavLink } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="portfolio-container">
          <div className="info-block">
            <div className="portfolio-photo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4360/4360835.png"
                alt=""
              />
            </div>

            <h2>Ученик</h2>
            <table className="info-list">
              <tbody>
                <tr>
                  <td>Фамилия:</td>
                  <td>Айбек кызы</td>
                </tr>
                <tr>
                  <td>Имя:</td>
                  <td>Бегайым</td>
                </tr>
                <tr>
                  <td>Почта:</td>
                  <td>user22@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="work-block">
            <h2>Список работ</h2>
            <ul className="work-list">
              <li>
                <NavLink to="fast-food-interface">
                  Интерфейс оператора фастфуда
                </NavLink>
              </li>

              <li>
                <NavLink to="burger-constructor">Конструктор бургера</NavLink>
              </li>

              <li>
                <NavLink to="game">Игра "Найди спрятанный предмет"</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;