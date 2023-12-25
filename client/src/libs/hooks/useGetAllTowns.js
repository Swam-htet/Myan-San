import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllTowns = async () => {
    let {data} = await axios.get(endpoints.towns.default);
    return data;
}

const useGetAllTowns = () => {
    return useQuery({
        queryKey: ["all-towns"],
        queryFn: fetchAllTowns,
    })
}
export default useGetAllTowns;