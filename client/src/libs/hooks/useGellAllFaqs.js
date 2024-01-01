import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllFaqs = async () => {
    let {data} = await axios.get(endpoints.faqs.default);
    console.log("Faqs -", data);
    return data;
}

const useGetAllFaqs = () => {
    return useQuery({
        queryKey: ["all-faqs"],
        queryFn: fetchAllFaqs,
    })
}
export default useGetAllFaqs;