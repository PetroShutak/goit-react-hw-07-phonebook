import React from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

  // import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(deleteContact(id));
 


  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>

            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}

      </ul>
    </ContactListContainer>
  );
};

export default ContactList;
