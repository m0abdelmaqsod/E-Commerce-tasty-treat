import axios from "axios";
import { productAction } from "./products";
import { allProduct } from "../../../Data";
import { reviewUser } from "../../../Data";

// ==== fetch products ==== //
export const fetchProduct = () => {
    return async (dispatch) => {
        try {
            // const response = await axios.get("http://localhost:8000/allProduct")
            // dispatch(productAction.setProducts(response.data))
            dispatch(productAction.setProducts(allProduct))

        } catch (error) {
            console.log(error);
        }
    }
}



// ==== get product by id ==== //
export const getProductById = (proId) => {
    return async (dispatch) => {
        try {
            // const response = await axios.get(`http://localhost:8000/allProduct/${proId}`)
            // dispatch(productAction.setSinglePro(response.data))

            const single = allProduct.find(pro => pro.id === +proId)
            dispatch(productAction.setSinglePro(single))

        } catch (error) {
            console.log(error);
        }
    }
}



// ====  get data reviews ==== //
export const getReviews = () => {
    return async (dispatch) => {
        try {
            // const response = await axios.get("http://localhost:8000/reviewUser")
            // dispatch(productAction.setReviewUser(response.data))
            dispatch(productAction.setReviewUser(reviewUser))
        } catch (error) {
            console.log(error);
        }
    }
}