import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Button} from 'react-bootstrap';
import * as Yup from 'yup';

// Define the Yup validation schema
const validationSchema = Yup.object().shape({
    registrationNumber: Yup.string().required('Registration Number is Required'),
    make: Yup.string().required('Make of the Bus Required'),
    model: Yup.string().required('Model of the Bus Required'),
    year: Yup.number().required('Year of bus Required'),
    driver: Yup.object().shape({
        name: Yup.string().required('Name of the driver is Required'),
        licenseNumber: Yup.string().required('License Number of the driver is Required')
    }),
    company: Yup.string().required('Company of the bus is Required'),
    class: Yup.string().required('Class of the bus is Required')
});


const BusForm = ({data, onSubmitHandler,modelHandler,companyList}) => {
    const initialValues = {
        registrationNumber: data ? data.registrationNumber : '',
        make: data ? data.make : '',
        model: data ? data.model : '',
        year: data ? data.year : '',
        driver: {
            name: data ? data.driver.name : '',
            licenseNumber: data ? data.driver.licenseNumber : ''
        },
        company: data ? data.company._id : '',
        class: data ? data.class : ''
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
        >
            <Form>
                <div className={'mt-2'}>
                    <label htmlFor="registrationNumber">Registration Number</label>
                    <Field type="text" name="registrationNumber" placeholder="Enter Registration Number"
                           className={'form-control mb-1'}/>
                    <ErrorMessage name="registrationNumber" component="div" className="text-danger"/>
                </div>

                <div className={'mt-2'}>
                    <label htmlFor="make">Make</label>
                    <Field type="text" name="make" placeholder="Enter Make" className={'form-control mb-1'}/>
                    <ErrorMessage name="make" component="div" className="text-danger"/>
                </div>

                <div className={'mt-2'}>
                    <label htmlFor="model">Model</label>
                    <Field type="text" name="model" placeholder="Enter Model" className={'form-control mb-1'}/>
                    <ErrorMessage name="model" component="div" className="text-danger"/>
                </div>

                <div className={'mt-2'}>
                    <label htmlFor="year">Year</label>
                    <Field type="text" name="year" placeholder="Enter Year" className={'form-control mb-1'}/>
                    <ErrorMessage name="year" component="div" className="text-danger"/>
                </div>

                <div className={'mt-2'}>
                    <label htmlFor="driver.name">Driver Name</label>
                    <Field type="text" name="driver.name" placeholder="Enter Driver Name"
                           className={'form-control mb-1'}/>
                    <ErrorMessage name="driver.name" component="div" className="text-danger"/>
                </div>

                <div className={'mt-2'}>
                    <label htmlFor="driver.licenseNumber">License Number</label>
                    <Field type="text" name="driver.licenseNumber" placeholder="Enter Driver License Number"
                           className={'form-control mb-1'}/>
                    <ErrorMessage name="driver.licenseNumber" component="div" className="text-danger"/>
                </div>

                <div className={'mt-2'}>
                    <label htmlFor="company">Company</label>
                    <Field as="select" name="company" placeholder="Select Company" className="form-control mb-1">
                        <option value="" disabled>Select a Company</option>
                        {companyList.map(company => (
                            <option key={company._id} value={company._id}>
                                {company.name}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="company" component="div" className="text-danger" />
                </div>

                <div className={'mt-2'}>
                    <label htmlFor="class">Bus Class</label>
                    <Field as="select" name="class" placeholder="Select Bus Class" className="form-control mb-1">
                        <option value="" disabled>Select a Company</option>
                        {['First Class', 'Business Class', "Economy Class", "Sleeper Bus"].map(company => (
                            <option key={company} value={company}>
                                {company}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="class" component="div" className="text-danger"/>
                </div>

                <div className={'mt-3'}>
                    <Button variant={'secondary'} className={'me-3'} onClick={modelHandler}>
                        Cancel
                    </Button>
                    <Button type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Formik>

    )
        ;
};

export default BusForm;
