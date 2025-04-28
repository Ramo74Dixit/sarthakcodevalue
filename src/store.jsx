// store

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"

const store = configureStore({
    reducer :{
        counter : counterReducer
    }
});


export default store;


// login -> Welcome {username}
// logout ->------