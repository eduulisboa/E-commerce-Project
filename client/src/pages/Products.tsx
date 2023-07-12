import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";

import { AppDispatch, RootState } from "../redux/store";
import { fetchProductData } from "../redux/thunk/product";
import ProductItem from "../products/ProductItem";



export default function Products() {

  const filteredProduct = useSelector((state:RootState) => state.products.products)


  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProductData())
  },[dispatch])

  return <div>
    <Grid container spacing={3}>
    {filteredProduct.map((item) => {
      return <Grid item lg={3} key={item.id}> <ProductItem item={item} favoriteList={[]} cartList={[]}/>
      </Grid>
    })}
    </Grid>
  </div>;
}
