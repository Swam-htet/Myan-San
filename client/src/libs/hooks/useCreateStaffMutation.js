import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const createStaff = async (body) => {
    let {data} = await axios.post(endpoints.staff.default, body);
    return data;
}



const useCreateStaffMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["staff-register"],
        mutationFn: async (body) => {
            let data = createStaff(body)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['all-staff']})

        }
    })
}
export default useCreateStaffMutation;