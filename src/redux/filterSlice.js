import { createSlice } from "@reduxjs/toolkit";

import { FILTER } from "./constants";

export const filterSlice = createSlice({
    name: FILTER,
    initialState: '',
    reducers: {
        changeFilter: (state, action) => action.payload,
    },
});

