'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {IoMdAdd} from "react-icons/io";
import CompanyTable from "@/components/general/CompanyTable";
import TownTable from "@/components/general/TownTable";
import useGetAllTowns from "@/libs/hooks/useGetAllTowns";
import useGetAllCompanies from "@/libs/hooks/useGetAllCompany";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import DeleteConfirmModel from "@/components/shared/DeleteConfirmModel";
import useDeleteCompanyByIDMutation from "@/libs/hooks/useDeleteCompanyByIDMutation";
import useDeleteTownByIDMutation from "@/libs/hooks/useDeleteTownByIDMutation";
import useCreateCompanyMutation from "@/libs/hooks/useCreateCopmanyMutation";
import useCreateTownMutation from "@/libs/hooks/useCreateTownMutation";
import Modal from "react-bootstrap/Modal";
import TownForm from "@/components/general/TownForm";
import CompanyForm from "@/components/general/CompanyForm";
import toast from "react-hot-toast";

export default function GeneralListPage() {

    let router = useRouter();
    const [companyData, setCompanyData] = useState(null);
    const [townData, setTownData] = useState(null);

    const [showTownAddModal, setShowTownAddModal] = useState(false);
    const [showTownDeleteModal, setShowTownDeleteModal] = useState(false);

    const [showCompanyAddModal, setShowCompanyAddModal] = useState(false);
    const [showCompanyDeleteModal, setShowCompanyDeleteModal] = useState(false);

    const [townDeleteID, setTownDeleteID] = useState();
    const [companyDeleteID, setCompanyDeleteID] = useState();


    const GetAllTowns = useGetAllTowns();
    const GetAllCompanies = useGetAllCompanies();

    const DeleteCompanyByIDMutation = useDeleteCompanyByIDMutation();
    const DeleteTownByIDMutation = useDeleteTownByIDMutation();

    const CreateCompanyMutation = useCreateCompanyMutation();
    const CreateTownMutation = useCreateTownMutation();

    useEffect(() => {
        if (GetAllCompanies.isSuccess) {
            setCompanyData(GetAllCompanies.data);
        }
    }, [GetAllCompanies.data]);

    useEffect(() => {
        if (GetAllTowns.isSuccess) {
            setTownData(GetAllTowns.data);
        }
    }, [GetAllTowns.data]);

    useEffect(() => {
        if (DeleteCompanyByIDMutation.isSuccess) {
            toast.success("Company deleted successfully")
        }
        if (DeleteCompanyByIDMutation.isError) {
            toast.error("Can't delete company right now, please try again later");
        }
    }, [DeleteCompanyByIDMutation.isError, DeleteTownByIDMutation.isSuccess, DeleteCompanyByIDMutation.data]);

    useEffect(() => {
        if (DeleteTownByIDMutation.isSuccess) {
            toast.success("Town deleted successfully")
        }
        if (DeleteTownByIDMutation.isError) {
            toast.error("Can't delete town right now, please try again later");
        }
    }, [DeleteTownByIDMutation.isError, DeleteTownByIDMutation.isSuccess, DeleteTownByIDMutation.data]);

    if (GetAllTowns.isLoading || GetAllCompanies.isLoading) {
        return <Loading/>
    }

    if (GetAllTowns.isError) {
        return <Error message={GetAllTowns.error.message}/>
    }

    if (GetAllCompanies.isError) {
        return <Error message={GetAllCompanies.error.message}/>
    }


    const addTownModalHandler = () => {
        setShowTownAddModal(!showTownAddModal);
    }

    const deleteTownModalHandler = (id) => {
        setTownDeleteID(id);
        setShowTownDeleteModal(!showTownDeleteModal);
    }

    const addCompanyModalHandler = () => {
        setShowCompanyAddModal(!showCompanyAddModal);
    }

    const deleteCompanyModalHandler = (id) => {
        setCompanyDeleteID(id);
        setShowCompanyDeleteModal(!showCompanyDeleteModal);
    }

    const onSubmitForTownAddForm = (values) => {
        CreateTownMutation.mutate(values)
        setShowTownAddModal(!showTownAddModal)
    }

    const onSubmitForCompanyAddForm = (values) => {
        CreateCompanyMutation.mutate(values);
        setShowCompanyAddModal(!showCompanyAddModal);
    }


    return (
        <main>
            <div className={'mb-5'}>
                <div className={'d-flex justify-content-between my-3'}>
                    <h3>Company Management</h3>
                    <button className={'btn btn-primary'} onClick={addCompanyModalHandler}>
                        Add New Company <IoMdAdd/>
                    </button>
                </div>
                {
                    companyData && <CompanyTable townList={companyData} deleteModalHandler={deleteCompanyModalHandler}/>
                }
            </div>

            <div className={'mb-5'}>
                <div className={'d-flex justify-content-between my-3'}>
                    <h3>Town Management</h3>
                    <button className={'btn btn-primary'} onClick={addTownModalHandler}>
                        Add New Town <IoMdAdd/>
                    </button>
                </div>
                {
                    townData && <TownTable townList={townData} deleteModalHandler={deleteTownModalHandler}/>
                }
            </div>

            <Modal show={showCompanyAddModal} onHide={addCompanyModalHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Bus Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CompanyForm onSubmit={onSubmitForCompanyAddForm} modelHandler={addCompanyModalHandler}/>
                </Modal.Body>

            </Modal>

            <Modal show={showTownAddModal} onHide={addTownModalHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Town</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TownForm onSubmit={onSubmitForTownAddForm} modelHandler={addTownModalHandler}/>
                </Modal.Body>

            </Modal>

            <DeleteConfirmModel message={`Do you want to delete company ID -${companyDeleteID}`}
                                modelHandler={() => {
                                    setShowCompanyDeleteModal(!showCompanyDeleteModal);
                                }}
                                submitHandler={() => {
                                    console.log("Delete id -", companyDeleteID);
                                    DeleteCompanyByIDMutation.mutate(companyDeleteID);
                                    setShowCompanyDeleteModal(!showCompanyDeleteModal)
                                }}
                                showDeleteModel={showCompanyDeleteModal}/>

            <DeleteConfirmModel message={`Do you want to delete town ID -${townDeleteID}`}
                                modelHandler={() => {
                                    setShowTownDeleteModal(!showTownDeleteModal);
                                }}
                                submitHandler={() => {
                                    DeleteTownByIDMutation.mutate(townDeleteID);
                                    setShowTownDeleteModal(!showTownDeleteModal);

                                }}
                                showDeleteModel={showTownDeleteModal}/>


        </main>
    )
}
