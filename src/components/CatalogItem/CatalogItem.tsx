import React from "react";
import "./CatalogItem.css";

interface Props {
  text: string;
  icon: string;
}

const CatalogItem: React.FC<Props> = ({ text, icon }) => {
  return (
    <a href="#" className={`catalog-item ${icon}`}>
      <h5>{text}</h5>
    </a>
  );
};

export default CatalogItem;
