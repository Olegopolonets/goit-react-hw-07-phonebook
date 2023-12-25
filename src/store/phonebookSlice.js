import { createSlice } from '@reduxjs/toolkit';
import {
  addContasctThunk,
  deleteContasctThunk,
  fetchContasctsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContasctsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContasctThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(addContasctThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.contacts.isLoading = false;
      })
      .addCase(fetchContasctsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContasctsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.error = payload;
      });
  },
});

export const {
  deleteContact,
  setFilter,
  addContact,
  fetchingData,
  isError,
  isLoading,
} = phonebookSlice.actions;

export default phonebookSlice.reducer;
