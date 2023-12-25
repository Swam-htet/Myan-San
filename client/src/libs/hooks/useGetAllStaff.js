import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllStaff = async () => {
    let {data} = await axios.get(endpoints.staff.default);
    return data;
}

const useGetAllStaff = () => {
    return useQuery({
        queryKey: ["all-staff"],
        queryFn: fetchAllStaff,
    })
}
export default useGetAllStaff;