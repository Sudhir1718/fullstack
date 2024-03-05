import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '/src/assets/css/contact.css';
import DrawerAppBar from './navbar';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [interestedIn, setInterestedIn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to backend)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Subject:", subject);
    console.log("Interested In:", interestedIn);
    console.log("Message:", message);
    // Reset form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setSubject('');
    setInterestedIn('');
    setMessage('');
  };

  return (
    <>
    <DrawerAppBar/>
    <div className="contact-us">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formInterestedIn">
          <Form.Label>Interested In</Form.Label>
          <Form.Control
            as="select"
            value={interestedIn}
            onChange={(e) => setInterestedIn(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="Yoga Classes">Yoga Classes</option>
            <option value="Private Sessions">Private Sessions</option>
            <option value="Workshops">Workshops</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
};

export default ContactUs;
