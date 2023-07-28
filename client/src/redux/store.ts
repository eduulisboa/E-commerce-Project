import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slice/products";
import userReducer from "./slice/user";
import orderReducer from "./slice/orders";

const store = configureStore({
    reducer: {
        products: productReducer,
        users: userReducer,
        orders: orderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
