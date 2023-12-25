import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllTicket = async () => {
    let {data} = await axios.get(endpoints.tickets.default);
    return data;
}

const useGetAllTicket = () => {
    return useQuery({
        queryKey: ["all-ticket"],
        queryFn: fetchAllTicket,
    })
}
export default useGetAllTicket;