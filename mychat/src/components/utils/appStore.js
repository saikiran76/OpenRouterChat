import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import openai from "./openai";
// import chatSlice from "./chatSlice";



const store = configureStore({
    reducer:{
        app: appSlice,
        open: openai
        // chat: chatSlice
        
    }
})

export default store;
