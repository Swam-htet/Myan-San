import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const updateTown = async (id, body) => {
    let {data} = await axios.put(endpoints.towns.default + "/" + id, body);
    return data;
}


const useUpdateTownMutation = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-town", id], mutationFn: async (body) => {
            let data = updateTown(id, body)
            return data;
        }, onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-towns']})     ,
                queryClient.invalidateQueries({queryKey: ["town-by-id",id]})

        }
    })
}
export default useUpdateTownMutation;