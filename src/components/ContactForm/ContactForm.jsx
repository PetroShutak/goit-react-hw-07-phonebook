import React, { useEffect, useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from '../../redux/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts, getError } from 'redux/selectors';

const notify = {
  error: message => toast.error(message),
  success: message => toast.success(message),
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const dispatch = useDispatch();

  // useEffect(() => {
   // dispatch(fetchContacts());
  // }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && phone.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistingContact) {
        toast.error(`${name} is already in contacts`);
        return;
      }

      if(error) {
        notify.error('problem with server');
        return;
      }

      dispatch(addContact({ name, phone }));
      notify.success(`${name} adding to contacts`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <section>
      <ToastContainer />
      
      {error && <p>Failed to load contacts. Please try again later.</p>}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
        <Label htmlFor="number">Number:</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleInputChange}
        />
        <br />
        <Button type="submit">Add Contact</Button>
      </Form>
    </section>
  );
};

export default ContactForm;
