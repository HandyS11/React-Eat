import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appReducer";

const reducer = {
    appReducer: appReducer
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false
        })
},);