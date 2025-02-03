import React from "react";
import OrderPrice from "../OrderPrice/OrderPrice.tsx";
import AlternativeText from "../AlternativeText/AlternativeText.tsx";
import OrderItem from "./OrderItem/OrderItem.tsx";
import { IProducts } from "../../../../../types";

interface Props {
  totalPrice: number;
  products: IProducts[];
  deleteProduct: (index: number) => void;
}

const OrderList: React.FC<Props> = ({
  totalPrice,
  products,
  deleteProduct,
}) => {
  return (
    <>
      {totalPrice > 0 ? (
        <>
          {products.map((product, index) => {
            if (product.count) {
              return (
                <OrderItem
                  key={index}
                  product={product}
                  index={index}
                  deleteProduct={() => deleteProduct(index)}
                />
              );
            }
          })}
          <OrderPrice totalPrice={totalPrice} />
        </>
      ) : (
        <AlternativeText text="Order is empty! Please add some items" />
      )}
    </>
  );
};

export default OrderList;
