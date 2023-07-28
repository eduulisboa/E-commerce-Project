import React from "react";
import { useDispatch } from "react-redux";

import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { productActions } from "../../redux/slice/products";
import { AppDispatch } from "../../redux/store";
import { Product } from "../../types/type";
import { useNavigate } from "react-router-dom";


type Prop = {
  item: Product;
  favoriteList: Product[];
  cartList: Product[];
};

export default function ProductItem({ item, favoriteList, cartList }: Prop) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function getProductDetail(item: Product) {
    dispatch(productActions.getProductDetail(item));
    navigate(`/products/${item._id}`);
  }

  function setFavoriteProducts(item: Product) {
    dispatch(productActions.updateFavoriteList(item));
  }

  function isFavorite(item: Product) {
    return favoriteList.some((favorite) => favorite._id === item._id);
  }
  function setCartProducts(item: Product) {
    dispatch(productActions.updateCartList(item));
  }
  function isCart(item: Product) {
    return cartList.some((cart) => cart._id === item._id);
  }

  return (
    <div>
      <IconButton onClick={() => getProductDetail(item)}>
        <img src={item.image} alt={item.title} height="400" width="300" />
      </IconButton>
      <div>{item.title} </div>
      <div>${item.price} </div>
      <div>
        <IconButton onClick={() => setFavoriteProducts(item)}>
          <FavoriteIcon color={isFavorite(item) ? "secondary" : "primary"} />
        </IconButton>
        <IconButton onClick={() => setCartProducts(item)}>
          <AddShoppingCartIcon color={isCart(item) ? "secondary" : "primary"} />
        </IconButton>
      </div>
    </div>
  );
}
