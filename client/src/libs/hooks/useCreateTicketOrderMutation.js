import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createTicketOrder = async (body) => {
    let {data} = await axios.post(endpoints.tickets.createTicket, body);
    return data;
}



const useCreateTicketOrderMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["ticket-order"],
        mutationFn: async (body) => {
            let data = createTicketOrder(body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['route-by-id']})

        }
    })
}
export default useCreateTicketOrderMutation;