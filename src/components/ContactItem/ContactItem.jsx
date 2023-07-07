import React, { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import DeleteConfirmation from 'components/ContactItem/DeleteConfirmation/DeleteConfirmation';
import { ContactItemWrapper, ContactName, ContactPhone, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <ContactItemWrapper>
      <ContactName>{contact.name}</ContactName>
      <ContactPhone>
        <MdPhone /> {contact.phone}
      </ContactPhone>
      <DeleteButton onClick={handleDeleteClick}>
        <RiDeleteBin2Line />
      </DeleteButton>

      {isConfirmingDelete && (
        <DeleteConfirmation contact={contact} onCancel={handleCancelDelete} />
      )}
    </ContactItemWrapper>
  );
};

export default ContactItem;
