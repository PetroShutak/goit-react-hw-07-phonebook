import styled from 'styled-components';

export const ContactItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactPhone = styled.span`
  color: #888;
`;

export const DeleteButton = styled.button`
    background-color: #f00;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    box-shadow: 0 0 5px 0 #000;
    }
    &:focus {
        outline: none;
    }
`;
