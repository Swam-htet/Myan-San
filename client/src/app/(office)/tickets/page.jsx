'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import BusTable from "@/components/sharedComponents/BusTable";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {IoMdAdd} from "react-icons/io";
import TicketTable from "@/components/sharedComponents/TicketTable";

export default function BusListPage() {
    let router = useRouter();
    const [data, setData] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log("data", data);

    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/tickets');
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
                <h1>Ticket Management</h1>
            </div>
            {
                data && <TicketTable ticketList={data} deleteModalHandler={deleteModalHandler}/>
            }
            

            {/*     cancel ticket confirm modal box     */}
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
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => {
                        setShowDeleteModal(!showDeleteModal)
                    }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

        </main>
    )
}
