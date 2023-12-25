import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteTownByID = async (id) => {
    let {data} = await axios.delete(endpoints.towns.default + "/" + id);
    return data;
}


const useDeleteTownByIDMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-town"],
        mutationFn: async (id) => {
            let data = deleteTownByID(id)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-towns']})

        }
    })
}
export default useDeleteTownByIDMutation;