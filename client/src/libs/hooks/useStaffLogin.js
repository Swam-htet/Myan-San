import axios from "axios";
import {endpoints} from "@/libs/endpoints";
import {useMutation} from "@tanstack/react-query";
import {setCookie} from "cookies-next";

const login = async (body) => {
    let {data} = await axios.post(endpoints.staff.login, body);
    return data;
}


const useStaffLogin = () => {
    return useMutation({
        mutationKey: ["staff-login"],
        mutationFn: async (body) => {
            let data = login(body)
            return data;
        },
    })
}
export default useStaffLogin;