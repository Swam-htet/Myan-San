import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Form as BootstrapForm} from 'react-bootstrap';
import axios from "axios";
import {setCookie} from "cookies-next";

const LoginForm = () => {
    const initialValues = {
        userName: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    async function handleSubmit(values) {
        // Implement your login logic here using the form values
        // console.log('Login submitted:', values);

        let {data} = await axios.post("http://localhost:4000/api/staff/login", values);
        console.log("Login Result -", data);

        if (data) {
            setCookie("auth-token", data.token);
        }


    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
                <BootstrapForm.Group className="mb-3" controlId="formUserName">
                    <BootstrapForm.Label>Username</BootstrapForm.Label>
                    <Field
                        type="text"
                        name="userName"
                        as={BootstrapForm.Control}
                        placeholder="Enter your username"
                    />
                    <ErrorMessage name="userName" component="div" className="text-danger"/>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3" controlId="formEmail">
                    <BootstrapForm.Label>Email address</BootstrapForm.Label>
                    <Field
                        type="text"
                        name="email"
                        as={BootstrapForm.Control}
                        placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger"/>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3" controlId="formPassword">
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field
                        type="password"
                        name="password"
                        as={BootstrapForm.Control}
                        placeholder="Enter your password"
                    />
                    <ErrorMessage name="password" component="div" className="text-danger"/>
                </BootstrapForm.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Formik>
    );
};

export default LoginForm;