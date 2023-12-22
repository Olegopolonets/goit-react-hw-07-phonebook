import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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
    fetchingData: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    },
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
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    addContact: {
      prepare: ({ name, phone }) => {
        return {
          payload: {
            id: nanoid(5),
            name,
            phone,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.items.push(payload);
      },
    },
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
