import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllBuses = async () => {
    let {data} = await axios.get(endpoints.buses.default);
    console.log("Buses -", data);
    return data;
}

const useGetAllBuses = () => {
    return useQuery({
        queryKey: ["all-buses"],
        queryFn: fetchAllBuses,
    })
}
export default useGetAllBuses;