import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchStaffByID = async (id) => {
    let {data} = await axios.get(endpoints.staff.default + "/" + id);
    console.log("data -", data);
    return data;
}

const useGetStaffByID = (id) => {
    return useQuery({
        queryKey: ["staff-by-id"],
        queryFn: () => fetchStaffByID(id),
        enabled: !!id
    })
}
export default useGetStaffByID;