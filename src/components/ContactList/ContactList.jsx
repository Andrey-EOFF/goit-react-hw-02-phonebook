import React from 'react';
import { StyledContactList, StyledContactItem, StyledName, StyledNumber } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledContactList>
    {contacts.map(({ id, name, number }) => (
      <StyledContactItem key={id}>
        <StyledName>{name}</StyledName> <StyledNumber>{number}</StyledNumber>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </StyledContactItem>
    ))}
  </StyledContactList>
);

export default ContactList;
