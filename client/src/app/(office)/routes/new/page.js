'use client';


import RouteForm from "@/components/travel-route/RouteForm";
import useGetAllTowns from "@/libs/hooks/useGetAllTowns";
import {useEffect, useState} from "react";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useGetAllBuses from "@/libs/hooks/useGetAllBuses";
import {IoArrowBack} from "react-icons/io5";
import {useRouter} from "next/navigation";
import useCreateRouteMutation from "@/libs/hooks/useCreateRouteMutation";

export default function NewRoutePage() {
    let router = useRouter();

    let [townData, setTownData] = useState(null);
    let [busData, setBusData] = useState(null);

    const GetAllTowns = useGetAllTowns();
    const GetAllBuses = useGetAllBuses();

    const CreateRouteMutation = useCreateRouteMutation();

    const submitHandler = (values) => {
        let payload = {
            toTown: values.toTown,
            fromTown: values.fromTown,
            scheduleDate: values.scheduleDate,
            availableSeat: values.availableSeat,
            bus: values.bus,
        }
        CreateRouteMutation.mutate(payload);
        router.push("/routes")
    }

    useEffect(() => {
        setTownData(GetAllTowns.data);
    }, [GetAllTowns.data, GetAllTowns.isSuccess]);

    useEffect(() => {
        setBusData(GetAllBuses.data);
    }, [GetAllBuses.data, GetAllBuses.isSuccess]);

    if (GetAllTowns.isLoading || GetAllBuses.isLoading) {
        return <Loading/>
    }
    if (GetAllTowns.isError) {
        return <Error message={GetAllTowns.data}/>
    }
    if (GetAllBuses.isError) {
        return <Error message={GetAllBuses.data}/>
    }
    
    return (
        <main className={'mt-4'}>

            <button className={'btn btn-outline-primary'} onClick={() => router.back()}>
                <IoArrowBack/>
                Back
            </button>

            <h1 className={'mt-3'}>New Route</h1>
            <div className={'mt-3'}>
                <RouteForm towns={townData || []} buses={busData || []} submitHandler={submitHandler}/>
            </div>
        </main>
    )
}
