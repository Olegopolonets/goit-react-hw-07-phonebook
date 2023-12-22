import React from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/phonebookSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <input
      className={s.input}
      onChange={handleFilter}
      type="text"
      placeholder="Search"
    />
  );
};
