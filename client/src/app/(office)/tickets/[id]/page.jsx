'use client';

import {useEffect, useState} from "react";
import useGetTicketByID from "@/libs/hooks/useGetTicketDetailByID";
import Error from "@/components/layouts/Error";
import Loading from "@/components/layouts/Loading";

export default function TicketDetailPage({params}) {
    let [data, setData] = useState(null);

    let GetTicketDetail = useGetTicketByID(params.id);

    useEffect(() => {
      setData(GetTicketDetail.data);
    }, [GetTicketDetail.data,GetTicketDetail.isSuccess]);


    if(GetTicketDetail.isLoading){
        return <Loading/>
    }
    if(GetTicketDetail.isError){
        return <Error message={GetTicketDetail.error}/>
    }
    return <div>
        {
            data && JSON.stringify(data)
        }
    </div>
}