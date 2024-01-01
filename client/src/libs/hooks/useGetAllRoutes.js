import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {endpoints} from "@/libs/endpoints";

const fetchAllRoutes = async (filterObject) => {
    let {data} = await axios.get(`${endpoints.routes.default}?toTown=${filterObject.toTown || ""}&fromTown=${filterObject.fromTown || ""}&date=${filterObject.date || ""}&noOfPassenger=${filterObject.noOfPassenger || ""}&ticketType=${filterObject.ticketType || ""}`);
    console.log("Data -", data);
    return data;

    // console.log("Filter object -", filterObject);
    // return []
}

const useGetAllRoutes = (filterObject) => {
    return useQuery({
        queryKey: ["all-routes", filterObject],
        queryFn: () => fetchAllRoutes(filterObject),
    })
}
export default useGetAllRoutes;