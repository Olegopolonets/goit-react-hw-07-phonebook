import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { addContact } from '../../store/phonebookSlice.js';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const createContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContact({ name, phone }));
    event.target.reset();
  };

  return (
    <form className={s.formBox} autoComplete="off" onSubmit={createContact}>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Contact name"
      />

      <input
        className={s.input}
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
