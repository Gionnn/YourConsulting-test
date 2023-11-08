import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <tr>
      <td>{editFormData.id}</td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter your name...'
          name='name'
          value={editFormData.name}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter your surname...'
          name='surname'
          value={editFormData.surname}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter your CNP...'
          name='cnp'
          value={editFormData.cnp}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter your age...'
          name='age'
          value={editFormData.age}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter your car...'
          name='cars'
          value={editFormData.cars}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <button className='save-btn' type='submit'>
          Save
        </button>
        <button
          className='cancel-btn'
          type='button'
          onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
