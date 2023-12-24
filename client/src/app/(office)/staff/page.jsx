'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import StaffTable from "@/components/sharedComponents/StaffTable";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {IoMdAdd} from "react-icons/io";

export default function StaffListPage() {
    let router = useRouter();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [data, setData] = useState([]);

    console.log("data", data);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/staff');
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    const addModalHandler = () => {
        setShowAddModal(!showAddModal);
    }

    const deleteModalHandler = (id) => {
        console.log("Delete ID -", id);
        setShowDeleteModal(!showDeleteModal);
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
        <Modal show={showAddModal} onHide={addModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={addModalHandler}>
                    Close
                </Button>
                <Button variant="primary" onClick={addModalHandler}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>


        {/*     delete staff confirm modal box     */}
        <Modal show={showDeleteModal} onHide={() => {
            setShowDeleteModal(!showDeleteModal)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setShowDeleteModal(!showDeleteModal)
                }}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => {
                    setShowDeleteModal(!showDeleteModal)
                }}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>

    </main>)
}
