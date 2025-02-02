import { IBanner } from '../../types';
import Banner from '../../components/Banner/Banner.tsx';
import CatalogItem from '../../components/CatalogItem/CatalogItem.tsx';
import './Home.css';

const banners: IBanner[] = [
  {
    title: 'Соберите шведскую стенку по своему желанию!',
    description: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.',
    type: 'big'
  },

  {
    title: 'Собственное швейное производство',
    description: 'Приглашаем к сотрудничеству',
    type: 'small'
  },

  {
    title: 'Посетите наш шоу-рум!',
    description: 'Н.Новгород, ул.Народная 20 Ежедневно с 9:00 до 19:00',
    type: 'small'
  },

];

const catalog = [
  {
    text: 'Шведские стенки',
    icon: 'ic-item-1'
  },

  {
    text: 'Турники',
    icon: 'ic-item-2'
  },

  {
    text: 'Уличные комплексы',
    icon: 'ic-item-3'
  },

  {
    text: 'Тяжелая атлетика',
    icon: 'ic-item-4'
  },

  {
    text: 'Стойки под штангу',
    icon: 'ic-item-5'
  },

  {
    text: 'Единоборства',
    icon: 'ic-item-6'
  },

  {
    text: 'Фитнес',
    icon: 'ic-item-7'
  },

  {
    text:  'Весь каталог',
    icon: 'ic-item-8'
  },

];

const Home = () => {

  return (
    <>
      <div className="main-block container">
        <div className="main-column">
          {banners.map((item: IBanner, index) => {
            if (item.type === 'big') {
              return (
                <Banner key={index} title={item.title} description={item.description} type={item.type}/>
              );
            }
          })}
        </div>

        <div className="add-column">
          {banners.map((item: IBanner, index) => {
            if (item.type === 'small') {
              return (
                <Banner index={index} title={item.title} description={item.description} type={item.type}/>
              );
            }
          })}
        </div>
      </div>

      <div className="catalog container">
        <h3 className="catalog-title">Каталог товаров</h3>
        <div className="catalog-items">
          {catalog.map((item, index) => (
            <CatalogItem text={item.text} key={index} icon={item.icon}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;