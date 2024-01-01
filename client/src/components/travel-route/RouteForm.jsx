import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Form as BootstrapForm} from 'react-bootstrap';

const RouteForm = ({towns, buses, submitHandler}) => {
    // Define validation schema using Yup
    const validationSchema = Yup.object({
        toTown: Yup.string().required('To Town is required'),
        fromTown: Yup.string().required('From Town is required'),
        bus: Yup.string().required('Bus is required'),
        scheduleDate: Yup.date().required('Schedule Date is required'),
        availableSeat: Yup.number().required('Available Seat is required').positive('Must be a positive number').max(30),
    });

    const initialValues = {
        toTown: '',
        fromTown: '',
        bus: '',
        scheduleDate: '',
        availableSeat: 25,
    };

    // Submit handler
    const onSubmit = (values, actions) => {
        // Your submit logic goes here
        console.log('Form submitted with values:', values);

        submitHandler(values);
        actions.resetForm();
    };

    return (
        <div className={'w-75'}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>


                    {/* From Town Select */}
                    <BootstrapForm.Group controlId="fromTown">
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

                    {/* To Town Select */}
                    <BootstrapForm.Group controlId="toTown">
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

                    <BootstrapForm.Group controlId="bus">
                        <BootstrapForm.Label>Bus:</BootstrapForm.Label>
                        <Field as="select" name="bus" className="form-control">
                            <option value="">Select Bus</option>
                            {
                                buses.map((bus, index) => <option key={index}
                                                                  value={bus._id}>{bus.registrationNumber} - {bus.company.name}</option>)
                            }
                        </Field>
                        <ErrorMessage name="bus" component="div" className="text-danger"/>
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="scheduleDate">
                        <BootstrapForm.Label>Schedule Date:</BootstrapForm.Label>
                        <Field type="date" name="scheduleDate" className="form-control"/>
                        <ErrorMessage name="scheduleDate" component="div" className="text-danger"/>
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="availableSeat">
                        <BootstrapForm.Label>Available Seat:</BootstrapForm.Label>
                        <Field type="number" name="availableSeat" className="form-control"/>
                        <ErrorMessage name="availableSeat" component="div" className="text-danger"/>
                    </BootstrapForm.Group>

                    <Button variant="primary" type="submit" className={'mt-3'}>
                        Add New
                    </Button>

                </Form>
            </Formik>
        </div>
    );
};

export default RouteForm;
