import React,{useEffect} from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

  // import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>

            <p>{name}</p>
            <p>{number}</p>
            <button type="button" 
            onClick={() => dispatch(deleteContact(id))}
            >Delete</button>
          </li>
        ))}

      </ul>
    </ContactListContainer>
  );
};

export default ContactList;
