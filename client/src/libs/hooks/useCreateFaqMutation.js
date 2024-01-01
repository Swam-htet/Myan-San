


import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createFaq = async (body) => {
    let {data} = await axios.post(endpoints.faqs.default, body);
    return data;
}



const useCreateFaqMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-bus"],
        mutationFn: async (body) => {
            let data = createFaq(body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-faqs']})

        }
    })
}
export default useCreateFaqMutation;