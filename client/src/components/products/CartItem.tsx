import React from 'react'

import { CartProduct } from '../../types/product'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { productActions } from '../../redux/slice/products'


type Prop = {
   item: CartProduct
}

export default function CartItem({item}:Prop) {

  const dispatch = useDispatch<AppDispatch>()
  
  function handleIncrement() {
    dispatch(productActions.incrementQuantity(item.id));
  }


  const handleDecrement = () => {
    dispatch(productActions.decrementQuantity(item.id));
  };
    
  return (
    <div className='cartItem'>
        <div><img src={item.image} alt={item.title} height="100" width="80"/></div>
        <div>{item.title}</div>
        <div>${item.price} </div>
        <div>
        Quantity: {item.quantity}
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}
