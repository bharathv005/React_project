import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItems: (state, action) => {
            state.cartItems.splice(action.payload, 1);
        },
        clearItems: (state) => {
            state.cartItems.length = 0;
        }
    }

})

export default cartSlice.reducer;
export const { addItems, removeItems, clearItems } = cartSlice.actions;