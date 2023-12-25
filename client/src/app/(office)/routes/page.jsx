'use client';

import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import RouteTable from "@/components/travel-route/RouteTable";
import {IoMdAdd} from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

export default function RouteListPage() {
    let router = useRouter();
    let path = usePathname();
    
    const [data, setData] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    
    console.log("data", data);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/routes');
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    const deleteModalHandler = (id) => {
        console.log("Delete ID -", id);
        setShowDeleteModal(!showDeleteModal);
    }

    return (
        <main>
            <div className={'d-flex justify-content-between align-items-center my-3'}>
                <h1>Travel Route Management</h1>
                <button className={'btn btn-primary'}
                        onClick={() => router.push(`${path}/new`)}>
                    Add New Travel Route <IoMdAdd/>
                </button>
            </div>
            {
                data && <RouteTable deleteModalHandler={deleteModalHandler} routeList={data}/>
            }

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

        </main>
    )
}
