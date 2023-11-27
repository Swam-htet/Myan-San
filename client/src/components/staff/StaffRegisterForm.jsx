'use client';

import {Button, DatePicker, Form, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

let URL = "http://localhost:4000/api/staff/";


export default function StaffRegisterForm() {


    return <div className={'w-[480px]'}>

        <h1 className={'text-2xl mb-3'}>Staff Register</h1>


        <Form
            onFinish={(values) => {
                console.log("Values - ", values);
            }}
        >
            <h3 className={'text-lg mb-3'}>Staff Information :</h3>

            <Form.Item
                className="w-full text-right"
                name="firstName"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s firstname!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full"
                    placeholder="First name"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="lastName"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s lastname!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full"
                    placeholder="Last name"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="userName"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s username!</span>
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
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s email!</span>
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
                name="dateOfBirth"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please choose staff&apos;s date of birth!</span>
                        ),
                    },
                ]}
            >
                <DatePicker className={'w-full'} placeholder={"Date of Birth"}/>

            </Form.Item>


            <Form.Item
                className="w-full text-right"
                name="password"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s login password!</span>
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

            <h3 className={'text-lg mb-3'}>Address : </h3>

            <Form.Item
                className="w-full text-right"
                name="street"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s street!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full flex-1"
                    placeholder="Street"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="city"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s city!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full flex-1"
                    placeholder="City"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="state"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s state!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full flex-1"
                    placeholder="State"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="postalCode"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s postalCode!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full flex-1"
                    placeholder="Postalcode"
                />
            </Form.Item>

            <Form.Item
                className="w-full text-right"
                name="country"
                rules={[
                    {
                        required: true,
                        message: (
                            <span className={"text-sm"}>Please input staff&apos;s country!</span>
                        ),
                    },
                ]}
            >
                <Input
                    className="w-full flex-1"
                    placeholder="Country"
                />
            </Form.Item>

            <Button
                htmlType="submit"
            >
                Submit
            </Button>
        </Form>

    </div>
}