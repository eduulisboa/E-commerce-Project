import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'
import CartItem from '../components/products/CartItem'
import axios from 'axios'
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function CartList() {

  const cartList = useSelector((state:RootState) => state.products.cart)
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const total = cartList.reduce<number>((accumulator, current) => {
    const productTotal = current.price * current.quantity;
    return accumulator + productTotal;
  }, 0);

  function onClickHandler() {
    const token = localStorage.getItem("userToken");
    const url = `http://localhost:8000/orders/${userDetail?._id}`;

    axios
      .post(
        url,
        { productList: cartList },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "new data");
        if (res.status === 200) {
          alert("Thanks for shopping with us");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("please log in to make order");
          return;
        }
      });
  }

  return (
    <div className='cartList'>
      {cartList.map((item)=> {
        return <CartItem key={item._id} item={item} />
      })}
      <div>Total:{total} </div>
      <div>
      <Button variant="soft" endDecorator={<KeyboardArrowRight />} color="success" onClick={onClickHandler}>
        Checkout
      </Button>
      </div>
    </div>
  )
}
