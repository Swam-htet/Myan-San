'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import StaffTable from "@/components/staff/StaffTable";
import Modal from "react-bootstrap/Modal";
import {IoMdAdd} from "react-icons/io";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useGetAllStaff from "@/libs/hooks/useGetAllStaff";
import useDeleteStaffByIDMutation from "@/libs/hooks/useDeleteStaffByIDMutation";
import DeleteConfirmModel from "@/components/shared/DeleteConfirmModel";
import StaffForm from "@/components/staff/StaffForm";
import useCreateStaffMutation from "@/libs/hooks/useCreateStaffMutation";

export default function StaffListPage() {
    let router = useRouter();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [data, setData] = useState([]);
    const [deleteID, setDeleteID] = useState();

    let GetAllStaff = useGetAllStaff();
    let DeleteStaffByIDMutation = useDeleteStaffByIDMutation();
    let CreateStaffMutation = useCreateStaffMutation();



    const addModalHandler = () => {
        setShowAddModal(!showAddModal);
    }

    const deleteModalHandler = (id) => {
        setDeleteID(id);
        setShowDeleteModal(!showDeleteModal);
    }

    const submitHandler = (values) => {
        CreateStaffMutation.mutate(values);
        setShowAddModal(!showAddModal);
    }


    useEffect(() => {
        if (GetAllStaff.isSuccess) {
            setData(GetAllStaff.data);
        }
    }, [GetAllStaff.data]);

    if (GetAllStaff.isLoading) {
        return <Loading/>
    }

    if (GetAllStaff.isError) {
        return <Error message={GetAllStaff.error.message}/>
    }

    return (<main>
        <div className={'d-flex justify-content-between align-items-center my-3'}>
            <h1>Staf Management</h1>
            <button className={'btn btn-primary'} onClick={addModalHandler}>
                Add New Staff <IoMdAdd/>
            </button>
        </div>

        {data &&
            <div style={{overflowY: "scroll"}}><StaffTable staffList={data} deleteModalHandler={deleteModalHandler}/>
            </div>}

        {/*     add new staff modal box     */}
        <Modal show={showAddModal} onHide={addModalHandler} size={"xl"} scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Staff</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <StaffForm onSubmit={submitHandler} modelHandler={addModalHandler}/>
            </Modal.Body>

        </Modal>


        <DeleteConfirmModel message={`Do you want to delete staff ID -${deleteID}`}
                            modelHandler={() => {
                                setShowDeleteModal(!showDeleteModal);
                            }}
                            submitHandler={() => {
                                console.log("Delete id -", deleteID);
                                DeleteStaffByIDMutation.mutate(deleteID);
                                setShowDeleteModal(!showDeleteModal)

                            }}
                            showDeleteModel={showDeleteModal}/>

    </main>)
}
