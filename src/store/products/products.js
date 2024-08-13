import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    singlePro: [],
    reviewUser: [],
}

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {

        // ==== fetch products ==== //
        setProducts(state, action) {
            state.products = action.payload
        },


        // ==== get product by id ==== //
        setSinglePro(state, action) {
            state.singlePro = action.payload
        },


        // ====  get data reviews ==== //
        setReviewUser(state, action) {
            state.reviewUser = action.payload
        },
    }
})



export const productAction = productSlice.actions;

export default productSlice;

