'use client';

import CustomOfficeLayout from "@/components/layouts/CustomOfficeLayout";
import {Button} from "antd";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import BusTable from "@/components/buses/BusTable";

let URL = "http://localhost:4000/api/buses";

export default function BusesPage() {
    let {data, isLoading} = useQuery({
        queryKey: ["bus/getAllBus"],
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
            <main className="min-h-screen w-full px-10">
                <div className={'flex justify-between py-10'}>
                    <h1 className={'text-2xl font-[500'}>Bus Management</h1>
                    <Button onClick={() => console.log("New Bus")}>
                        Add New Bus
                    </Button>
                </div>

                <BusTable data={data} loading={isLoading}/>

            </main>
        </CustomOfficeLayout>
    )
}
