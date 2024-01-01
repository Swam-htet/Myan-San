'use client';

import {useEffect, useState} from "react";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useGetRouteByID from "@/libs/hooks/useGetRouteById";

export default function RouteDetail({params}) {
    let [data, setData] = useState(null);

    let GetRouteDetail = useGetRouteByID(params.id);

    useEffect(() => {
        setData(GetRouteDetail.data);
    }, [GetRouteDetail.data, GetRouteDetail.isSuccess]);


    if (GetRouteDetail.isLoading) {
        return <Loading/>
    }

    if (GetRouteDetail.isError) {
        return <Error message={GetRouteDetail.error}/>
    }
    return <div>
        {
            data && JSON.stringify(data)
        }
    </div>
}
