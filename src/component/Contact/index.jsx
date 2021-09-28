import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const Contact = () => {

    const [messageFormState, setFormState] = useState({ email: '', name: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState(
            {
                ...messageFormState,
                [name]: value
            }
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!messageFormState.email || !messageFormState.name || !messageFormState.message) {
            setErrorMessage('Form is missing information!')
        } else {
           setErrorMessage('');
           console.log(messageFormState);
        }
        
    }

    const handleBlur = (event) => {
        if (!event.target.value) {
            setErrorMessage(`${event.target.name} is required!`);
        } else if(!errorMessage === 'Form is missing information!' && event.target.value) {
            setErrorMessage('');
        }
    }

    return (
        <div className='section'>
            <h1>Contact</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup row className="mb-2">
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={4}>
                        <Input type="email" name="email" id="email" placeholder="Your Email Here" value={messageFormState.email} onChange={handleChange} onBlur={handleBlur} />
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={4}>
                        <Input type="text" name="name" id="name" placeholder="Your Name Here" value={messageFormState.name} onChange={handleChange} onBlur={handleBlur} />
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="message" sm={2}>Message</Label>
                    <Col sm={8}>
                        <Input type="textarea" name="message" id="message" placeholder="Your Message Here" value={messageFormState.message} onChange={handleChange} onBlur={handleBlur} />
                    </Col>
                </FormGroup>
                {errorMessage && (
                    <Alert color="danger">
                        {errorMessage}
                    </Alert>
                )}
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );

}

export default Contact;