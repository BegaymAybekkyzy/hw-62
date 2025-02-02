import { IBanner } from '../../types';
import Banner from '../../components/Banner/Banner.tsx';
import './Home.css';
import CatalogItem from '../../components/CatalogItem/CatalogItem.tsx';

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

const catalog: string[] = [
  'Шведские стенки',
  'Турники',
  'Уличные комплексы',
  'Тяжелая атлетика',
  'Стойки под штангу',
  'Единоборства',
  'Фитнес',
  'Весь каталог'
];

const Home = () => {

  return (
    <>
      <div className="main-block container">
        <div className="main-column">
          {banners.map((item: IBanner) => {
            if (item.type === 'big') {
              return (
                <Banner title={item.title} description={item.description} type={item.type}/>
              );
            }
          })}
        </div>

        <div className="add-column">
          {banners.map((item: IBanner, index) => {
            if (item.type === 'small') {
              console.log(item.title);
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
            <CatalogItem text={item} key={index} index={index + 1}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;