// src/components/ContactCardAdmin.tsx
import React from 'react';

type ContactProps = {
  firstName: string;
  lastName: string;
  address: string;
  description: string;
  owner: string; // Additional field to show the contact's owner
};

const ContactCardAdmin = ({ firstName, lastName, address, description, owner }: ContactProps) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{address}</td>
    <td>{description}</td>
    <td>
      <p className="blockquote-footer">Owner: {owner}</p>
    </td>
  </tr>
);

export default ContactCardAdmin;
