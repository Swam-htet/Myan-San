'use client';

import {usePathname, useRouter} from "next/navigation";
import {AiFillDelete} from "react-icons/ai";
import {IoTicketOutline} from "react-icons/io5";

export default function TicketTable({ticketList, deleteModalHandler}) {
    let router = useRouter();
    let path = usePathname();
    return <>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">NRC</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Seats</th>
                <th scope="col">Schedule Date</th>
                <th scope="col"></th>
                <th scope="col"></th>

            </tr>
            </thead>
            <tbody>
            {
                ticketList.map((ticket, index) => {
                        return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ticket.customer.firstName} {ticket.customer.lastName}</td>
                                <td>{ticket.customer.email}</td>
                                <td>{ticket.customer.phoneNumber}</td>
                                <td>{ticket.customer.NRC}</td>
                                <td>{ticket.route.fromTown.name}</td>
                                <td>{ticket.route.toTown.name}</td>
                                <td>{ticket.seats.length}</td>
                                <td>{ticket.route.scheduleDate}</td>

                                <td style={{cursor: "pointer"}} className={'text-success'}
                                    onClick={() => router.push(`${path}/${ticket._id}`)}>
                                    <IoTicketOutline/>
                                </td>

                                <td style={{cursor: "pointer"}} className={'text-danger'}
                                    onClick={() => deleteModalHandler(ticket._id)}>
                                    <AiFillDelete/>
                                </td>
                            </tr>
                        )
                    }
                )
            }

            </tbody>

        </table>
    </>
}