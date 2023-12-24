'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import BusTable from "@/components/sharedComponents/BusTable";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {IoMdAdd} from "react-icons/io";

export default function BusListPage() {
    let router = useRouter();
    const [data, setData] = useState(null);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log("data", data);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/buses');
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


            {/*     delete bus confirm modal box     */}
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

        </main>
    )
}
