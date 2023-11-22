import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0,
        name : "nilu"
    },
    reducers:{
        increment: state =>{
            state.value += 1;
            state.name = "anu"
        },
        decrement: state =>{
            state.value -= 1;
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        //   }
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer