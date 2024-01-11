import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteFaqByID = async (id) => {
    let {data} = await axios.delete(endpoints.faqs.default + "/" + id);
    return data;
}


const useDeleteFaqByIDMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-faq"],
        mutationFn: async (id) => {
            let data = deleteFaqByID(id)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-faqs']})

        }
    })
}
export default useDeleteFaqByIDMutation;