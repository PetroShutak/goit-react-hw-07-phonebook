import React, { useState } from 'react';
import DeleteConfirmation from 'components/ContactItem/DeleteConfirmation';


const ContactItem = ({ contact }) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <li style = {{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px',
    }}>
      <span>{contact.name}</span>
      <span>{contact.phone}</span>
      <button onClick={handleDeleteClick}>Delete</button>

      {isConfirmingDelete && (
        <DeleteConfirmation contact={contact} onCancel={handleCancelDelete} />
      )}
    </li>
  );
};

export default ContactItem;
