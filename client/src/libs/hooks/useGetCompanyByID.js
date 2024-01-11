import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchCompanyByID = async (id) => {
    let {data} = await axios.get(endpoints.companies.default + "/" + id);
    console.log("data -", data);
    return data;
}

const useGetCompanyByID = (id) => {
    return useQuery({
        queryKey: ["company-by-id"],
        queryFn: () => fetchCompanyByID(id),
        enabled: !!id
    })
}
export default useGetCompanyByID;