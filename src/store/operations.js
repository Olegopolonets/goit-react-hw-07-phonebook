import axios from 'axios';
import { fetchingData, isError, isLoading } from './phonebookSlice';

axios.defaults.baseURL = 'https://6585c767022766bcb8c95914.mockapi.io';

export const fetchContasctsThunk = () => async dispatch => {
  try {
    dispatch(isLoading());
    const { data } = await axios.get('contacts');
    console.log(data);
    dispatch(fetchingData(data));
  } catch (error) {
    dispatch(isError(error.message));
  }
};
