import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { CONTACTS } from './constants';

export const conctactsSlice = createSlice({
  name: CONTACTS,
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default conctactsSlice.reducer;
