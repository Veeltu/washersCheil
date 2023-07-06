import { configureStore } from "@reduxjs/toolkit";
import washersSlice from "./slice"

export const store = configureStore({
    reducer: {
        washers: washersSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch