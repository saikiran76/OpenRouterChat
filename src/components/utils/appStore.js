/**
 * Redux Store for Universal state management
 * appSlice - states and actions of Sidebar collapse and closing
 * openSlice - for chat (responses array) management after fetch
 * userSlice - for user details, login and logout
 */



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
