import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteTicketByID = async (id) => {
    let {data} = await axios.delete(endpoints.tickets.default + "/" + id);
    return data;
}


const useDeleteTicketByIDMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-ticket"],
        mutationFn: async (id) => {
            let data = deleteTicketByID(id)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-ticket']})

        }
    })
}
export default useDeleteTicketByIDMutation;