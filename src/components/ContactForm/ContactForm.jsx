import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/operations';


const ContactForm = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    dispatch(fetchContacts()); // Оновити список контактів після додавання
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  


  return (
    <section>
      
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
          value={number}
          onChange={handleInputChange}
        />
        <br />
        <Button type="submit">Add Contact</Button>
      </Form>
    </section>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default ContactForm;
