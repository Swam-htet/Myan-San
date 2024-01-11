'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import useGetAllStaff from "@/libs/hooks/useGetAllStaff";
import useDeleteStaffByIDMutation from "@/libs/hooks/useDeleteStaffByIDMutation";
import toast from "react-hot-toast";

import useCreateStaffMutation from "@/libs/hooks/useCreateStaffMutation";
import DeleteConfirmModel from "@/components/shared/DeleteConfirmModel";
import Modal from "react-bootstrap/Modal";
import StaffTable from "@/components/staff/StaffTable";
import {IoMdAdd} from "react-icons/io";
import StaffForm from "@/components/staff/StaffForm";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useUpdateStaffMutation from "@/libs/hooks/useUpdateBusMutation";


export default function StaffListPage() {
    let router = useRouter();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [data, setData] = useState([]);

    const [deleteID, setDeleteID] = useState();
    const [editID, setEditID] = useState();

    let GetAllStaff = useGetAllStaff();
    let DeleteStaffByIDMutation = useDeleteStaffByIDMutation();
    let CreateStaffMutation = useCreateStaffMutation();
    let UpdateStaffMutation = useUpdateStaffMutation(editID);

    const addModalHandler = () => {
        setShowAddModal(!showAddModal);
    }

    const editModalHandler = () => {
        setShowEditModal(!showEditModal);
    }

    const deleteModalHandler = (id) => {
        setDeleteID(id);
        setShowDeleteModal(!showDeleteModal);
    }

    const submitHandler = (values) => {
        CreateStaffMutation.mutate(values);
        setShowAddModal(!showAddModal);
    }

    const submitEditHandler = (values) => {
        UpdateStaffMutation.mutate(values);
        setShowAddModal(!showAddModal);
    }


    useEffect(() => {
        if (GetAllStaff.isSuccess) {
            setData(GetAllStaff.data);
        }
    }, [GetAllStaff.data]);


    useEffect(() => {
        if (DeleteStaffByIDMutation.isSuccess) {
            toast.success("Staff deleted successfully")
        }
        if (DeleteStaffByIDMutation.isError) {
            toast.error("Staff cannot be deleted right now, please try again later ")
        }
    }, [DeleteStaffByIDMutation.data, DeleteStaffByIDMutation.isSuccess, DeleteStaffByIDMutation.isError]);

    useEffect(() => {
        if (CreateStaffMutation.isSuccess) {
            toast.success("Staff created successfully")
        }
        if (CreateStaffMutation.isError) {
            toast.error("Staff cannot be created right now, please try again later ")
        }
    }, [CreateStaffMutation.data, CreateStaffMutation.isSuccess, CreateStaffMutation.isError]);

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
            <div style={{overflowY: "scroll"}}>
                <StaffTable editModalHandler={editModalHandler} staffList={data} deleteModalHandler={deleteModalHandler}/>
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

        <Modal show={showEditModal} onHide={editModalHandler} size={"xl"} scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Staff</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <StaffForm onSubmit={submitEditHandler}
                           modelHandler={editModalHandler}/>
            </Modal.Body>

        </Modal>



        <DeleteConfirmModel message={`Doyouwanttodelete staffID -${deleteID}`}
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
