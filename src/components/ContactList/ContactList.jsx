import React from 'react';
import { ListItem } from '../ListItem/ListItem.jsx';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = ({ children }) => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
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
