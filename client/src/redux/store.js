import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./Mode/ModeSlice";


export const store = configureStore({
    reducer: {
        global: globalReducer
    }
});