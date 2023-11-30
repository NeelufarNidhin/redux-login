import { createSlice } from "@reduxjs/toolkit";


const local = localStorage.getItem("key");
const authSlice = createSlice({
    name:"auth",
    initialState:{
     auth : local && JSON.parse(local)
    //  auth : localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : null
       
    },
    reducers: {
		userLogin: (state, action) => {
        
         state.auth = action.payload
       //  localStorage.setItem('key', JSON.stringify(action.payload))
			
		},
		userLogout: (state) => {
			state.auth = null;
     // localStorage.removeItem('key');
		},
    }
})


export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;