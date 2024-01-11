import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const updateStaff = async (id, body) => {
    let {data} = await axios.put(endpoints.staff.default + "/" + id, body);
    return data;
}


const useUpdateStaffMutation = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-staff", id],
        mutationFn: async (body) => {
            let data = updateStaff(id, body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-staff']})
        }
    })
}
export default useUpdateStaffMutation;