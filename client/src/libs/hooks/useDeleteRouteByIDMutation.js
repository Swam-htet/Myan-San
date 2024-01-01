import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteRouteByID = async (id) => {
    let {data} = await axios.delete(endpoints.routes.default + "/" + id);
    return data;
}


const useDeleteRouteByIDMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-route"],
        mutationFn: async (id) => {
            let data = deleteRouteByID(id)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-routes']})

        }
    })
}
export default useDeleteRouteByIDMutation;