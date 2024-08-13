import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0

// console.log(items);


const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
}

// console.log(initialState);

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers: {

        // ========= add item ========== //
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    namePro: newItem.namePro,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            };
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);


            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map((item) => item)));

            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));

            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },




        // ========= remove item ========== //
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id.id);

            state.totalQuantity--;

            // console.log(existingItem);
            
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id.id);

            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);


            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map((item) => item)));

            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));

            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },





        // ========= delete item ========== //
        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id.id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id.id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map((item) => item)));

            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));

            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },
    },
})



export const cartActions = cartSlice.actions;


export default cartSlice;
