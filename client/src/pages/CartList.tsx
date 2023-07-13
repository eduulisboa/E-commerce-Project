import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'
import CartItem from '../components/products/CartItem'


export default function CartList() {

  const cartList = useSelector((state:RootState) => state.products.cart)

  return (
    <div className='cartList'>
      {cartList.map((item)=> {
        return <CartItem key={item.id} item={item} />
      })}
    </div>
  )
}
