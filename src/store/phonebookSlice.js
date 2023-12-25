import { createSlice } from '@reduxjs/toolkit';
import { fetchContasctsThunk } from './operations';

const initialState = {
  // contacts: [],
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
  reducers: {
    // fetchingData: (state, { payload }) => {
    //   state.contacts.items = payload;
    //   state.contacts.isLoading = false;
    // },
    isLoading: (state, { payload }) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    },
    isError: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    deleteContact: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== payload
      );
      state.contacts.isLoading = false;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    addContact: (state, { payload }) => {
      state.contacts.items.push(payload);
      state.contacts.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContasctsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
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
