import React, { useEffect } from 'react';
import { ListItem } from '../ListItem/ListItem.jsx';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContasctsThunk } from '../../store/operations.js';
import { FallingLines } from 'react-loader-spinner';
import {
  getContacts,
  getFilter,
  SelectLoading,
  SelectError,
} from '../../store/selector.js';

export const ContactList = ({ children }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(SelectLoading);
  const error = useSelector(SelectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContasctsThunk());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase() || '')
  );

  console.log(contacts);
  return (
    <>
      {children}
      {filteredContacts.length === 0 ? (
        <p className={s.errorMessage}>No contacts match your search</p>
      ) : (
        <ul className={s.contactList}>
          {filteredContacts.map(({ id, name, phone }) => (
            <ListItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
      {loading && (
        <div className={s.loaderWrapper}>
          <FallingLines
            color="#315cad"
            width="300"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      )}
      {error && <p>{error}</p>}
    </>
  );
};
