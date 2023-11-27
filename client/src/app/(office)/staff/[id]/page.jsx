'use client';

import React from "react";
import CustomOfficeLayout from "@/components/layouts/CustomOfficeLayout";
import {Button} from "antd";
import {useRouter} from "next/navigation";
import StaffProfileCard from "@/components/staff/StaffProfileCard";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

let URL = "http://localhost:4000/api/staff/"

const StaffDetailPage = ({params}) => {
    let router = useRouter();
    let {data, isLoading} = useQuery({
        queryKey: ['staff/staff-detail'],
        queryFn: async () => {
            let {data} = await axios.get(URL + params.id);
            return data;
        }
    })
    return (
        <CustomOfficeLayout>
            <main className="min-h-screen w-full px-10">
                <div className={'flex justify-between py-10'}>
                    <h1 className={'text-2xl font-[500'}>Staff Detail - {params.id}</h1>
                    <Button onClick={() => router.push(`/staff/${params.id}/edit`)}>
                        Edit Staff
                    </Button>
                </div>
                {
                    isLoading ? "Loading ...." : <StaffProfileCard details={data}/>
                }
            </main>
        </CustomOfficeLayout>

    );
};


export default StaffDetailPage;