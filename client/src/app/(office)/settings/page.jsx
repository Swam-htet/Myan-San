'use client';

import React, {useEffect, useState} from "react";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useGetAllFaqs from "@/libs/hooks/useGellAllFaqs";
import {Accordion} from "react-bootstrap";
import FaqForm from "@/components/faqs/FaqForm";
import toast from "react-hot-toast";
import useCreateFaqMutation from "@/libs/hooks/useCreateFaqMutation";

export default function GeneralListPage() {
    const [faqsData, setFaqsData] = useState(null);


    const GetAllFaqs = useGetAllFaqs();


    const AddNewFaqMutation = useCreateFaqMutation();

    useEffect(() => {
        if (GetAllFaqs.isSuccess) {
            setFaqsData(GetAllFaqs.data);
        }
    }, [GetAllFaqs.data]);

    useEffect(() => {

        if(AddNewFaqMutation.isSuccess){
            toast.success("New Faq is created successfully");
        }
        if(AddNewFaqMutation.isError){
            toast.error("Can't create new Faq right now, try again later");
        }
    }, [AddNewFaqMutation.data,AddNewFaqMutation.isSuccess,AddNewFaqMutation.isError]);

    if (GetAllFaqs.isLoading) {
        return <Loading/>
    }

    if (GetAllFaqs.isError) {
        return <Error message={GetAllFaqs.error.message}/>
    }


    const addNewFaqHandler = values =>{
        AddNewFaqMutation.mutate(values);
    }

    return (
        <main>


            <div className={'mb-5'}>
                <div className={'d-flex justify-content-between my-3'}>
                    <h3>Faq Management</h3>
                    
                </div>
                <div>
                    <Accordion>
                        {
                            faqsData && faqsData.map((faq, index) => {
                                return (<Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {
                                            faq.answer
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>)
                            })
                        }

                    </Accordion>
                    
                </div>

                <div className={'mt-3'}>
                    <FaqForm submitHandler={addNewFaqHandler}/>
                </div>
            </div>

        </main>
    )
}
