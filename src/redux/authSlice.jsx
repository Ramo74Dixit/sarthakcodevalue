import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLoggedIn:false,
        username:null
    },
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true;
            state.username=action.payload;
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.username=null;
        }
    }
});

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;