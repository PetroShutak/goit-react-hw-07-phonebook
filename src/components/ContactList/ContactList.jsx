import React, { useEffect } from 'react';
import { ContactListContainer, Title } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts, getStatusFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListContainer>
      <Title>Contact List</Title>
      <ul>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </ContactListContainer>
  );
};

export default ContactList;


// import React, { useEffect } from 'react';
// import { ContactListContainer, Title } from './ContactList.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact, fetchContacts } from 'redux/operations';

// const ContactList = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts()); 
//   }, [dispatch]);

//   return (
//     <ContactListContainer>
//       <Title>Contact List</Title>
//       <ul>
//         {contacts.map(({ id, name, phone }) => (
//           <li key={id}>
//             <p>{name}</p>
//             <p>{phone}</p>
//             <button type="button" onClick={() => dispatch(deleteContact(id))}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </ContactListContainer>
//   );
// };

// export default ContactList;
