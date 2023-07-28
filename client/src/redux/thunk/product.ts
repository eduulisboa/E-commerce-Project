import axios from "axios"

import { productActions } from "../slice/products"
import { AppDispatch } from "../store"

const url = "http://localhost:8000/products/"

export function fetchProductData() {
    return (dispatch:AppDispatch) => {
        axios
        .get(url)
        .then((data) => dispatch(productActions.setProductData(data.data)))
    }
}
