"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useGetRouteByID from "@/libs/hooks/useGetRouteById";
import { IoArrowBack } from "react-icons/io5";
import { IoIosBookmark } from "react-icons/io";
import SeatCard from "@/components/travel-route/SeatCard";
import Modal from "react-bootstrap/Modal";
import TicketBookingForm from "@/components/travel-route/TicketBookingForm";
import { useRouter } from "next/navigation";

export default function RouteDetail({ params }) {
  let [data, setData] = useState(null);
  let router = useRouter();

  let GetRouteDetail = useGetRouteByID(params.id);

  useEffect(() => {
    setData(GetRouteDetail.data);
  }, [GetRouteDetail.data, GetRouteDetail.isSuccess]);

  if (GetRouteDetail.isLoading) {
    return <Loading />;
  }

  if (GetRouteDetail.isError) {
    return <Error message={GetRouteDetail.error} />;
  }
  return (
    <div>
      {data ? (
        <div className={"mt-3"}>
          <button
            className={"btn btn-outline-primary"}
            onClick={() => router.back()}>
            <IoArrowBack />
            Back
          </button>

          <h2 className={"my-2"}>Bus Details</h2>

          <div className={"row"}>
            <div className={"col-6"}>
              <ul>
                <li>Driver: {data.bus.driver.name}</li>
                <li>Bus Registration No : {data.bus.registrationNumber}</li>
                <li>
                  Bus Model : {data.bus.model}, {data.bus.year}
                </li>
                <li>Bus Manufacture : {data.bus.make}</li>
                <li>Bus Type : {data.bus.class}</li>
              </ul>
            </div>

            <div className={"col-6"}>
              <h2>Company Details</h2>
              <ul>
                <li>Company: {data.bus.company.name}</li>
                <li>
                  Address: {data.bus.company.address.street},{" "}
                  {data.bus.company.address.city},{" "}
                  {data.bus.company.address.state}
                </li>
                <li>
                  Bus Model : {data.bus.model}, {data.bus.year}
                </li>
              </ul>
            </div>
            <div className={"col-6"}>
              <h2>Route Details</h2>
              <ul>
                <li>
                  From : {data.fromTown.name}, {data.fromTown.station}
                </li>
                <li>
                  To : {data.toTown.name}, {data.toTown.station}
                </li>
                <li>
                  Schedule Date: {new Date(data.scheduleDate).toLocaleString()}
                </li>
              </ul>
            </div>
          </div>

          <div
            className={"row justify-content-center"}
            style={{ margin: "0 auto", maxWidth: "900px" }}>
            {/*<div className={'d-flex justify-content-between'}>*/}
            {/*    <h3 className={'text-center'}>Seat Order</h3>*/}

            {/*    <div className={'d-flex'}>*/}
            {/*        <button disabled={!seatList.length > 0}*/}
            {/*                className={'btn btn-outline-primary me-2'}*/}
            {/*                onClick={() => {*/}
            {/*                    setSeatList([])*/}
            {/*                }}>*/}
            {/*            Cancel Selected Seat({seatList.length})*/}
            {/*        </button>*/}
            {/*        <button className={'btn btn-primary'} onClick={modelHandler}*/}
            {/*                disabled={!seatList.length}>Book*/}
            {/*            <IoIosBookmark/>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {data.seats.map((seat) => (
              <div className={"col-3 p-2"} key={seat._id}>
                <SeatCard data={seat} display={true} seatList={data.seats} />
              </div>
            ))}
          </div>

          {/*<Modal show={bookModel} onHide={modelHandler} size="xl" centered scrollable={true}>*/}
          {/*    <Modal.Header closeButton>*/}
          {/*        <Modal.Title>Booking Bus Ticket</Modal.Title>*/}
          {/*    </Modal.Header>*/}

          {/*    <Modal.Body>*/}
          {/*        <TicketBookingForm initialValues={initialValues}*/}
          {/*                           submitHandler={submitHandler}*/}
          {/*                           resetBooking={() => {*/}
          {/*                               setBookModel(!bookModel);*/}
          {/*                               setSeatList([]);*/}
          {/*                           }}*/}
          {/*                           modelHandler={modelHandler}*/}
          {/*                           routeData={data}*/}
          {/*                           selectSeats={seatList}/>*/}
          {/*    </Modal.Body>*/}

          {/*</Modal>*/}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
