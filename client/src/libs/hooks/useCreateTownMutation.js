import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createTown = async (body) => {
    let {data} = await axios.post(endpoints.towns.default, body);
    return data;
}



const useCreateTownMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["create-town"],
        mutationFn: async (body) => {
            let data = createTown(body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-towns']})

        }
    })
}
export default useCreateTownMutation;