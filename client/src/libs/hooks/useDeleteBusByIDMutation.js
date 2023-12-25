import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteBusByID = async (id) => {
    let {data} = await axios.delete(endpoints.buses.default + "/" + id);
    return data;
}


const useDeleteBusByIDMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-bus"],
        mutationFn: async (id) => {
            let data = deleteBusByID(id)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-buses']})

        }
    })
}
export default useDeleteBusByIDMutation;