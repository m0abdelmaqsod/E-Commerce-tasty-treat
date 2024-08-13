import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import productSlice from "./products/products";







const store = configureStore({
    reducer: {
        pro: productSlice.reducer,
        cart: cartSlice.reducer,
    }
})



export default store;