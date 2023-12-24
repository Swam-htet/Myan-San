'use client';

import {Button, Container, Form as BootstrapForm} from 'react-bootstrap';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import React from "react";


export default function ContactPage() {

    const validationSchema = Yup.object({
        yourName: Yup.string().required('Your Name is required'),
        email: Yup.string().email('Invalid email address').required('Email Address is required'),
        message: Yup.string().required('Your Message is required'),
    });

    const initialValues = {
        yourName: '',
        email: '',
        message: '',
    };


    const handleFormSubmit = (values, actions) => {
        // Handle form submission here
        console.log(values);
        actions.setSubmitting(false); // Reset submitting state
    };
    return (
        <main className={'container-fluid'}>
            <Container className="mt-5">
                <h1>Contact Us</h1>

                <div className="mb-4">
                    <p>
                        For any inquiries, feel free to contact us using the information below or submit the form:
                    </p>
                    <ul className="list-unstyled">
                        <li>
                            {/*<FontAwesomeIcon icon={faEnvelope} className="me-2"/>*/}
                            <span>Email: info@myansantravel.com</span>
                        </li>
                        <li>
                            {/*<FontAwesomeIcon icon={faPhone} className="me-2"/>*/}
                            <span>Phone: +95 9 1234 5678</span>
                        </li>
                        <li>
                            {/*<FontAwesomeIcon icon={faMapMarkerAlt} className="me-2"/>*/}
                            <span>Address: 123 Travel Street, Yangon, Myanmar</span>
                        </li>
                    </ul>
                </div>

                <div className={'card p-3'}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        <Form>
                            <BootstrapForm.Group className="mb-3" controlId="yourName">
                                <BootstrapForm.Label>Your Name</BootstrapForm.Label>
                                <Field
                                    type="text"
                                    name="yourName"
                                    placeholder="Enter your name"
                                    as={BootstrapForm.Control}
                                />
                                <ErrorMessage name="yourName" component="div" className="text-danger"/>
                            </BootstrapForm.Group>

                            <BootstrapForm.Group className="mb-3" controlId="email">
                                <BootstrapForm.Label>Email Address</BootstrapForm.Label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    as={BootstrapForm.Control}
                                />
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </BootstrapForm.Group>

                            <BootstrapForm.Group className="mb-3" controlId="message">
                                <BootstrapForm.Label>Your Message</BootstrapForm.Label>
                                <Field
                                    name="message"
                                    rows={10}
                                    placeholder="Enter your message"
                                    as={React.forwardRef((props, ref) => (
                                        <BootstrapForm.Control as="textarea" rows={4} ref={ref} {...props} />
                                    ))}                                />
                                <ErrorMessage name="message" component="div" className="text-danger"/>
                            </BootstrapForm.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </div>

            </Container>
        </main>
    )
}
