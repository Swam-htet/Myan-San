'use client';

import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import SeatCard from "@/components/sharedComponents/SeatCard";
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";


export default function TravelRoutesPage({params}) {
    let router = useRouter();
    const [data, setData] = useState(null);
    const [seatList, setSeatList] = useState([]);
    const [bookModel, setBookModel] = useState(false);

    console.log("SeatList -", seatList);

    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('http://localhost:4000/api/routes/' + params.id);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    const selectSeatHandler = (id) => {
        if (seatList.includes((id))) {
            console.log("Removed")
            let updatedSeatList = seatList.filter((seat) => seat !== id);
            setSeatList(updatedSeatList);
        } else {
            console.log("Added")
            setSeatList([...seatList, id])
        }
    }

    const modelHandler = () => {
        setBookModel(!bookModel);
    }
    return (
        <main className={'container'}>
            <div className={'row mt-4'}>
                {
                    data ? <div>
                        <div className={'d-flex justify-content-between'}>
                            <h2>Bus Details</h2>
                            <button className={'btn btn-outline-primary'} onClick={modelHandler}
                                    disabled={!seatList.length}>Book
                            </button>
                        </div>
                        <div className={'row'}>
                            <div className={'col-6'}>

                                <ul>
                                    <li>Driver: {data.bus.driver.name}</li>
                                    <li>Bus Registration No : {data.bus.registrationNumber}</li>
                                    <li>Bus Model : {data.bus.model}, {data.bus.year}</li>
                                    <li>Bus Manufacture : {data.bus.make}</li>
                                    <li>Bus Type : {data.bus.class}</li>
                                </ul>
                            </div>

                            <div className={'col-6'}>
                                <h2>Company Details</h2>
                                <ul>
                                    <li>Company: {data.bus.company.name}</li>
                                    <li>Address: {data.bus.company.address.street}, {data.bus.company.address.city}, {data.bus.company.address.state}</li>
                                    <li>Bus Model : {data.bus.model}, {data.bus.year}</li>

                                </ul>
                            </div>
                            <div className={'col-6'}>
                                <h2>Route Details</h2>
                                <ul>
                                    <li>From : {data.fromTown.name}, {data.fromTown.station}</li>
                                    <li>To : {data.toTown.name}, {data.toTown.station}</li>
                                    <li>Schedule Date: {new Date(data.scheduleDate).toLocaleString()}</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className={'text-center'}>Seat Order</h3>
                        <div className={'row justify-content-center'} style={{margin: "0 auto", maxWidth: "900px"}}>
                            {data.seats.map((seat) => (
                                <div className={'col-3 p-2'} key={seat._id}>
                                    <SeatCard data={seat} selectSeatHandler={selectSeatHandler} seatList={seatList}/>
                                </div>
                            ))}
                        </div>

                        <Modal show={bookModel} onHide={modelHandler}>
                            <Modal.Header closeButton>
                                <Modal.Title>Booking Bus Ticket</Modal.Title>
                            </Modal.Header>
                            
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                            
                            <Modal.Footer>
                                <Button variant="secondary" onClick={modelHandler}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={modelHandler}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </div> : "Loading..."
                }
            </div>
        </main>
    )
}
