import React from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>

            <p>{name}</p>
            <p>{number}</p>

          </li>
        ))}

      </ul>
    </ContactListContainer>
  );
};

export default ContactList;
