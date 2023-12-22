// https://6585c767022766bcb8c95914.mockapi.io/contacts

import axios from 'axios';
import { fetchingData } from './phonebookSlice';

axios.defaults.baseURL = 'https://6585c767022766bcb8c95914.mockapi.io';

export const fetchContasctsThunk = () => async dispatch => {
  try {
    const { data } = await axios.get('contacts');
    console.log(data);
    dispatch(fetchingData(data));
  } catch (error) {
    console.log(error);
  }
};
