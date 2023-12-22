import React from 'react';
import s from './ListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/phonebookSlice.js';

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>

      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
