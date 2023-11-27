'use client';

import React from "react";
import CustomOfficeLayout from "@/components/layouts/CustomOfficeLayout";
import {Button} from "antd";
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import BusProfileCard from "@/components/buses/BusProfileCard";

let URL = "http://localhost:4000/api/buses/"

const BusDetailPage = ({params}) => {
    let router = useRouter();
    let {data, isLoading} = useQuery({
        queryKey: ['bus/bus-detail'],
        queryFn: async () => {
            let {data} = await axios.get(URL + params.id);
            return data;
        }
    })
    return (
        <CustomOfficeLayout>
            <main className="min-h-screen w-full px-10">
                <div className={'flex justify-between py-10'}>
                    <h1 className={'text-2xl font-[500'}>Bus Detail - {params.id}</h1>
                    <Button onClick={() => router.push(`/buses/${params.id}/edit`)}>
                        Edit Bus
                    </Button>
                </div>
                {
                    isLoading ? "Loading ...." : <BusProfileCard detail={data}/>
                }
            </main>
        </CustomOfficeLayout>

    );
};


export default BusDetailPage;