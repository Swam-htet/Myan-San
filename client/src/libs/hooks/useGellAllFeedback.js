import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useQuery} from "@tanstack/react-query";

const fetchAllFeedback = async () => {
    let {data} = await axios.get(endpoints.feedbacks.default);
    console.log("Faqs -", data);
    return data;
}

const useGetAllFeedback = () => {
    return useQuery({
        queryKey: ["all-feedback"],
        queryFn: fetchAllFeedback,
    })
}
export default useGetAllFeedback;