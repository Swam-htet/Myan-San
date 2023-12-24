'use client';

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import RouteCard from "@/components/sharedComponents/RouteCard";
import useGetAllRoutes from "@/libs/hooks/useGetAllRoutes";

export default function TravelRoutesPage() {
    let router = useRouter();
    const searchParams = useSearchParams();
    const [data, setData] = useState(null);

    let GetAllRoutes = useGetAllRoutes();

    console.log("data", data);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (GetAllRoutes.isSuccess) {
            setData(GetAllRoutes.data);
        }
    }, []);

    if (GetAllRoutes.isLoading) {
        return <>Loading...</>
    }

    if (GetAllRoutes.isError) {
        return <>{GetAllRoutes.error.message}</>
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
