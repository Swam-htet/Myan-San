import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Button, Container} from 'react-bootstrap';
import useGetTownByID from "@/libs/hooks/useGetTownByID";

const TownEditForm = ({id, onSubmit, modelHandler}) => {

    const [data, setData] = useState();

    const GetTownDetail = useGetTownByID(id);

    useEffect(() => {
        setData(GetTownDetail.data);
    }, [GetTownDetail.isSuccess]);

    if (GetTownDetail.isLoading) {
        return 'Loading';
    }
    if (GetTownDetail.isError) {
        return 'Error';
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name of the town is required'),
        station: Yup.string().required('Name of the station is required'),
    });


    return (
        <Container>
            {data ? <Formik initialValues={{
                name: data.name,
                station: data.station,
            }}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                <Form>
                    {/* First Name */}
                    <div className="mb-3">
                        <label htmlFor="name">Name Of Town</label>
                        <Field type="text" placeholder={'Enter Name of the town'} id="name" name="name"
                               className="form-control"/>
                        <ErrorMessage name="name" component="div" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="station">Name of the Station</label>
                        <Field type="text" placeholder={'Enter Name of the Station'} id="station" name="station"
                               className="form-control"/>
                        <ErrorMessage name="station" component="div" className="text-danger"/>
                    </div>


                    <div>
                        <Button variant="secondary" onClick={modelHandler} className={'me-2'}>
                            Cancel
                        </Button>
                        <Button variant="primary" type={"submit"}>
                            Save
                        </Button>
                    </div>
                </Form>
            </Formik> : "-"}
        </Container>
    );
};

export default TownEditForm;
