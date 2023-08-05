import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import ProductOrderList from "./ProductOrder";
import { fetchOrderData } from "../../redux/thunk/order";

export default function OrderList() {
  const orderList = useSelector((state: RootState) => state.orders.orderList);
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userDetail) {
      dispatch(fetchOrderData(userDetail._id));
    }
  }, [dispatch,userDetail]);
  console.log(orderList, "order");
  console.log(userDetail?._id, "user detail")
  return (
    <div>
      <h1>Your Orders: </h1>
      {orderList.map((item) => (
        <div>
          <div> {new Date(item.createdAt).toLocaleDateString()}</div>
          <div>
            {item.productList.map((product) => (
              <ProductOrderList product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}