'use client';

import LoginForm from "@/components/sharedComponents/LoginForm";


export default function LoginPage() {

    const handleSubmit = (values) => {
        console.log('Login submitted:', values);
    };

    return (
        <main className={'container py-4'}>
            <h1 className={'text-center'}>Staff Login</h1>
            <div style={{maxWidth:"600px",margin:"0 auto"}}>
                <LoginForm onSubmit={handleSubmit}/>
            </div>

        </main>
    )
}
