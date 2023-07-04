import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';


// function App() {
//   return (
//     <Container>
//       <Title>PnoneBook</Title>
//       <ContactForm />
//       <Subtitle>Contacts</Subtitle>
//       <Filter />
//       <ContactList />
//     </Container>
//   );
// }

// export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
// Імпорти компонентів

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
          <Container>
            <Title>PnoneBook</Title>
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactForm />
            <Subtitle>Contacts</Subtitle>
            <Filter />
            <ContactList />
          </Container>
          
    )
};