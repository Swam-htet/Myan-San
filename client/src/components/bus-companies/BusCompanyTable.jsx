'use client';

import {useRouter} from "next/navigation";
import TableColumnHeader from "@/components/shared/TableColumnHeader";
import TableCell from "@/components/shared/TableCell";
import {Table} from "antd";
import {DeleteOutlined, RightOutlined} from "@ant-design/icons";

export default function BusCompanyTable({data, loading}) {
    let router = useRouter();


    let columns = [
        {
            dataIndex: "key",
            title: <TableColumnHeader>No</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "name",
            title: <TableColumnHeader>Company Name</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "address",
            title: <TableColumnHeader>Address : Street</TableColumnHeader>,
            render: (text) => <TableCell>{text.street}</TableCell>,
        },
        {
            dataIndex: "address",
            title: <TableColumnHeader>Address : City</TableColumnHeader>,
            render: (text) => <TableCell>{text.city}</TableCell>,
        },
        {
            dataIndex: "address",
            title: <TableColumnHeader>Address : State</TableColumnHeader>,
            render: (text) => <TableCell>{text.state}</TableCell>,
        },
        {
            dataIndex: "address",
            title: <TableColumnHeader>Address : County</TableColumnHeader>,
            render: (text) => <TableCell>{text.country}</TableCell>,
        },
        {
            dataIndex: "address",
            title: <TableColumnHeader>Address : Postal Code</TableColumnHeader>,
            render: (text) => <TableCell>{text.postalCode}</TableCell>,
        },
        {
            dataIndex: "_id",
            render: (text) => {
                return (
                    <p className="text-sm m-0 text-red-500" onClick={()=>console.log("Delete company - ",text)}>
                        <DeleteOutlined/>
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
               loading={loading}/>
    </>
}