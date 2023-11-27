'use client';

import React from "react";
import CustomOfficeLayout from "@/components/layouts/CustomOfficeLayout";
import StaffTable from "@/components/staff/StaffTable";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Button} from "antd";
import {useRouter} from "next/navigation";


let URL = "http://localhost:4000/api/staff";


const StaffManagementPage = () => {
    let router = useRouter();

    let {data, isError, isLoading, error} = useQuery({
        queryKey: ["staff"],
        queryFn: async () => {
            let {data} = await axios.get(URL);
            return data.map((item, index) => {
                return {key: index + 1, ...item}
            });

        }
    });

    return (
        <CustomOfficeLayout>
            <main className="min-h-screen full px-10">
                <div className={'flex justify-between py-10'}>
                    <h1 className={'text-2xl font-[500'}>Staff Management Page</h1>
                    <Button onClick={()=>router.push("/staff/staff-register")}>
                         Add New Staff
                    </Button>
                </div>
                {
                    <StaffTable data={data} loading={isLoading}/>
                }
            </main>
        </CustomOfficeLayout>

    );
};


export default StaffManagementPage;