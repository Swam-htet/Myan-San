import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchTownByID = async (id) => {
    let {data} = await axios.get(endpoints.towns.default + "/" + id);
    console.log("data -", data);
    return data;
}

const useGetTownByID = (id) => {
    return useQuery({
        queryKey: ["town-by-id"],
        queryFn: () => fetchTownByID(id),
        enabled: !!id
    })
}
export default useGetTownByID;