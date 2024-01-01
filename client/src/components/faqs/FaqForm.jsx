'use client';

import {useFormik} from "formik";
import * as Yup from 'yup';


const FaqForm = ({submitHandler}) => {
    // Define validation schema using Yup
    const validationSchema = Yup.object({
        question: Yup.string().required('Question is required'),
        answer: Yup.string().required('Answer is required'),
    });

    // Formik hook to handle form state and validation
    const formik = useFormik({
        initialValues: {
            question: '',
            answer: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            submitHandler(values);
            actions.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={'w-50 my-2 p-2'}>
                {/* Question input */}
                <h3>Add New Frequently Ask Question</h3>
                <div>
                    <label htmlFor="question" className={'mb-1'}>Question:</label>
                    <input
                        type="text"
                        id="question"
                        name="question"
                        placeholder={"Enter question here"}
                        className={'form-control'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.question}
                    />
                    {formik.touched.question && formik.errors.question ? (
                        <div className={'text-danger'}>{formik.errors.question}</div>
                    ) : null}
                </div>
                {/* Answer input */}
                <div>
                    <label htmlFor="answer" className={'mb-1'}>Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        placeholder={"Enter answer here"}
                        name="answer"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.answer}
                        className={'form-control'}
                    />
                    {formik.touched.answer && formik.errors.answer ? (
                        <div className={'text-danger'}>{formik.errors.answer}</div>
                    ) : null}
                </div>

                {/* Submit button */}
                <div className={'mt-3'}>
                    <button className={'btn btn-primary'} type="submit">Add New</button>
                </div>
            </div>
        </form>
    );
};
export default FaqForm;