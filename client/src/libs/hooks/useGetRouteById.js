import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchRouteByID = async (id) => {
    let {data} = await axios.get(endpoints.routes.default + "/" + id);
    console.log("data -", data);
    return data;
}

const useGetRouteByID = (id) => {
    return useQuery({
        queryKey: ["route-by-id", id],
        queryFn: async () => {
            let data = fetchRouteByID(id);
            return data;
        },
    })
}
export default useGetRouteByID;