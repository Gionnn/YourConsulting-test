import React from "react";

const ReadOnlyRowCars = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.brand}</td>
      <td>{contact.model}</td>
      <td>{contact.year}</td>
      <td>{contact.capacity}</td>
      <td>{contact.taxes}</td>
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

export default ReadOnlyRowCars;
