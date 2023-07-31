import React, { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  useMatch, useNavigate } from 'react-router-dom';
import { editContact, getContact } from '../Js/Actions/contact';


const Edit = () => {
    const [newContact,setNewContact] = useState({});
    const dispatch = useDispatch();
    const contactToGet = useSelector(state=> state.contactReducer.contactToGet);
    const match = useMatch("/edit/:id");
    const navigate= useNavigate();
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value});
    };

    useEffect(() => {
     dispatch(getContact(match.params.id))
    });
    const handleEdit= () => {
        dispatch(editContact(match.params.id , newContact));
        navigate(-1)
    };
    

  return (
    <div>
          <Form.Label>Name</Form.Label>
        <Form.Control 
        type='text' 
        placeholder={`${contactToGet.name}`}
         name='name'
         value ={newContact.name} 
         onChange= {handleChange}/>
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type='email'
         placeholder={`${contactToGet.email}`} 
         value ={newContact.email}
        name='email'
        onChange= {handleChange}/>
        
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        type='number' 
        placeholder={`${contactToGet.phone}`} 
        value ={newContact.phone}
        name='phone'
        onChange= {handleChange}
        />
       
        
        <Button variant="primary" type="submit" onClick = {handleEdit} >
        Edit
      </Button>
    </div>
  );
};

export default Edit;