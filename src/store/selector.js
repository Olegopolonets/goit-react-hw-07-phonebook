export const getContacts = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const SelectLoading = state => state.phonebook.contacts.isLoading;
export const SelectError = state => state.phonebook.contacts.error;
