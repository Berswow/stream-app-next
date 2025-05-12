import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import filterSlice from "@/store/slices/filterSlice";
import typeSlice from "@/store/slices/typeSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        type: typeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch