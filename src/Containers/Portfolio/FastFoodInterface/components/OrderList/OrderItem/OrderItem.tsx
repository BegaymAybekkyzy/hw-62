import React from "react";
import "./OrderItem.css";
import { IProducts } from "../../../../../../types";

interface Props {
  product: IProducts;
  deleteProduct: (index: number) => void;
  index: number;
}

const OrderItem: React.FC<Props> = ({ product, deleteProduct, index }) => {
  return (
    <div className="order-item">
      <div>{product.name}</div>
      <div>x{product.count}</div>
      <p>Price: {product.price} KGS</p>
      <button className="btn" onClick={() => deleteProduct(index)}>
        Delete
      </button>
    </div>
  );
};

export default OrderItem;
