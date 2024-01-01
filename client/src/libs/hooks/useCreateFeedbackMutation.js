import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createFeedback = async (body) => {
    let {data} = await axios.post(endpoints.feedbacks.default, body);
    return data;
}



const useCreateFeedbackMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-bus"],
        mutationFn: async (body) => {
            let data = createFeedback(body)
            return data;
        },
        
    })
}
export default useCreateFeedbackMutation;