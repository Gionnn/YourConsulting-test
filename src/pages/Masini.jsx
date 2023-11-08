import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import data from "../mock-data-cars.json";
import ReadOnlyRowCars from "../components/ReadOnlyRowCars";
import EditableRowCars from "../components/EditableRowCars";

const Masini = () => {
  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    brand: "",
    model: "",
    year: "",
    capacity: "",
    taxes: ""
  });

  const [editFormData, setEditFormData] = useState({
    brand: "",
    model: "",
    year: "",
    capacity: "",
    taxes: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = event => {
    event.preventDefault();

    const newContact = {
      brand: addFormData.brand,
      model: addFormData.model,
      year: addFormData.year,
      capacity: addFormData.capacity,
      taxes: addFormData.taxes
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = event => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      brand: editFormData.brand,
      model: editFormData.model,
      year: editFormData.year,
      capacity: editFormData.capacity,
      taxes: editFormData.taxes
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex(contact => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      brand: contact.brand,
      model: contact.model,
      year: contact.year,
      capacity: contact.capacity,
      taxes: contact.taxes
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = contactId => {
    const newContacts = [...contacts];

    const index = contacts.findIndex(contact => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className='app-container'>
      <button className='back-btn'>
        <Link to='/'>Back</Link>
      </button>
      <h1>Masini</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th className='row1'>Nr.</th>
              <th className='row1'>Brand</th>
              <th className='row1'>Model</th>
              <th className='row1'>Year</th>
              <th className='row1'>Capacity</th>
              <th className='row1'>Taxes</th>
              <th className='row1'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRowCars
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRowCars
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      {show && (
        <div className='add-container'>
          <h2>Add a car</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input
              type='text'
              name='brand'
              required='required'
              placeholder='Enter the brand...'
              onChange={handleAddFormChange}
            />
            <input
              type='text'
              name='model'
              required='required'
              placeholder='Enter the model...'
              onChange={handleAddFormChange}
            />
            <input
              type='number'
              name='year'
              required='required'
              placeholder='Enter the year...'
              onChange={handleAddFormChange}
            />
            <input
              type='number'
              name='capacity'
              required='required'
              placeholder='Enter the capacity...'
              onChange={handleAddFormChange}
            />
            <input
              type='number'
              name='taxes'
              required='required'
              placeholder='Enter the taxes...'
              onChange={handleAddFormChange}
            />
            <button className='add-new' type='submit'>
              Add
            </button>
          </form>
        </div>
      )}
      <button className='show-btn' type='button' onClick={() => setShow(!show)}>
        {show === true ? "Close" : "Add new car"}
      </button>
    </div>
  );
};

export default Masini;
