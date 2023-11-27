'use client';

import CustomOfficeLayout from "@/components/layouts/CustomOfficeLayout";
import {Button} from "antd";
import BusCompanyTable from "@/components/bus-companies/BusCompanyTable";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

let URL = "http://localhost:4000/api/companies";


export default function BusCompanyManagementPage() {
    let {data, isLoading} = useQuery({
        queryKey: ["bus-companies/getAllCompanies"],
        queryFn: async () => {
            let {data} = await axios.get(URL);
            return data.map((item, index) => {
                return {
                    ...item, key: index + 1,
                }
            });
        }
    })

    return (
        <CustomOfficeLayout>
            <main className="min-h-screen w-full px-5">
                <div className={'flex justify-between py-10'}>
                    <h1 className={'text-2xl font-[500'}>Bus Company Management</h1>
                    <Button onClick={() => console.log("New Bus Company")}>
                        Add New Bus Company
                    </Button>
                </div>

                <BusCompanyTable data={data} loading={isLoading}/>
            </main>
        </CustomOfficeLayout>
    )
}
