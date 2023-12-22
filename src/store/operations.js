import axios from 'axios';
import {
  deleteContact,
  fetchingData,
  isError,
  isLoading,
} from './phonebookSlice';

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
      // dispatch(deleteContact(data.id));
    } catch (error) {
      dispatch(isError(error.message));
    }
  };
