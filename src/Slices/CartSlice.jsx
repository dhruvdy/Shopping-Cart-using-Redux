import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add : (state,action)=>{state.push(action.payload)},
        remove : (state,action)=>{
            console.log(state)
            return state.filter((item)=>{return item.id !== action.payload})
        }
    }
})

export default cartSlice.reducer;
export const {add,remove} = cartSlice.actions;