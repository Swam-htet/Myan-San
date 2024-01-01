import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Container} from 'react-bootstrap';

const StaffForm = ({data: initialValue, onSubmit, modelHandler}) => {
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

    let initialFormValue = {
        firstName: initialValue ? initialValue.firstName : "",
        lastName: initialValue ? initialValue.lastName : "",
        userName: initialValue ? initialValue.userName : "",
        dateOfBirth: initialValue ? initialValue.dateOfBirth : "",
        startDate: initialValue ? initialValue.startDate : "",
        address: {
            street: initialValue ? initialValue.address.street : "",
            city: initialValue ? initialValue.address.city : "",
            state: initialValue ? initialValue.address.state : "",
            postalCode: initialValue ? initialValue.address.postalCode : "",
            country: initialValue ? initialValue.address.country : "",
        },
        password: initialValue ? initialValue.password : "",
        email: initialValue ? initialValue.email : "",
        role: initialValue ? initialValue.role : "",
    }

    return (
        <Container>
            <Formik initialValues={initialFormValue}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                <Form>
                    {/* First Name */}
                    <div className="mb-3">
                        <label htmlFor="firstName">Firstname</label>
                        <Field type="text" placeholder={'Enter Firstname'} id="firstName" name="firstName"
                               className="form-control"/>
                        <ErrorMessage name="firstName" component="div" className="text-danger"/>
                    </div>

                    {/* Last Name */}
                    <div className="mb-3">
                        <label htmlFor="lastName">Lastname</label>
                        <Field type="text" placeholder={'Enter Lastname'} id="lastName" name="lastName"
                               className="form-control"/>
                        <ErrorMessage name="lastName" component="div" className="text-danger"/>
                    </div>

                    {/* Username */}
                    <div className="mb-3">
                        <label htmlFor="userName">Username</label>
                        <Field type="text" placeholder={'Enter Username'} id="userName" name="userName"
                               className="form-control"/>
                        <ErrorMessage name="userName" component="div" className="text-danger"/>
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field type="date" placeholder={'Choose Date of Birth'} id="dateOfBirth" name="dateOfBirth"
                               className="form-control"/>
                        <ErrorMessage name="dateOfBirth" component="div" className="text-danger"/>
                    </div>

                    {/* Start Date */}
                    <div className="mb-3">
                        <label htmlFor="startDate">Start Date</label>
                        <Field type="date" placeholder={'Choose Work Start Date'} id="startDate" name="startDate"
                               className="form-control"/>
                        <ErrorMessage name="startDate" component="div" className="text-danger"/>
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                        <label>Address</label>
                        <div>
                            <label htmlFor="address.street">Street</label>
                            <Field type="text" placeholder={'Enter Street'} id="address.street" name="address.street"
                                   className="form-control"/>
                            <ErrorMessage name="address.street" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.city">City</label>
                            <Field type="text" placeholder={'Enter City'} id="address.city" name="address.city"
                                   className="form-control"/>
                            <ErrorMessage name="address.city" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.state">State</label>
                            <Field type="text" placeholder={'Enter State'} id="address.state" name="address.state"
                                   className="form-control"/>
                            <ErrorMessage name="address.state" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.postalCode">Postal Code</label>
                            <Field type="text" placeholder={'Enter Postal Code'} id="address.postalCode"
                                   name="address.postalCode"
                                   className="form-control"/>
                            <ErrorMessage name="address.postalCode" component="div" className="text-danger"/>
                        </div>
                        <div>
                            <label htmlFor="address.country">Country</label>
                            <Field type="text" placeholder={'Enter Country'} id="address.country" name="address.country"
                                   className="form-control"/>
                            <ErrorMessage name="address.country" component="div" className="text-danger"/>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <Field type="password" placeholder={'Enter Password'} id="password" name="password"
                               className="form-control"/>
                        <ErrorMessage name="password" component="div" className="text-danger"/>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Field type="text" placeholder={'Enter Email'} id="email" name="email"
                               className="form-control"/>
                        <ErrorMessage name="email" component="div" className="text-danger"/>
                    </div>

                    {/* Role */}
                    <div className="mb-3">
                        <label htmlFor="role">Role</label>
                        <Field as="select" placeholder={'Choose Role'} id="role" name="role" className="form-control">
                            <option value="null"/>
                            <option value="admin" label="Admin"/>
                            <option value="staff" label="Staff"/>
                        </Field>
                        <ErrorMessage name="role" component="div" className="text-danger"/>
                    </div>

                    <Button variant="secondary" onClick={modelHandler} className={'me-2'}>
                        Cancel
                    </Button>
                    <Button variant="primary" type={"submit"}>
                        {initialValue ? "Save" : "Add"}
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
};

export default StaffForm;
