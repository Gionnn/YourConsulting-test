import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.surname}</td>
      <td>{contact.cnp}</td>
      <td>{contact.age}</td>
      <td>{contact.cars}</td>
      <td>
        <button
          className='edit-btn'
          type='button'
          onClick={event => handleEditClick(event, contact)}>
          Edit
        </button>
        <button
          className='delete-btn'
          type='button'
          onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
