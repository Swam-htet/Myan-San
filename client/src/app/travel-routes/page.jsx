'use client';

import {useEffect, useState} from "react";
import RouteCard from "@/components/travel-route/RouteCard";
import useGetAllRoutes from "@/libs/hooks/useGetAllRoutes";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";

export default function TravelRoutesPage() {
    const [data, setData] = useState(null);

    let GetAllRoutes = useGetAllRoutes();


    useEffect(() => {
        if (GetAllRoutes.isSuccess) {
            setData(GetAllRoutes.data);
        }
    }, [GetAllRoutes.data]);

    if (GetAllRoutes.isLoading) {
        return <Loading/>
    }

    if (GetAllRoutes.isError) {
        return <Error message={GetAllRoutes.error.message}/>
    }


    return (
        <main className={'container'}>
            <h1>Travel Routes</h1>
            <div className={'row'}>
                {
                    data && data.map((item, index) => {
                        return (<div className={'col-12 col-lg-4 p-2'} key={index}>
                            <RouteCard data={item}/>
                        </div>)
                    })
                }
            </div>
        </main>
    )
}
