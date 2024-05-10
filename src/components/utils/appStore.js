import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import openai from "./openai";
import userSlice from "./userSlice";




const store = configureStore({
    reducer:{
        app: appSlice,
        open: openai,
        user: userSlice

        
    }
})

export default store;
