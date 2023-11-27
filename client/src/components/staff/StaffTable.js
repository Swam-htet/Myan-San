'use client';

import TableColumnHeader from "@/components/shared/TableColumnHeader";
import TableCell from "@/components/shared/TableCell";
import {Table} from "antd";
import dayjs from "dayjs";
import {useRouter} from "next/navigation";
import {TbAntennaBars1} from "react-icons/tb";


export default function StaffTable({data, loading}) {
    let router = useRouter();

    const onRowClick = (record) => {
        router.push(
            `/staff/${record._id}`,
        );
    };

    let columns = [
        {
            dataIndex: "key",
            title: <TableColumnHeader>No</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "firstName",
            title: <TableColumnHeader>First name</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "lastName",
            title: <TableColumnHeader>Last name</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "email",
            title: <TableColumnHeader>Email</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "dateOfBirth",
            title: <TableColumnHeader>Birthday</TableColumnHeader>,
            render: (date) => <TableCell>{dayjs(date).format('DD/MM/YYYY')}</TableCell>,
        },
        {
            dataIndex: "startDate",
            title: <TableColumnHeader>Start Date</TableColumnHeader>,
            render: (date) => <TableCell>{dayjs(date).format('DD/MM/YYYY')}</TableCell>,
        },
        {
            dataIndex: "role",
            title: <TableColumnHeader>Role</TableColumnHeader>,
            render: (role) => <TableCell>{role === "staff" ? "Staff" : "Admin"}</TableCell>,
        },
        {
            render: () => {
                return (
                    <p className="text-sm m-0">
                        <TbAntennaBars1 />

                    </p>
                );
            },
        },

    ];
    return <>

        <Table columns={columns}
               bordered={true}
               dataSource={data}
               pagination={false}
               onRow={(record) => {
                   return {
                       onClick: (event) => {
                           onRowClick(record);
                       },
                   };
               }}
               loading={loading}/>
    </>
}