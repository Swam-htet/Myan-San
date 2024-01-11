import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const updateCompany = async (id, body) => {
    let {data} = await axios.put(endpoints.companies.default + "/" + id, body);
    return data;
}


const useUpdateCompanyMutation = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-company", id],
        mutationFn: async (body) => {
            let data = updateCompany(id, body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-companies']})
            queryClient.invalidateQueries({queryKey: ['company-by-id',id]})

        }
    })
}
export default useUpdateCompanyMutation;