import axios from "axios";
import { orderActions } from "../slice/orders";
import { AppDispatch } from "../store";
import { Product } from "../../types/type";


export function createOrder(userId: string, cartList: Product[]) {
  const url = `http://localhost:8000/orders/${userId}`;
  const token = localStorage.getItem("Access_token");
  return async (dispatch: AppDispatch) => {
    await axios
      .post(url, cartList, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => dispatch(data.data))
      .catch((error) => console.log(error));
  };
}

export function fetchOrderData(userId: string) {
    const url = `http://localhost:8000/orders/${userId}`
    return async (dispatch: AppDispatch) => {
      const token = localStorage.getItem("Access_token");
      await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => dispatch(orderActions.setOrderList(data.data)))
  };
}