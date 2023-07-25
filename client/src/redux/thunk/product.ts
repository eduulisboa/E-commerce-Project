import axios from "axios"

import { productActions } from "../slice/products"
import { AppDispatch } from "../store"

const url = "deploy-7clzd9081-eduulisboa.vercel.app/products/"

export function fetchProductData() {
    return (dispatch:AppDispatch) => {
        axios
        .get(url)
        .then((data) => dispatch(productActions.setProductData(data.data)))
    }
}
