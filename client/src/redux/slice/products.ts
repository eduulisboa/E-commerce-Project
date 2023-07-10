import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/product";

type InitialState ={
    products: Product[]
}

const initialState: InitialState = {
    products:[]
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        setProductData: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    }
})

export const productActions = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer
