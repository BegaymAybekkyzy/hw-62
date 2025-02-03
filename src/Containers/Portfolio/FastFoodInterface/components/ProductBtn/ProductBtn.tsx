import React from "react";
import "./ProductBtn.css";
import { IPRODUCTS } from "../../../../../types";

interface Props {
  product: IPRODUCTS;
  orderAddition: () => void;
}

const ProductBtn: React.FC<Props> = ({ product, orderAddition }) => {
  return (
    <>
      <button onClick={orderAddition} className="btn product-btn">
        <div>
          <img src={product.image} alt={product.name} />
        </div>

        <p className="product-name">{product.name}</p>
        <p>{product.price} KGS</p>
      </button>
    </>
  );
};

export default ProductBtn;
