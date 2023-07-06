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
    <div style = {{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <span>{contact.name}</span>
      <span>{contact.phone}</span>
      <button onClick={handleDeleteClick}>Delete</button>

      {isConfirmingDelete && (
        <DeleteConfirmation contact={contact} onCancel={handleCancelDelete} />
      )}
    </div>
  );
};

export default ContactItem;
