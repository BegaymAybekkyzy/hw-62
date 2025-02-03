import { IBanner } from "../../types";
import Banner from "../../components/Banner/Banner.tsx";
import CatalogItem from "../../components/CatalogItem/CatalogItem.tsx";
import "./Home.css";
import createUniqueID from "../../createUniqueID.ts";

const banners: IBanner[] = [
  {
    title: "Соберите шведскую стенку по своему желанию!",
    description:
      "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.",
    type: "big",
    id: createUniqueID(),
  },

  {
    title: "Собственное швейное производство",
    description: "Приглашаем к сотрудничеству",
    type: "small",
    id: createUniqueID(),
  },

  {
    title: "Посетите наш шоу-рум!",
    description: "Н.Новгород, ул.Народная 20 Ежедневно с 9:00 до 19:00",
    type: "small",
    id: createUniqueID(),
  },
];

const catalog = [
  {
    text: "Шведские стенки",
    icon: "ic-item-1",
    id: createUniqueID(),
  },

  {
    text: "Турники",
    icon: "ic-item-2",
    id: createUniqueID(),
  },

  {
    text: "Уличные комплексы",
    icon: "ic-item-3",
    id: createUniqueID(),
  },

  {
    text: "Тяжелая атлетика",
    icon: "ic-item-4",
    id: createUniqueID(),
  },

  {
    text: "Стойки под штангу",
    icon: "ic-item-5",
    id: createUniqueID(),
  },

  {
    text: "Единоборства",
    icon: "ic-item-6",
    id: createUniqueID(),
  },

  {
    text: "Фитнес",
    icon: "ic-item-7",
    id: createUniqueID(),
  },

  {
    text: "Весь каталог",
    icon: "ic-item-8",
    id: createUniqueID(),
  },
];

const Home = () => {
  return (
    <>
      <div className="main-block container">
        <div className="main-column">
          {banners
            .filter((item: IBanner) => item.type === "big")
            .map((item: IBanner) => {
              return (
                <Banner
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  type={item.type}
                />
              );
            })}
        </div>

        <div className="add-column">
          {banners
            .filter((item) => item.type === "small")
            .map((item, index) => {
              return (
                <Banner
                  key={item.id}
                  index={index}
                  title={item.title}
                  description={item.description}
                  type={item.type}
                />
              );
            })}
        </div>
      </div>

      <div className="catalog container">
        <h3 className="catalog-title">Каталог товаров</h3>
        <div className="catalog-items">
          {catalog.map((item) => (
            <CatalogItem key={item.id} text={item.text} icon={item.icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
