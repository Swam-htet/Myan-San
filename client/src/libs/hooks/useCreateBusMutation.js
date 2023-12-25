import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createBus = async (body) => {
    let {data} = await axios.post(endpoints.buses.default, body);
    return data;
}



const useCreateBusMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-bus"],
        mutationFn: async (body) => {
            let data = createBus(body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-buses']})

        }
    })
}
export default useCreateBusMutation;