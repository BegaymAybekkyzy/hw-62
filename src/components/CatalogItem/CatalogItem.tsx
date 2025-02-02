import React from 'react';
import "./CatalogItem.css";

interface Props {
  text: string;
  index: number;
}

const CatalogItem: React.FC<Props> = ({text, index}) => {
  return (
    <a href="#" className={`catalog-item ic-item-${index}`}>
      <h5>{text}</h5>
    </a>
  );
};

export default CatalogItem;