import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Js/Actions/contact';
import {useNavigate} from 'react-router-dom';

const ContactCard = ({contact}) => {
  const dispath = useDispatch();
  const navigate = useNavigate ();

  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.email}
        </Card.Text>
        <Card.Text>
          {contact.phone}
        </Card.Text>
        <Button variant="primary" 
        onClick={()=> navigate(`/edit/${contact._id}`)}
        >Edit</Button>
        <Button variant="primary" onClick = {()=>dispath(deleteContact(contact._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
};

export default ContactCard;