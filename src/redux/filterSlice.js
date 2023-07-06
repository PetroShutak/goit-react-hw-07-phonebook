import { createSlice } from "@reduxjs/toolkit";

import { FILTER } from "./constants";

export const filterSlice = createSlice({
    name: FILTER,
    initialState: '',
    reducers: {
        setFilter: (state, action) => action.payload,
    },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

