import React, { useEffect } from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ul>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{phone}</p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactListContainer>
  );
};

export default ContactList;
