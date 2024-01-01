'use client';

import {Accordion, Button, Container, Form as BootstrapForm} from 'react-bootstrap';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import React, {useEffect, useState} from "react";
import useGetAllFaqs from "@/libs/hooks/useGellAllFaqs";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useCreateFeedbackMutation from "@/libs/hooks/useCreateFeedbackMutation";
import toast from "react-hot-toast";


export default function ContactPage() {
    const [data, setData] = useState(null);

    const GetAllFaqs = useGetAllFaqs();

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

    const CreateFeedbackMutation = useCreateFeedbackMutation();


    const handleFormSubmit = (values, actions) => {
        const payload = {
            customer: {
                name: values.yourName,
                email: values.email
            },
            feedback: values.message
        }
        CreateFeedbackMutation.mutate(payload)
        actions.resetForm();
        actions.setSubmitting(false); // Reset submitting state
    };

    useEffect(() => {

        if (CreateFeedbackMutation.isSuccess) {
            toast.success("Feedback created successfully")
        } else if (CreateFeedbackMutation.isError) {
            toast.error("Can't give feedback right now, please try again later");
        }
    }, [CreateFeedbackMutation.data, CreateFeedbackMutation.isSuccess, CreateFeedbackMutation.isError]);

    useEffect(() => {
        if (GetAllFaqs.isSuccess) {
            setData(GetAllFaqs.data);
        }
    }, [GetAllFaqs.data]);

    if (GetAllFaqs.isLoading) {
        return <Loading/>
    }

    if (GetAllFaqs.isError) {
        return <Error message={GetAllFaqs.error.message}/>
    }



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

            <div className={'container mt-4'}>
                <h2 className={'my-3'}>Frequently Ask Question</h2>
                <Accordion>
                    {
                        data && data.map((faq, index) => {
                            return (<Accordion.Item eventKey={index} key={index}>
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        faq.answer
                                    }
                                </Accordion.Body>
                            </Accordion.Item>)
                        })
                    }

                </Accordion>
            </div>
        </main>
    )
}
