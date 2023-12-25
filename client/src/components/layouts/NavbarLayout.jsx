'use client';

import {Container, Nav, Navbar} from "react-bootstrap";
import {useRouter} from "next/navigation";
import {deleteCookie, hasCookie} from "cookies-next";
import {useEffect, useState} from "react";

export default function NavbarLayout() {
    let router = useRouter();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return <>
        {
            isClient && <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" onClick={(e) => {
                        e.preventDefault();
                        router.push("/");
                    }}>Myan San</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link className={'mt-1'} onClick={(e) => {
                                e.preventDefault();
                                router.push("/travel-routes");
                            }}>
                                Travel Routes
                            </Nav.Link>

                            <Nav.Link className={'mt-1'} onClick={(e) => {
                                e.preventDefault();
                                router.push("/about-us");
                            }}>
                                About Us
                            </Nav.Link>

                            <Nav.Link className={'mt-1'} onClick={(e) => {
                                e.preventDefault();
                                router.push("/contact-us");
                            }}>
                                Contact Us
                            </Nav.Link>


                            {!hasCookie("auth-token") ? <>
                                <Nav.Link className={'mt-1'} onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/login");
                                }}>
                                    Login
                                </Nav.Link> </> : <>
                                <Nav.Link className={'mt-1'} onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/staff");
                                }}>
                                    Dashboard
                                </Nav.Link>
                                <Nav.Link className={'mt-1'} onClick={() => {
                                    deleteCookie("auth-token");
                                    console.log("Cookie deleted");
                                    router.push("/")
                                }}>
                                    Logout
                                </Nav.Link>
                            </>

                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        }
    </>
}