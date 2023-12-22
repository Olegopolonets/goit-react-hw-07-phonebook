import { configureStore } from '@reduxjs/toolkit';
import phonebookSlice from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});
