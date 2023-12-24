import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Container} from 'react-bootstrap';

const StaffRegisterForm = ({data, onSubmit}) => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        userName: Yup.string().required('Username is required'),
        dateOfBirth: Yup.date().required('Date of Birth is required'),
        startDate: Yup.date().required('Start Date is required'),
        address: Yup.object().shape({
            street: Yup.string().required('Street is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            postalCode: Yup.string().required('Postal Code is required'),
            country: Yup.string().required('Country is required'),
        }),
        password: Yup.string().required('Password is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        role: Yup.string().required('Role is required'),
    });

    let initialValue = {
        firstName: data ? data.firstName : "",
        lastName: data ? data.lastName : "",
        userName: data ? data.userName : "",
        dateOfBirth: data ? data.dateOfBirth : "",
        startDate: data ? data.startDate : "",
        address: {
            street: data ? data.address.street : "",
            city: data ? data.address.city : "",
            state: data ? data.address.state : "",
            postalCode: data ? data.address.postalCode : "",
            country: data ? data.address.country : "",
        },
        password: data ? data.password : "",
        email: data ? data.email : "",
        role: data ? data.role : "",
    }

    return (
        <Container className="mt-5">
            <h1>{data ? 'Edit Staff' : 'Staff Registration'}</h1>
            <Formik initialValues={initialValue} validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                <Form>
                    {/* First Name */}
                    <div className="mb-3">
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" id="firstName" name="firstName" className="form-control"/>
                        <ErrorMessage name="firstName" component="div" className="text-danger"/>
                    </div>

                    {/* Last Name */}
                    <div className="mb-3">
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" id="lastName" name="lastName" className="form-control"/>
                        <ErrorMessage name="lastName" component="div" className="text-danger"/>
                    </div>

                    {/* Username */}
                    <div className="mb-3">
                        <label htmlFor="userName">Username</label>
                        <Field type="text" id="userName" name="userName" className="form-control"/>
                        <ErrorMessage name="userName" component="div" className="text-danger"/>
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field type="date" id="dateOfBirth" name="dateOfBirth" className="form-control"/>
                        <ErrorMessage name="dateOfBirth" component="div" className="text-danger"/>
                    </div>

                    {/* Start Date */}
                    <div className="mb-3">
                        <label htmlFor="startDate">Start Date</label>
                        <Field type="date" id="startDate" name="startDate" className="form-control"/>
                        <ErrorMessage name="startDate" component="div" className="text-danger"/>
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                        <label>Address</label>
                        <div>
                            <label htmlFor="address.street">Street</label>
                            <Field type="text" id="address.street" name="address.street" className="form-control"/>
                            <ErrorMessage name="address.street" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.city">City</label>
                            <Field type="text" id="address.city" name="address.city" className="form-control"/>
                            <ErrorMessage name="address.city" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.state">State</label>
                            <Field type="text" id="address.state" name="address.state" className="form-control"/>
                            <ErrorMessage name="address.state" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.postalCode">Postal Code</label>
                            <Field type="text" id="address.postalCode" name="address.postalCode"
                                   className="form-control"/>
                            <ErrorMessage name="address.postalCode" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.country">Country</label>
                            <Field type="text" id="address.country" name="address.country" className="form-control"/>
                            <ErrorMessage name="address.country" component="div" className="text-danger"/>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" className="form-control"/>
                        <ErrorMessage name="password" component="div" className="text-danger"/>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Field type="text" id="email" name="email" className="form-control"/>
                        <ErrorMessage name="email" component="div" className="text-danger"/>
                    </div>

                    {/* Role */}
                    <div className="mb-3">
                        <label htmlFor="role">Role</label>
                        <Field as="select" id="role" name="role" className="form-control">
                            <option value="" label="Select a role"/>
                            <option value="admin" label="Admin"/>
                            <option value="staff" label="Staff"/>
                            {/* Add other role options as needed */}
                        </Field>
                        <ErrorMessage name="role" component="div" className="text-danger"/>
                    </div>

                    <Button variant="primary" type="submit">
                        {initialValue ? 'Update' : 'Register'}
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default StaffRegisterForm;
