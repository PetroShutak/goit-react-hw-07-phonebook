import React from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
    </ContactListContainer>
  );
};

export default ContactList;
