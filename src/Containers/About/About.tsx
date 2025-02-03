import AdvantageCart from "../../components/AdvantageCart/AdvantageCart.tsx";
import BlockList from "../../components/BlockList/BlockList.tsx";
import "./About.css";
import ArrowLink from "../../components/UI/ArrowLink/ArrowLink.tsx";

const cardAdvantages = [
  {
    text: "Выставочный зал на 450 кв.м",
    icon: "ic-advantage-1",
  },

  {
    text: "90% товара в наличии на складе",
    icon: "ic-advantage-2",
  },

  {
    text: "Монтаж опытными специалистами",
    icon: "ic-advantage-3",
  },

  {
    text: "Отправляем в регионы с оплатой при получении",
    icon: "ic-advantage-4",
  },
];

const About = () => {
  return (
    <>
      <div className="about-company container">
        <h3 className="block-title fw-bold">О компании</h3>
        <p>
          Компания «Sportova» специализируется на продаже шведских стенок,
          детских площадок и тренажеров. Мы являемся официальными дилерами
          ведущих производителей шведских стенок и детских площадок.
        </p>

        <div className="company-advantages">
          {cardAdvantages.map((advantage, index) => (
            <AdvantageCart
              text={advantage.text}
              key={index}
              icon={advantage.icon}
            />
          ))}
        </div>
        <BlockList />
        <ArrowLink className="block-link" text="Подробнее" />
      </div>
    </>
  );
};

export default About;
