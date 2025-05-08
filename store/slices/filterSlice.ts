import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";

interface initialState {
    genres: number[]
    year: number | 2025
}

const initialState: initialState = {
    genres: [],
    year: 2025
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setAddGenres: (state: initialState, action: PayloadAction<number>) => {
            if (state.genres.includes(action.payload)) return;
            state.genres.push(action.payload);
        },
        setDeleteGenres: (state: initialState, action: PayloadAction<number>) => {
            state.genres = state.genres.filter(name => name !== action.payload)

        },
        setYear: (state: initialState, action: PayloadAction<number>) => {
            state.year = action.payload
        },
        setDeleteYear: () => {
            return initialState
        },
        setClearAll: () => {
            return initialState
        }
    }
})

export const {setAddGenres, setDeleteGenres, setDeleteYear, setYear, setClearAll} = filterSlice.actions

export const selectGenres = (state: RootState) => state.filter.genres
export const selectYear = (state: RootState) => state.filter.year

export default filterSlice.reducer