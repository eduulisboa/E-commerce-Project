import React from "react";

import { Product } from "../types/product";


type Prop = {
  item: Product;
  favoriteList: Product[];
  cartList: Product[];
};

export default function ProductItem({ item }: Prop) {


  return (
    <div>
     <img src={item.image} alt={item.title} height="400" width="300" />
      <div>{item.title} </div>
      <div>${item.price} </div>
    </div>
  );
}