import axios from "axios";
import { orderActions } from "../slice/orders";
import { AppDispatch } from "../store";


export function fetchOrderData(userId: string) {
    const url = `http://localhost:8000/orders/${userId}`
  return async (dispatch: AppDispatch) => {
    const response = await axios(url)
    const orderList = await response.data
    dispatch(orderActions.setOrderList(orderList))
  };
}