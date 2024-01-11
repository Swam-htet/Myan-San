'use client';

import {AiFillDelete} from "react-icons/ai";
import dayjs from "dayjs";
import {usePathname, useRouter} from "next/navigation";
import {FaMap} from "react-icons/fa";

export default function RouteTable({routeList, deleteModalHandler}) {
    let router = useRouter();
    let path = usePathname();

    return <>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Schedule Date</th>
                <th scope="col">Driver</th>
                <th scope="col">Registration Number</th>
                <th scope="col">Company</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {
                routeList.map((route, index) => {
                        return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{route.fromTown.name}</td>
                                <td>{route.toTown.name}</td>
                                <td>{dayjs(route.scheduleDate).format("MM/DD/YYYY")}</td>
                                <td>{route.bus.driver.name}</td>
                                <td>{route.bus.registrationNumber}</td>
                                <td>{route.bus.company.name}</td>
                                <td style={{cursor: "pointer"}} className={'bg-light text-primary'}
                                    onClick={() => router.push(`${path}/${route._id}`)}>
                                    Detail <FaMap/>
                                </td>
                                <td style={{cursor: "pointer"}} className={'text-danger'}
                                    onClick={() => deleteModalHandler(route._id)}>
                                    Delete <AiFillDelete/>
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