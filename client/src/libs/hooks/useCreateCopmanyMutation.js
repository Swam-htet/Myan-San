import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createCompanies = async (body) => {
    let {data} = await axios.post(endpoints.companies.default, body);
    return data;
}



const useCreateCompanyMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-company"],
        mutationFn: async (body) => {
            let data = createCompanies(body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-companies']})

        }
    })
}
export default useCreateCompanyMutation;