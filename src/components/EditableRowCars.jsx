import React from "react";

const EditableRowCars = ({
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
          placeholder='Enter the brand...'
          name='brand'
          value={editFormData.brand}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter the model...'
          name='model'
          value={editFormData.model}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='number'
          required='required'
          placeholder='Enter the year...'
          name='year'
          value={editFormData.year}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='number'
          required='required'
          placeholder='Enter the capacity...'
          name='capacity'
          value={editFormData.capacity}
          onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input
          type='number'
          required='required'
          placeholder='Enter the taxes...'
          name='taxes'
          value={editFormData.taxes}
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

export default EditableRowCars;
