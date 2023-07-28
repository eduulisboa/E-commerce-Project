import React from "react";
import { ProductOrder } from "../../types/type";

type Prop = {
  product: ProductOrder;
};
export default function ProductOrderList({ product }: Prop) {
  return (
    <div>
        <div>
         <img src={product.image} alt={product.title} width="80px" height="100px" />
        </div>
        <p>{product.title}</p>
        <p>{product.quantity}</p>
    </div>
  );
}