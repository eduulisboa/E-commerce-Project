import React from 'react'
import { useDispatch } from 'react-redux';

import { IconButton } from '@mui/material';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Product } from '../../types/product'
import { AppDispatch } from '../../redux/store';
import { productActions } from '../../redux/slice/products';


type Prop = {
    item: Product
    cartList: Product[];
}

export default function FavoriteItem({item,cartList}:Prop) {

  const dispatch = useDispatch<AppDispatch>();

  function setCartProducts(item: Product) {
    dispatch(productActions.updateCartList(item));
  }
  function isCart(item: Product) {
    return cartList.some((cart) => cart._id === item._id);
  }


  return (
    <div>
        <div><img src={item.image} alt={item.title} height="400" width="300"/></div>
        <div>{item.title}</div>
        <div>${item.price} </div>
        <div>
          <IconButton onClick={() => setCartProducts(item)}>
            <AddShoppingCartIcon color={isCart(item) ? "secondary" : "primary"} />
          </IconButton>
        </div>
    </div>
  )
}
