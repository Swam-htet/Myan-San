import React from "react";
import LoginForm from "@/components/login/LoginForm";

export const metadata = {
    title: "Login ",
};


const LoginPage = () => {
    return (
        <main className="min-h-screen w-screen">
            <div className={'flex justify-center'}>
                <LoginForm/>
            </div>
        </main>
    );
};


export default LoginPage;