'use client';

import {usePathname, useRouter} from "next/navigation";
import {AiFillDelete} from "react-icons/ai";

export default function CompanyTable({townList, deleteModalHandler}) {
    return <>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Postal Code</th>
                <th scope="col">Address</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {
                townList.map((company, index) => {
                        return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{company.name}</td>
                                <td>{company.address.postalCode}</td>
                                <td>{company.address.street}, {company.address.city}, {company.address.state},</td>
                                <td style={{cursor: "pointer"}} className={'text-danger'}
                                    onClick={() => deleteModalHandler(company._id)}>
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