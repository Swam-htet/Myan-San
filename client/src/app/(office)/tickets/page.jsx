'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import TicketTable from "@/components/ticket/TicketTable";
import DeleteConfirmModel from "@/components/shared/DeleteConfirmModel";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useGetAllTicket from "@/libs/hooks/useGetAllTicket";
import useDeleteTicketByIDMutation from "@/libs/hooks/useDeleteTicketByIDMutation";
import toast from "react-hot-toast";

export default function BusListPage() {
    let router = useRouter();
    const [data, setData] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [deleteID, setDeleteID] = useState();

    let GetAllTicket = useGetAllTicket();
    let DeleteTicketByIDMutation = useDeleteTicketByIDMutation();


    const deleteModalHandler = (id) => {
        setDeleteID(id);
        setShowDeleteModal(!showDeleteModal);
    }


    useEffect(() => {
        if (GetAllTicket.isSuccess) {
            setData(GetAllTicket.data);
        }
    }, [GetAllTicket.data]);

    useEffect(() => {
        if (DeleteTicketByIDMutation.isSuccess) {
            toast.success("Ticket deleted successfully");
        }
        if (DeleteTicketByIDMutation.isError) {
            toast.error("Can't delete ticket right now, please try again later");
        }
    }, [DeleteTicketByIDMutation.data, DeleteTicketByIDMutation.isError, DeleteTicketByIDMutation.isSuccess]);


    if (GetAllTicket.isLoading) {
        return <Loading/>
    }

    if (GetAllTicket.isError) {
        return <Error message={GetAllTicket.error.message}/>
    }



    return (
        <main>
            <div className={'d-flex justify-content-between align-items-center my-3'}>
                <h1>Ticket Management</h1>
            </div>
            <div className={'w-100 overflow-x-scroll'}>
                {
                    data && <TicketTable ticketList={data} deleteModalHandler={deleteModalHandler}/>
                }
            </div>


            <DeleteConfirmModel message={`Do you want to delete ticket ID -${deleteID}`}
                                modelHandler={() => {
                                    setShowDeleteModal(!showDeleteModal);
                                }}
                                submitHandler={() => {
                                    setShowDeleteModal(!showDeleteModal);
                                    DeleteTicketByIDMutation.mutate(deleteID);
                                }}
                                showDeleteModel={showDeleteModal}/>
        </main>
    )
}
