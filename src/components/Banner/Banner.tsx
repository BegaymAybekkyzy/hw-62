import React from 'react';
import './Banner.css';

interface Props {
  title: string;
  description: string;
  type: string;
  index?: number;
}

const Banner: React.FC<Props> = ({title, description, type, index}) => {
  return (
    <div className={`banner-${type} ${type === "small" ? `banner-${index}` : ''}`}>
      {/*<div className={`banner-small banner-${index}`} key={index}>*/}
      {type === 'big'
        ? <h1 className="main-title">{title}</h1>
        : <h3 className="banner-title">{title}</h3>}
      <p>{description}</p>

      {type === 'big'
        ? <a href="#" className="link-btn">Перейти в конструктор</a>
        : <a href="#" className="link-arrow">Подробнее <span>&#8250;</span></a>}

    </div>
  );
};

export default Banner;