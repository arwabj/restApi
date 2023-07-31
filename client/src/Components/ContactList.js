import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getContacts} from "../Js/Actions/contact";
import ContactCard from './ContactCard';


const ContactList = () => {
  const listContacts = useSelector(
    (state)=> state.contactReducer.listContacts

  );

  const load = useSelector ((state)=> state.contactReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
    
  }, [dispatch]);
  
  return (
    <div>
      { load? (
      <h2>Loading..</h2>):(
         listContacts.map((el)=> <ContactCard contact={el} key ={el.id}/>)
      )}
    </div>
  
  );
};

export default ContactList;