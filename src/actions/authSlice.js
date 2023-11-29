import { createSlice } from "@reduxjs/toolkit";


const local = localStorage.getItem("key");
const authSlice = createSlice({
    name:"auth",
    initialState:{
       auth : local && JSON.parse(local)
       
    },
    reducers: {
		userLogin: (state, action) => {
         
         state.auth = action.payload
			
		},
		userLogout: (state) => {
			state.auth = null;
		},
    }
})


export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;