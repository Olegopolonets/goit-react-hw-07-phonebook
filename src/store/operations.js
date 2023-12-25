import axios from 'axios';
import {
  addContact,
  deleteContact,
  fetchingData,
  isError,
  isLoading,
} from './phonebookSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6585c767022766bcb8c95914.mockapi.io';

export const fetchContasctsThunk = createAsyncThunk(
  'fetchContascts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContasctsThunk = () => async dispatch => {
//   try {
//     dispatch(isLoading());
//     const { data } = await axios.get('contacts');
//     console.log(data);
//     dispatch(fetchingData(data));
//   } catch (error) {
//     dispatch(isError(error.message));
//   }
// };

export const deleteContasctThunk = id => async dispatch => {
  try {
    dispatch(isLoading());
    const { data } = await axios.delete(`contacts/${id}`);
    console.log('deleteID:', data);
    dispatch(deleteContact(data.id));
  } catch (error) {
    dispatch(isError(error.message));
  }
};

export const addContasctThunk =
  (nameContast, phoneNumber) => async dispatch => {
    try {
      dispatch(isLoading());
      const { data } = await axios.post('contacts', {
        name: nameContast,
        phone: phoneNumber,
      });
      console.log('addContasctThunk:', data);
      dispatch(addContact(data));
    } catch (error) {
      dispatch(isError(error.message));
    }
  };
