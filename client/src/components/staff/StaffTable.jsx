'use client';

import {usePathname, useRouter} from "next/navigation";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import dayjs from "dayjs";

export default function StaffTable({editModalHandler,staffList, deleteModalHandler}) {
    let router = useRouter();
    let path = usePathname();
    return <>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Start At</th>
                <th scope="col">Address</th>
                <th scope="col">Role</th>
                <th scope="col"></th>

            </tr>
            </thead>
            <tbody>
            {
                staffList.map((staff, index) => {
                        return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{staff._id}</td>
                                <td>{staff.firstName}</td>
                                <td>{staff.lastName}</td>
                                <td>{staff.email}</td>
                                <td>{dayjs(staff.dateOfBirth).format("MM/DD/YYYY")}</td>
                                <td>{dayjs(staff.startDate).format("MM/DD/YYYY")}</td>
                                <td>{staff.address.street}, {staff.address.city}, {staff.address.state}</td>
                                <td>{staff.role}</td>
                                <td style={{cursor: "pointer"}} className={'text-success'}
                                    onClick={() => editModalHandler(staff._id)}>
                                    <AiFillEdit/>
                                </td>
                                <td style={{cursor: "pointer"}} className={'text-danger'}
                                    onClick={() => deleteModalHandler(staff._id)}>
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