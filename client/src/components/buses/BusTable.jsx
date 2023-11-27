import {useRouter} from "next/navigation";
import TableColumnHeader from "@/components/shared/TableColumnHeader";
import TableCell from "@/components/shared/TableCell";
import dayjs from "dayjs";
import {RightOutlined} from "@ant-design/icons";
import {Table} from "antd";
import {TbAntennaBars1} from "react-icons/tb";

export default function BusTable({data, loading}) {
    let router = useRouter();

    const onRowClick = (record) => {
        router.push(
            `/buses/${record._id}`,
        );
    };

    let columns = [
        {
            dataIndex: "key",
            title: <TableColumnHeader>No</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "registrationNumber",
            title: <TableColumnHeader>Registration Number</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "make",
            title: <TableColumnHeader>Make By</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "model",
            title: <TableColumnHeader>Model</TableColumnHeader>,
            render: (text) => <TableCell>{text}</TableCell>,
        },
        {
            dataIndex: "year",
            title: <TableColumnHeader>Year</TableColumnHeader>,
            render: (date) => <TableCell>{dayjs(date).format('DD/MM/YYYY')}</TableCell>,
        },
        {
            dataIndex: "class",
            title: <TableColumnHeader>Class</TableColumnHeader>,
            render: (role) => <TableCell>{role}</TableCell>,
        },
        {
            dataIndex: "company",
            title: <TableColumnHeader>Company</TableColumnHeader>,
            render: (role) => <TableCell>{role.name}</TableCell>,
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