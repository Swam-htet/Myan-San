'use client';

import {usePathname, useRouter} from "next/navigation";
import {AiFillDelete} from "react-icons/ai";
import {TbBus} from "react-icons/tb";

export default function BusTable({busList, deleteModalHandler}) {
    let router = useRouter();
    let path = usePathname();
    return <>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Model</th>
                <th scope="col">Registration Number</th>
                <th scope="col">Class</th>
                <th scope="col">Driver</th>
                <th scope="col">Company</th>
                <th scope="col"></th>

            </tr>
            </thead>
            <tbody>
            {
                busList.map((bus, index) => {
                        return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{bus.model}, {bus.make}, {bus.year},</td>
                                <td>{bus.registrationNumber}</td>
                                <td>{bus.class}</td>
                                <td>{bus.driver.name}</td>
                                <td>{bus.company.name}</td>

                                <td style={{cursor: "pointer"}} className={'text-danger'}
                                    onClick={() => deleteModalHandler(bus._id)}>
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