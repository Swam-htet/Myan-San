'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import {IoMdAdd} from "react-icons/io";
import CompanyTable from "@/components/sharedComponents/CompanyTable";
import TownTable from "@/components/sharedComponents/TownTable";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

export default function GeneralListPage() {

    let router = useRouter();
    const [companyData, setCompanyData] = useState(null);
    const [townData, setTownData] = useState(null);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/companies');
                setCompanyData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/towns');
                setTownData(response.data);
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
            <div className={'mb-5'}>
                <div className={'d-flex justify-content-between my-3'}>
                    <h3>Company Management</h3>
                    <button className={'btn btn-primary'} onClick={addModalHandler}>
                        Add New Company <IoMdAdd/>
                    </button>
                </div>
                {
                    companyData && <CompanyTable townList={companyData} deleteModalHandler={deleteModalHandler}/>
                }
            </div>


            <div className={'mb-5'}>
                <div className={'d-flex justify-content-between my-3'}>
                    <h3>Town Management</h3>
                    <button className={'btn btn-primary'} onClick={addModalHandler}>
                        Add New Town <IoMdAdd/>
                    </button>
                </div>
                {
                    townData && <TownTable townList={townData} deleteModalHandler={deleteModalHandler}/>
                }
            </div>

            {/*     add new modal box     */}
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


            {/*     delete confirm modal box     */}
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
