import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import filterSlice from "@/store/slices/filterSlice";
import typeSlice from "@/store/slices/typeSlice";
import uiSlice from "@/store/slices/uiSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        type: typeSlice,
        ui: uiSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch