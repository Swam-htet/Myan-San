import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllCompanies = async () => {
    let {data} = await axios.get(endpoints.companies.default);
    return data;
}

const useGetAllCompanies = () => {
    return useQuery({
        queryKey: ["all-companies"],
        queryFn: fetchAllCompanies,
    })
}
export default useGetAllCompanies;