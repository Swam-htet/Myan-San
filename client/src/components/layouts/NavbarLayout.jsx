'use client';

import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useRouter} from "next/navigation";
import {deleteCookie, getCookie, hasCookie} from "cookies-next";

export default function NavbarLayout() {
    let router = useRouter();
    return <Navbar expand="lg" className="bg-body-tertiary">
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

                    {/*     login order         */}
                    <NavDropdown className={'mt-1'} title="User" id="basic-nav-dropdown">

                        <NavDropdown.Item onClick={(e) => {
                            e.preventDefault();
                            router.push("/staff");
                        }}>
                            Dashboard
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={(e) => {
                            e.preventDefault();
                            router.push("/login");
                        }}>
                            Login
                        </NavDropdown.Item>


                        <NavDropdown.Divider/>

                        <NavDropdown.Item onClick={() => {
                            if(getCookie('auth_token')){
                                console.log("True token")
                                deleteCookie('auth_token');
                            }
                        }}>
                            Logout
                        </NavDropdown.Item>

                    </NavDropdown>


                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}