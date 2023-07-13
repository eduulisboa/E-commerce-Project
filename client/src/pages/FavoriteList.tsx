import React from 'react'
import { useSelector } from 'react-redux'

import { Grid } from '@mui/material'

import { RootState } from '../redux/store'
import FavoriteItem from '../components/products/FavoriteItem'


export default function FavoriteList() {

  const favoriteList = useSelector((state:RootState) => state.products.favorites)
  const cartList = useSelector((state:RootState) => state.products.cart)

  return (
    <Grid container spacing={3}>
    {favoriteList.map((item) => {
      return <Grid item lg={3} key={item.id}><FavoriteItem item={item} cartList={cartList} />
      </Grid>
    })}
    </Grid>
  )
}
