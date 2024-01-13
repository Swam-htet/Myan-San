"use client";

import { useEffect, useState } from "react";
import useGetTicketByID from "@/libs/hooks/useGetTicketDetailByID";
import Error from "@/components/layouts/Error";
import Loading from "@/components/layouts/Loading";

export default function TicketDetailPage({ params }) {
  let [data, setData] = useState(null);

  let GetTicketDetail = useGetTicketByID(params.id);

  useEffect(() => {
    setData(GetTicketDetail.data);
  }, [GetTicketDetail.data, GetTicketDetail.isSuccess]);

  if (GetTicketDetail.isLoading) {
    return <Loading />;
  }
  if (GetTicketDetail.isError) {
    return <Error message={GetTicketDetail.error} />;
  }
  return (
    <div>
      {data && (
        <div>
          <div className={"card p-3 m-4"}>
            <h5>
              Name : {data.customer.firstName + " " + data.customer.lastName}
            </h5>
            <h5>Email : {data.customer.email}</h5>
            <h5>Phone : {data.customer.phoneNumber}</h5>
            <h5>NRC : {data.customer.NRC}</h5>
            <h5>
              Address : {data.customer.address.street},{" "}
              {data.customer.address.city}, {data.customer.address.state},{" "}
              {data.customer.address.country}
            </h5>
          </div>
          <div className={"card p-3 m-4"}>
            <h5>
              {data.route.toTown.name},{data.route.toTown.station} -{" "}
              {data.route.fromTown.name},{data.route.toTown.station}{" "}
            </h5>
            <h5>Driver : {data.route.bus.driver.name} </h5>
            <h5>
              Bus : {data.route.bus.make}, {data.route.bus.model},{" "}
              {data.route.bus.year}, {data.route.bus.class}{" "}
            </h5>
          </div>
          <div className={"row"}>
            {data.seats.map((seat, index) => {
              return (
                <div className={"col-3"} key={index}>
                  <div className={"card p-4"}>
                    <h5>Seat : {seat.seatID}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
