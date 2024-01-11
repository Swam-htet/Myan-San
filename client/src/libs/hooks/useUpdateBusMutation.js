import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const updateBus = async (id, body) => {
    let {data} = await axios.put(endpoints.buses.default + "/" + id, body);
    return data;
}


const useUpdateBusMutation = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-bus", id],
        mutationFn: async (body) => {
            let data = updateBus(id, body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-buses']})
        }
    })
}
export default useUpdateBusMutation;