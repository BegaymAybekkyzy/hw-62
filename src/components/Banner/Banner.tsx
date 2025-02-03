import React from "react";
import "./Banner.css";
import ArrowLink from "../UI/ArrowLink/ArrowLink.tsx";

interface Props {
  title: string;
  description: string;
  type: string;
  index?: number;
}

const Banner: React.FC<Props> = ({ title, description, type, index }) => {
  return (
    <div
      className={`banner-${type} ${type === "small" ? `banner-${index}` : ""}`}
    >
      {type === "big" ? (
        <h1 className="main-title">{title}</h1>
      ) : (
        <h3 className="banner-title">{title}</h3>
      )}
      <p>{description}</p>

      {type === "big" ? (
        <a href="#" className="link-btn">
          Перейти в конструктор
        </a>
      ) : (
        <ArrowLink className="link-arrow" text="Подробнее" />
      )}
    </div>
  );
};

export default Banner;
