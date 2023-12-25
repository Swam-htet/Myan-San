import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteCompanyByID = async (id) => {
    let {data} = await axios.delete(endpoints.companies.default + "/" + id);
    return data;
}


const useDeleteCompanyByIDMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-company"],
        mutationFn: async (id) => {
            let data = deleteCompanyByID(id)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-companies']})

        }
    })
}
export default useDeleteCompanyByIDMutation;