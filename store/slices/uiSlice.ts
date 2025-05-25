import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";

interface initialState {
    searchToggle: boolean
}

const initialState = {
    searchToggle: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setSearchToggle: (state: initialState, action: PayloadAction<boolean>) => {
            state.searchToggle = action.payload
        }
    }
})

export const {setSearchToggle} = uiSlice.actions

export const selectSearchToggle = (state: RootState) => state.ui.searchToggle

export default uiSlice.reducer