import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart:[]
}
const cartSlicer = createSlice(
    {
        name:"cart",
        initialState,
        reducers:{
            addToCart(state,action){
                state.cart.push(action.payload)


            },

            decreaseItems(state,action){
                
                let Decreaze = state.cart.findIndex((item)=>item.id === action.payload)
                if (Decreaze !== -1){
                    const newArry = [...state.cart];
                    newArry.splice(Decreaze, 1);
                    state.cart  = newArry
                }

            },

            deleteItems(state,action){
                let FilteredItems = state.cart.filter((i)=>i.id !== action.payload)
                state.cart = FilteredItems

            },
            clearCart(state,action){
                state.cart = []
            }


        }
    }
)

export const {addToCart,decreaseItems,deleteItems,clearCart} = cartSlicer.actions

export default cartSlicer.reducer;
