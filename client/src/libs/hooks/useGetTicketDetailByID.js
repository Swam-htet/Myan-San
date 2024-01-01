import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchTicketByID = async (id) => {
    let {data} = await axios.get(endpoints.tickets.default + "/" + id);
    console.log("data -", data);
    return data;
}

const useGetTicketByID = (id) => {
    return useQuery({
        queryKey: ["ticket-by-id", id],
        queryFn: async () => {
            let data = fetchTicketByID(id);
            return data;
        },
    })
}
export default useGetTicketByID;