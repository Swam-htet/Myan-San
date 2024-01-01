'use client';

import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Form as BootstrapForm} from 'react-bootstrap';
import React from "react";

const validationSchema = Yup.object().shape({
    fromTown: Yup.string(),
    toTown: Yup.string(),
    ticketType: Yup.string(),
    noOfPassenger: Yup.number().min(1, 'Passenger Count must be at least 1'),
    departureDate: Yup.date(),
});

function RouteSearchForm({onSubmit, towns}) {
    return (<Formik
            initialValues={{
                fromTown: '', toTown: '', ticketType: 'economy', noOfPassenger: 1, departureDate: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmit(values)}
        >
            <Form>


                {/* From Town Select */}
                <BootstrapForm.Group controlId="fromTown" className={'mb-3'}>
                    <BootstrapForm.Label>From Town:</BootstrapForm.Label>
                    <Field as="select" name="fromTown" className="form-control">
                        <option value="">Select From Town</option>
                        {
                            towns.map((town, index) => <option key={index}
                                                               value={town._id}>{town.name}</option>)
                        }
                    </Field>
                    <ErrorMessage name="fromTown" component="div" className="text-danger"/>
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="toTown" className={'mb-3'}>
                    <BootstrapForm.Label>To Town:</BootstrapForm.Label>
                    <Field as="select" name="toTown" className="form-control">
                        <option value="">Select To Town</option>
                        {
                            towns.map((town, index) => <option key={index}
                                                               value={town._id}>{town.name}</option>)
                        }
                    </Field>
                    <ErrorMessage name="toTown" component="div" className="text-danger"/>
                </BootstrapForm.Group>


                <BootstrapForm.Group controlId="formTicketType" className={'mb-3'}>
                    <BootstrapForm.Label>Ticket Type:</BootstrapForm.Label>
                    <Field as="select" name="ticketType" className="form-control">
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="firstClass">First Class</option>
                    </Field>
                    <ErrorMessage name="fromTown" component="div" className="text-danger"/>
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="departureDate" className={'mb-3'}>
                    <BootstrapForm.Label>Departure Date:</BootstrapForm.Label>
                    <Field type="date" name="departureDate" className="form-control"/>
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="noOfPassenger" className={'mb-3'}>
                    <BootstrapForm.Label>No of Passenger:</BootstrapForm.Label>
                    <Field type="number" name="noOfPassenger" className="form-control"/>
                </BootstrapForm.Group>


                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </Formik>
    );
};

export default RouteSearchForm;
