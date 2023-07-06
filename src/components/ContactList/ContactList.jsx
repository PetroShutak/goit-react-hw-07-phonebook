import React, { useEffect } from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = async id => {
    await dispatch(deleteContact(id));
    dispatch(fetchContacts()); // Оновити список контактів після видалення
  };

  useEffect(() => {
    dispatch(fetchContacts()); // Завантажити список контактів під час монтування компонента
  }, [dispatch]);

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactListContainer>
  );
};

export default ContactList;
