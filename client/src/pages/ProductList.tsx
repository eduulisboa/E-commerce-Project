import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";

import { AppDispatch, RootState } from "../redux/store";
import { fetchProductData } from "../redux/thunk/product";
import ProductItem from "../components/products/ProductItem";
import Loading from "../components/loading/Loading";
import SearchProduct from "../components/products/SearchProduct";


export default function ProductList() {
  const isLoading = useSelector((state:RootState) => state.products.isLoading)
  const favoriteList = useSelector((state:RootState) => state.products.favorites)
  const cartList = useSelector((state:RootState) => state.products.cart)
  const filteredProduct = useSelector((state:RootState) => state.products.filteredProduct)


  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProductData())
  },[dispatch])
  if (isLoading) {
    return <div><Loading /></div>
  }
  return <div>
    <SearchProduct/>
    <Grid container spacing={3}>
    {filteredProduct.map((item) => {
      return <Grid item lg={3} key={item.id}><ProductItem item={item} favoriteList={favoriteList} cartList={cartList}/>
      </Grid>
    })}
    </Grid>
  </div>;
}
