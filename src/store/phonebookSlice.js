import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  // contacts: {
  //   items: [],
  //   isLoading: false,
  //   error: null
  // },
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    fetchingData: (state, { payload }) => {
      state.contacts = payload;
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
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
        state.contacts.push(payload);
      },
    },
  },
});

export const { deleteContact, setFilter, addContact, fetchingData } =
  phonebookSlice.actions;

export default phonebookSlice.reducer;
