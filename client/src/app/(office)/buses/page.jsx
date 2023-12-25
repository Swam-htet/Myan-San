'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import BusTable from "@/components/bus/BusTable";
import Modal from "react-bootstrap/Modal";
import {IoMdAdd} from "react-icons/io";
import DeleteConfirmModel from "@/components/shared/DeleteConfirmModel";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useGetAllBuses from "@/libs/hooks/useGetAllBuses";
import useDeleteBusByIDMutation from "@/libs/hooks/useDeleteBusByIDMutation";
import BusForm from "@/components/bus/BusForm";
import useCreateBusMutation from "@/libs/hooks/useCreateBusMutation";
import useGetAllCompanies from "@/libs/hooks/useGetAllCompany";

export default function BusListPage() {
    let router = useRouter();
    const [data, setData] = useState(null);
    const [companies, setCompanies] = useState([])

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteID, setDeleteID] = useState();

    let GetAllBuses = useGetAllBuses();
    let DeleteBusByIDMutation = useDeleteBusByIDMutation();
    let CreateBusMutation = useCreateBusMutation();
    let GetAllCompanies = useGetAllCompanies();

    const addModalHandler = () => {
        setShowAddModal(!showAddModal);
    }

    const deleteModalHandler = (id) => {
        setDeleteID(id);
        setShowDeleteModal(!showDeleteModal);
    }

    const submitHandler = (values) => {
        CreateBusMutation.mutate(values);
        setShowAddModal(!showAddModal);

    }


    useEffect(() => {
        if (GetAllBuses.isSuccess) {
            setData(GetAllBuses.data);
        }
    }, [GetAllBuses.data]);

    useEffect(() => {
        if (GetAllCompanies.isSuccess) {
            setCompanies(GetAllCompanies.data);
        }
    }, [GetAllCompanies.data]);


    if (GetAllBuses.isLoading || GetAllCompanies.isLoading) {
        return <Loading/>
    }

    if (GetAllBuses.isError) {
        return <Error message={GetAllBuses.error.message}/>
    }
    return (
        <main>
            <div className={'d-flex justify-content-between align-items-center my-3'}>
                <h1>Bus Management</h1>
                <button className={'btn btn-primary'} onClick={addModalHandler}>
                    Add New Bus <IoMdAdd/>
                </button>
            </div>
            {
                data && <BusTable busList={data} deleteModalHandler={deleteModalHandler}/>
            }

            {/*     add new bus modal box     */}
            <Modal show={showAddModal} onHide={addModalHandler} size={"xl"} scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BusForm companyList={companies} onSubmitHandler={submitHandler} modelHandler={addModalHandler}/>
                </Modal.Body>
            </Modal>


            {/*     delete bus confirm modal box     */}
            <DeleteConfirmModel message={`Do you want to delete bus ID -${deleteID}`}
                                modelHandler={() => {
                                    setShowDeleteModal(!showDeleteModal);
                                }}
                                submitHandler={() => {
                                    console.log("Delete id -", deleteID);
                                    DeleteBusByIDMutation.mutate(deleteID);
                                    setShowDeleteModal(!showDeleteModal)

                                }}
                                showDeleteModel={showDeleteModal}/>
        </main>
    )
}
