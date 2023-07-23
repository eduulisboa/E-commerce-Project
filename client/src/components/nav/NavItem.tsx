import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export default function NavItem() {
const favoriteList = useSelector((state:RootState) => state.products.favorites)
  const cartList = useSelector((state:RootState) => state.products.cart)
  return (
    <div>NavItem</div>
  )
}
