'use client';

import LoginForm from "@/components/login/LoginForm";
import useStaffLogin from "@/libs/hooks/useStaffLogin";
import {useEffect} from "react";
import {getCookie, setCookie} from "cookies-next";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";


export default function LoginPage() {
    let router = useRouter();

    let StaffLoginMutation = useStaffLogin();

    const handleSubmit = (body) => {
        StaffLoginMutation.mutate(body);
    };


    useEffect(() => {
        if (StaffLoginMutation.isSuccess && StaffLoginMutation.data) {
            toast.success("Staff Login Success");
            setCookie('auth-token', StaffLoginMutation.data.token);
            router.push("/staff");
        }
        if(StaffLoginMutation.isError){
            toast.error("Staff Login Failure, please try again");

        }
    }, [StaffLoginMutation.data, StaffLoginMutation.isSuccess,StaffLoginMutation.isError]);

    return (
        <main className={'container py-4'}>
            <h1 className={'text-center'}>Staff Login</h1>
            <div style={{maxWidth:"600px",margin:"0 auto"}}>
                <LoginForm handleSubmit={handleSubmit}/>
            </div>

        </main>
    )
}
