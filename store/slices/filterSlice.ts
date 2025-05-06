import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";

interface initialState {
    genres: string[]
    years: number[]
}

const initialState: initialState = {
    genres: [],
    years: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setAddGenres: (state: initialState, action: PayloadAction<string>) => {
            state.genres.push(action.payload)
        },
        setDeleteGenres: (state: initialState, action: PayloadAction<string>) => {
            state.genres = state.genres.filter(name => name !== action.payload)

        },
        setAddYears: (state: initialState, action: PayloadAction<number>) => {
            state.years.push(action.payload)
        },
        setDeleteYears: (state: initialState, action: PayloadAction<number>) => {
            state.years = state.years.filter(name => name !== action.payload)
        },
    }
})

export const {setAddGenres, setDeleteGenres, setDeleteYears, setAddYears} = filterSlice.actions

export const selectGenres = (state: RootState) => state.filter.genres
export const selectYears = (state: RootState) => state.filter.years

export default filterSlice.reducer