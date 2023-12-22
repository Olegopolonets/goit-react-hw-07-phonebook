import React, { useEffect } from 'react';
import { ListItem } from '../ListItem/ListItem.jsx';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContasctsThunk } from '../../store/operations.js';

export const ContactList = ({ children }) => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContasctsThunk());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );
  console.log('filter: ', filter);

  console.log(contacts);
  return (
    <>
      {children}
      {filteredContacts.length === 0 ? (
        <p className={s.errorMessage}>No contacts match your search</p>
      ) : (
        <ul className={s.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <ListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};
