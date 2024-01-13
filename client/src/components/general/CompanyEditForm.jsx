import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Container } from "react-bootstrap";
import useGetCompanyByID from "@/libs/hooks/useGetCompanyByID";

const CompanyEditForm = ({ id, onSubmit, modelHandler }) => {
  const [data, setData] = useState();

  const GetCompanyDetail = useGetCompanyByID(id);

  useEffect(() => {
    setData(GetCompanyDetail.data);
  }, [GetCompanyDetail.isSuccess]);

  if (GetCompanyDetail.isLoading) {
    return "Loading";
  }
  if (GetCompanyDetail.isError) {
    return "Error";
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name of the company is required"),
    address: Yup.object().shape({
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      postalCode: Yup.string().required("Postal Code is required"),
      country: Yup.string().required("Country is required"),
    }),
  });

  return (
    <Container>
      {data ? (
        <Formik
          initialValues={{
            name: data.name,
            address: {
              street: data.address.street,
              city: data.address.city,
              state: data.address.state,
              postalCode: data.address.postalCode,
              country: data.address.country,
            },
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form>
            {/* Company Name */}
            <div className="mb-3">
              <label htmlFor="name">Company Name</label>
              <Field
                type="text"
                placeholder={"Enter Name of the Company"}
                id="name"
                name="name"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Address */}
            <div className="mb-3">
              <label htmlFor="address.street">Street</label>
              <Field
                type="text"
                placeholder={"Enter Street"}
                id="address.street"
                name="address.street"
                className="form-control"
              />
              <ErrorMessage
                name="address.street"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address.city">City</label>
              <Field
                type="text"
                placeholder={"Enter City"}
                id="address.city"
                name="address.city"
                className="form-control"
              />
              <ErrorMessage
                name="address.city"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address.state">State</label>
              <Field
                type="text"
                placeholder={"Enter State"}
                id="address.state"
                name="address.state"
                className="form-control"
              />
              <ErrorMessage
                name="address.state"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address.postalCode">Postal Code</label>
              <Field
                type="text"
                placeholder={"Enter Postal Code"}
                id="address.postalCode"
                name="address.postalCode"
                className="form-control"
              />
              <ErrorMessage
                name="address.postalCode"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address.country">Country</label>
              <Field
                type="text"
                placeholder={"Enter Country"}
                id="address.country"
                name="address.country"
                className="form-control"
              />
              <ErrorMessage
                name="address.country"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <Button
                variant="secondary"
                onClick={modelHandler}
                className={"me-2"}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Formik>
      ) : (
        "-"
      )}
    </Container>
  );
};

export default CompanyEditForm;
