import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';
import { ModalContainer, ModalContent, ButtonGroup, Button } from './DeleteConfirmation.styled';

const DeleteConfirmation = ({ contact, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    if (deleteContact) {
      toast.success(`${contact.name} deleted`);
    }
    onCancel();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <p>Are you sure you want to delete this contact?</p>
        <ButtonGroup>
          <Button onClick={handleConfirmDelete}>Delete</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteConfirmation;
