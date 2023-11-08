import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import data from "../mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

const Persoane = () => {
  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    surname: "",
    cnp: "",
    age: "",
    cars: ""
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    cnp: "",
    age: "",
    cars: " "
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
      name: addFormData.name,
      surname: addFormData.age,
      cnp: addFormData.cnp,
      age: addFormData.age,
      cars: addFormData.cars
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = event => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      surname: editFormData.surname,
      cnp: editFormData.cnp,
      age: editFormData.age,
      cars: editFormData.cars
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
      name: contact.name,
      surname: contact.surname,
      cnp: contact.cnp,
      age: contact.age,
      cars: contact.cars
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
      <h1>Persoane</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th className='row1'>Nr.</th>
              <th className='row1'>Name</th>
              <th className='row1'>Surname</th>
              <th className='row1'>CNP</th>
              <th className='row1'>Age</th>
              <th className='row1'>Cars</th>
              <th className='row1'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
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
          <h2>Add a Person</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input
              type='text'
              name='name'
              required='required'
              placeholder='Enter your name...'
              onChange={handleAddFormChange}
            />
            <input
              type='text'
              name='surname'
              required='required'
              placeholder='Enter your surname...'
              onChange={handleAddFormChange}
            />
            <input
              type='number'
              name='cnp'
              required='required'
              placeholder='Enter your cnp...'
              onChange={handleAddFormChange}
            />
            <input
              type='number'
              name='age'
              required='required'
              placeholder='Enter your age...'
              onChange={handleAddFormChange}
            />
            <input
              type='text'
              name='cars'
              required='required'
              placeholder='Enter your car...'
              onChange={handleAddFormChange}
            />
            <button className='add-new' type='submit'>
              Add
            </button>
          </form>
        </div>
      )}
      <button className='show-btn' type='button' onClick={() => setShow(!show)}>
        {show === true ? "Close" : "Add new person"}
      </button>
    </div>
  );
};

export default Persoane;
