import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchBusByID = async (id) => {
    let {data} = await axios.get(endpoints.buses.default + "/" + id);
    console.log("data -", data);
    return data;
}

const useGetBusByID = (id) => {
    return useQuery({
        queryKey: ["bus-by-id"],
        queryFn: () => fetchBusByID(id),
        enabled: !!id
    })
}
export default useGetBusByID;