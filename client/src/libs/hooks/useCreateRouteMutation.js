import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createRoute = async (body) => {
    let {data} = await axios.post(endpoints.routes.default, body);
    return data;
}



const useCreateRouteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-route"],
        mutationFn: async (body) => {
            let data = createRoute(body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-routes']})

        }
    })
}
export default useCreateRouteMutation;