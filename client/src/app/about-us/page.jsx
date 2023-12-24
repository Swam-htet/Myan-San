'use client';
import {Card, Col, Container, Row} from "react-bootstrap";
import Image from "next/image";


export default function AboutPage() {
    return (
        <main className={'container'}>
            <Container className="mt-5">
                <div className={'mb-5'}>
                    <h1>About Us</h1>

                    <p>
                        Welcome to Myan San, your trusted partner in travel ticket booking. Established in 2010,
                        Myan San has been dedicated to providing exceptional travel experiences to our customers.
                        Whether you are planning a family vacation, a business trip, or a solo adventure, we are
                        here to make your journey seamless and enjoyable.
                    </p>

                </div>
                <div className={'mb-5'}>
                    <h2>Our History</h2>

                    <p>
                        Founded a decade ago by travel enthusiasts John Doe and Jane Smith, Myan San started as a
                        small startup with a vision to simplify travel planning. Over the years, we have grown into
                        a leading travel platform, serving thousands of satisfied customers.
                    </p>
                </div>

                <div className={'mb-5'}>
                    <h2>Our Values</h2>

                    <div>
                        At Myan San, our core values guide everything we do. We are committed to:
                        <ul>
                            <li>Customer Satisfaction: Ensuring our customers have a delightful and stress-free travel
                                experience.
                            </li>
                            <li>Reliability: Providing trustworthy and dependable travel services.</li>
                            <li>Innovation: Embracing technology to enhance our platform and services.</li>
                        </ul>
                    </div>
                </div>

                <div className={'mb-5'}>
                    <h2>Our Services</h2>

                    <div>
                        Myan San offers a comprehensive range of travel services, including:
                        <ul>
                            {/*<li>Flight Booking: Find the best deals on domestic and international flights.</li>*/}
                            {/*<li>Hotel Reservations: Book comfortable accommodations tailored to your preferences.</li>*/}
                            {/*<li>Car Rentals: Explore your destination with convenient car rental options.</li>*/}
                            <li>Travel Packages: Enjoy curated travel packages designed for various interests.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2>Our Team</h2>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Image src={"/profiles/team_lead.png"} alt={"Team Lead"} width={600} height={400}/>
                                <Card.Body>
                                    <Card.Title>John Doe</Card.Title>
                                    <Card.Text>Co-Founder & CEO</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Image src={"/profiles/team_lead.png"} alt={"Team Lead"} width={600} height={400}/>
                                <Card.Body>
                                    <Card.Title>Jane Smith</Card.Title>
                                    <Card.Text>Co-Founder & COO</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Image src={"/profiles/team_lead.png"} alt={"Team Lead"} width={300} height={300}/>
                                <Card.Body>
                                    <Card.Title>Mike Johnson</Card.Title>
                                    <Card.Text>Lead Developer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </main>
    )
}
