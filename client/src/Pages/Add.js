import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { addContact } from '../Js/Actions/contact';

const Add = () => {
    const [newContact, setNewContact] = useState({name:"", email:"", phone:""});
    const dispatch= useDispatch();
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value});
    };
    const add = () => {
        dispatch(addContact(newContact));
    };
  return (
    <div>
       <Form.Label>Name</Form.Label>
        <Form.Control 
        type='text' 
        placeholder="Enter name"
         name='name'
         value ={newContact.name} 
         onChange= {handleChange}/>
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type='email'
         placeholder="Enter email" 
         name='email'
         value={newContact.email}
         onChange={handleChange}/>
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        type='number' 
        placeholder="Enter phone" 
        name='phone'
        value={newContact.phone}
        onChange={handleChange}
        />
        <Button variant="primary" type="submit" onClick={() => add()}>
        Add
      </Button>
    </div>
  );
};

export default Add;