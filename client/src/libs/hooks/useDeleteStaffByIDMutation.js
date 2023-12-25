import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteStaffByID = async (id) => {
    let {data} = await axios.delete(endpoints.staff.default + "/" + id);
    return data;
}


const useDeleteStaffByIDMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["delete-staff"],
        mutationFn: async (id) => {
            let data = deleteStaffByID(id)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-staff']})

        }
    })
}
export default useDeleteStaffByIDMutation;