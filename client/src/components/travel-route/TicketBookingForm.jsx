'use client';

import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, FormGroup, FormLabel} from "react-bootstrap";
import * as Yup from "yup";
import useCreateTicketOrderMutation from "@/libs/hooks/useCreateTicketOrderMutation";
import {useParams} from "next/navigation";
import {useEffect} from "react";
import toast from "react-hot-toast";

export default function TicketBookingForm({submitHandler,initialValues, routeData, selectSeats, resetBooking, modelHandler}) {
    let params = useParams();


    const ticketOrderBtnSubmitHandler = (values) => {
        console.log("Values -", values);
        let body = {
            customer: {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                NRC: values.NRC,
                address: values.address
            },
            route: params.id,
            selectedSeat: [...routeData.seats.filter(seat => selectSeats.includes(seat._id)).map(seat => ({
                seatID: seat.seatID,
                _id: seat._id
            }))]
        }
        submitHandler(body);
        
        resetBooking();
    }



    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Firstname is required'),
        lastName: Yup.string().required('Lastname is required'),
        email: Yup.string().email('Invalid email address').required('Email address is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        NRC: Yup.string().required('NRC Number is required'),
        address: Yup.object().shape({
            street: Yup.string().required('Address is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            postalCode: Yup.string().required('Postal Code is required'),
            country: Yup.string().required('Country is required'),
        }),
    });
    return <>
        <Formik validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={ticketOrderBtnSubmitHandler}>
            <Form className={'p-3'}>
                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>First Name</FormLabel>
                        <Field placeholder={"Enter Firstname"} type="text" name="firstName"
                               className="form-control"/>
                        <ErrorMessage name="firstName" component="div" className="text-danger"/>
                    </FormGroup>

                </div>
                
                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>Last Name</FormLabel>
                        <Field placeholder={"Enter Lastname"} type="text" name="lastName"
                               className="form-control"/>
                        <ErrorMessage name="lastName" component="div" className="text-danger"/>
                    </FormGroup>
                </div>


                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <Field placeholder={"Enter email"} type="email" name="email"
                               className="form-control"/>
                        <ErrorMessage name="email" component="div" className="text-danger"/>
                    </FormGroup>
                </div>

                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>Phone Number</FormLabel>
                        <Field placeholder={"Enter phone number"} type="tel" name="phoneNumber"
                               className="form-control"/>
                        <ErrorMessage name="phoneNumber" component="div"
                                      className="text-danger"/>
                    </FormGroup>
                </div>

                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>NRC</FormLabel>
                        <Field placeholder={"Enter NRC number"} type="text" name="NRC"
                               className="form-control"/>
                        <ErrorMessage name="NRC" component="div" className="text-danger"/>
                    </FormGroup>
                </div>

                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>Street</FormLabel>
                        <Field placeholder={"Enter street"} type="text" name="address.street"
                               className="form-control"/>
                        <ErrorMessage name="address.street" component="div"
                                      className="text-danger"/>
                    </FormGroup>
                </div>

                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>City</FormLabel>
                        <Field placeholder={"Enter city"} type="text" name="address.city"
                               className="form-control"/>
                        <ErrorMessage name="address.city" component="div"
                                      className="text-danger"/>
                    </FormGroup>
                </div>

                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>State</FormLabel>
                        <Field placeholder={"Enter state"} type="text" name="address.state"
                               className="form-control"/>
                        <ErrorMessage name="address.state" component="div"
                                      className="text-danger"/>
                    </FormGroup>
                </div>

                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>Postal Code</FormLabel>
                        <Field placeholder={"Enter postal code"} type="text"
                               name="address.postalCode" className="form-control"/>
                        <ErrorMessage name="address.postalCode" component="div"
                                      className="text-danger"/>
                    </FormGroup>
                </div>

                <div className={'mb-2'}>
                    <FormGroup>
                        <FormLabel>Country</FormLabel>
                        <Field placeholder={"Enter country"} type="text" name="address.country"
                               className="form-control"/>
                        <ErrorMessage name="address.country" component="div"
                                      className="text-danger"/>
                    </FormGroup>

                </div>
                <div className={'mt-5'}>
                    <Button variant="secondary" onClick={modelHandler} className={'me-3'}>
                        Cancel
                    </Button>
                    <Button variant="primary" type={"submit"}>
                        Book
                    </Button>
                </div>

            </Form>
        </Formik>
    </>

}