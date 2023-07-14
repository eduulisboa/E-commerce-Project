import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CartProduct, Product } from "../../types/product";

type InitialState = {
    products: Product[]
    filteredProduct: Product[]
    isLoading: boolean
    favorites: Product[]
    cart: CartProduct[]
    product: null | Product
}


const initialState: InitialState = {
    products: [],
    filteredProduct: [],
    isLoading: true,
    favorites: [],
    cart: [],
    product: null

}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        setProductData: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
            state.filteredProduct = action.payload
            state.isLoading = false
        },
        searchProducts: (state,action: PayloadAction<string>) =>{
            const result = state.products.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.filteredProduct = result
        },
        getProductDetail: (state, action: PayloadAction<Product> ) =>{
            const result = action.payload;
            state.product = result
        },
        updateFavoriteList: (state,action: PayloadAction<Product>) => {
            const result = state.favorites.some((item) => item._id === action.payload._id)
              if (result) {
                state.favorites = state.favorites.filter((item) => item._id !== action.payload._id)
              } else {
                state.favorites.push(action.payload);
              }
        },
        updateCartList: (state, action: PayloadAction<Product>) => {
          const result = state.cart.some((item) => item._id === action.payload._id);
          if (result) {
            state.cart = state.cart.filter((item) => item._id !== action.payload._id);
          } else {
            state.cart.push({...action.payload, quantity: 1});
          }
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
          const item = state.cart.find((item) => item._id === action.payload);
          if (item) {
            item.quantity += 1;
          }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
          const item = state.cart.find((item) => item._id === action.payload);
          if (item && item.quantity > 1) {
            item.quantity -= 1;
          }
        },
    }
})

export const productActions = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer
