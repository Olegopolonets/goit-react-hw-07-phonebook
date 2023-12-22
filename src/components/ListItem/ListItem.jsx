import React from 'react';
import s from './ListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContasctThunk } from 'store/operations';

export const ListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div>
        <b>{name}: </b>
        <i>{phone}</i>
      </div>

      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContasctThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};
