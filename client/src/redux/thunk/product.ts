import axios from "axios"

import { productActions } from "../slice/products"
import { AppDispatch } from "../store"

const url = "https://backend-fqad.onrender.com/products/"

export function fetchProductData() {
    return (dispatch:AppDispatch) => {
        axios
        .get(url)
        .then((data) => dispatch(productActions.setProductData(data.data)))
    }
}
