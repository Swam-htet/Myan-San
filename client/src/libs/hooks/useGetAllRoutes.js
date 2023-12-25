import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllRoutes = async () => {
    let {data} = await axios.get(endpoints.routes.default);
    return data;
}

const useGetAllRoutes = () => {
    return useQuery({
        queryKey: ["all-routes"],
        queryFn: fetchAllRoutes,
    })
}
export default useGetAllRoutes;