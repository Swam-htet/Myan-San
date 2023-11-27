'use client';

import {Alert, Button, Form, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import React, {useEffect} from "react";
import {deleteCookie, setCookie} from "cookies-next";
import {useRouter} from "next/navigation";

let URL = "http://localhost:4000/api/staff/login";


export default function LoginForm() {
    let router = useRouter();
    const mutation = useMutation({
        mutationFn: values => {
            let requestBody = {
                userName: values.userName,
                email: values.email,
                password: values.password
            }
            return axios.post(URL, requestBody);
        },
    })

    useEffect(() => {
        if (mutation.isSuccess) {

            // token -> to cookie
            deleteCookie("accessToken");
            setCookie("accessToken", mutation.data.data.token);

            // role -> to cookie
            deleteCookie("role");
            setCookie("role", mutation.data.data.role);

            router.push("/travel-routes");
        }
    }, [mutation.data]);


    return <div className={'w-[480px]'}>

        <h1 className={'text-2xl mb-3'}>Staff Login</h1>

        
        <div className={'w-full mb-4'}>
            {
                mutation.error && <Alert message="Login Failed" type="error"/>
            }
        </div>

        <Form
            className="w-full flex flex-col gap-3"
            onFinish={(values) => mutation.mutate(values)}
        >
            <Form.Item
                className="w-full text-right"
                name="userName"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input your username!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full"
                    placeholder="Username"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="email"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: (
                            <span className={"text-sm"}>Please input your email!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full"
                    placeholder="Email"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="password"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input your password!</span>
                        ),
                    },
                ]}
            >
                <Input.Password
                    className="w-full flex-1"
                    placeholder="Password"
                    iconRender={(visible) =>
                        visible ? (
                            <EyeTwoTone twoToneColor={"#1E46D2"}/>
                        ) : (
                            <EyeInvisibleOutlined/>
                        )
                    }
                />
            </Form.Item>

            <Button
                htmlType="submit"
            >
                Login
            </Button>
        </Form>

    </div>
}