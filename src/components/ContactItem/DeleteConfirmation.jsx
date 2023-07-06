import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const DeleteConfirmation = ({ contact, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
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
