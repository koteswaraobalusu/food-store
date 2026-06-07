import { configureStore } from "@reduxjs/toolkit";
import userLocationReucer from './userLocationSlice'
export const store=configureStore({
    reducer:{
        location:userLocationReucer,
    }
})