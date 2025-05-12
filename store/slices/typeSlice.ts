import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";

interface initialState {
    type: 'movies' | 'tvShows'
}

const initialState: initialState = {
    type: 'movies'
}

const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setType: (state: initialState, action: PayloadAction<'movies' | 'tvShows'>) => {
            state.type = action.payload
        }
    }
})

export const {setType} = typeSlice.actions

export const selectType = (state: RootState) => state.type.type

export default typeSlice.reducer