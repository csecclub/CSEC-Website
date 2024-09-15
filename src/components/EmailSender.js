import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './styles/EmailSender.css'; // Make sure to create this CSS file

export function EmailSender() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://getform.io/f/bmdpoexa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setSubscribe(false);
        setGender('');
        setWorkExperience('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <section className="email-sender" id="email-sender">
      <Container>
        <Row>
          <Col>
            <div className="container-box">
              <h1>
                Send us an <span className="highlight">email</span>
              </h1>
              <p>
                We'd love to hear from you!
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    rows={3} 
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>


                <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

                <Button variant="primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Email'}
                </Button>
              </Form>

              {status === 'success' && (
                <Alert variant="success" className="mt-3">
                  Your email has been sent successfully!
                </Alert>
              )}
              {status === 'error' && (
                <Alert variant="danger" className="mt-3">
                  There was an error sending your email. Please try again.
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}