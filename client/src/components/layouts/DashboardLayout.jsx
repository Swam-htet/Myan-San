'use client';
import {useRouter} from "next/navigation";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import {useEffect, useState} from "react";
import {getCookie} from "cookies-next";

export default function DashboardLayout({children}) {
    let router = useRouter();

    let [permossion, setPermission] = useState(false);

    useEffect(() => {
        let auth = getCookie("auth-token");
        console.log("Token: ", auth);
        if (auth) {
            setPermission(true);
        } else {
            router.push("/login")
        }

    }, []);

    return (
        <>
            {permossion && <Tab.Container>
                <div className={'row w-100'}>
                    <Col sm={2}>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/staff")
                                }}>Staff Management</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/buses")
                                }}>Bus Management</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/routes")
                                }}>Travel Route Management</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/tickets")
                                }}>Ticket Management</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/general")
                                }}>General Management</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={10}>
                        <Tab.Content className={'min-vh-100'}>
                            {children}
                        </Tab.Content>
                    </Col>
                </div>
            </Tab.Container>}

        </>

    )
}