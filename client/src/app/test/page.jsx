'use client';

import React from "react";
import {Alert, Button, Carousel, Form, Input} from "antd";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import {ArrowLeftOutlined} from "@ant-design/icons";


const TestPage = () => {
    return (
        <main className="min-h-screen mx-20 flex flex-col gap-10">
            <div>
                <h1 className={'text-2xl mb-4'}>Buttons</h1>
                <div>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </div>
            </div>


            <div>
                <h1 className={'text-2xl mb-4'}>Breadcrumbs</h1>

                <CustomBreadcrumb items={["New", "Customer Information"]}/>
            </div>

            <div>
                <h1 className={'text-2xl mb-4'}>Back Button</h1>
                <Button icon={<ArrowLeftOutlined/>} type={'text'}>
                    Back
                </Button>

            </div>

            <div>
                <h1 className={'text-2xl mb-4'}>Form Input And Validation</h1>
                <div className={'w-[480px]'}>
                    <Form
                        className="w-full"
                        onFinish={(values) => console.log(values)}
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

                        <Button
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>


            <div>
                <h1 className={'text-2xl mb-4'}>Slider</h1>
                <div>
                    <Carousel afterChange={(currentSlide) => {
                        console.log(currentSlide);
                    }}>
                        <div>
                            <h3 style={{
                                margin: 0,
                                height: '400px',
                                color: '#fff',
                                lineHeight: '160px',
                                textAlign: 'center',
                                background: 'orange',
                            }}>1</h3>
                        </div>
                        <div>
                            <h3 style={{
                                margin: 0,
                                height: '400px',
                                color: '#fff',
                                lineHeight: '160px',
                                textAlign: 'center',
                                background: 'green',
                            }}>2</h3>
                        </div>
                        <div>
                            <h3 style={{
                                margin: 0,
                                height: '400px',
                                color: '#fff',
                                lineHeight: '160px',
                                textAlign: 'center',
                                background: 'gray',
                            }}>3</h3>
                        </div>
                        <div>
                            <h3 style={{
                                margin: 0,
                                height: '400px',
                                color: '#fff',
                                lineHeight: '160px',
                                textAlign: 'center',
                                background: 'pink',
                            }}>4</h3>
                        </div>
                    </Carousel>
                </div>
            </div>


            <div>
                <h1 className={'text-2xl mb-4'}>Alert box</h1>
                <div className={'flex flex-col gap-5'}>
                    <Alert
                        message="Success Tips"
                        description="Detailed description and advice about successful copywriting."
                        type="success"
                        showIcon
                        closable

                    />
                    <Alert
                        message="Informational Notes"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                        closable

                    />
                    <Alert
                        message="Warning"
                        description="This is a warning notice about copywriting."
                        type="warning"
                        showIcon
                        closable
                    />
                    <Alert
                        message="Error"
                        description="This is an error message about copywriting."
                        type="error"
                        showIcon
                        closable
                    />
                </div>
            </div>

            




        </main>
    );
};


export default TestPage;