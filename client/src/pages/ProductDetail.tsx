import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'



export default function ProductDetail() {

  const productDetail = useSelector((state:RootState) => state.products.product)

  if(!productDetail)
  return <div>no data</div>
  return (
    <div>
      <img src={productDetail.image} alt={productDetail.title} height="400px" width="300px" />
      <div>{productDetail.title}</div>
      <div>${productDetail.price}</div>
      <p>A versatile and high-quality paint designed to bring your artistic visions to life. Whether you're a professional artist or a DIY enthusiast, this paint is your perfect companion for any project, indoors or outdoors.</p>
    </div>
  )
}
