'use client';

import TicketSearchForm from "@/components/sharedComponents/TicketSearchForm";
import {Carousel} from "react-bootstrap";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Home() {

    let router = useRouter();

    const onSearchRouteHandler = (values) => {
        router.push(`/travel-routes?fromTown=${values.fromTown}&toTown=${values.toTown}&type=${values.ticketType}&passengerCount=${values.passengerCount}&departureDate=${values.departureDate}`);
    }
    return (
        <>
            <div className={'container-lg my-3 bg-light p-5 rounded'}>
                <h4 className={'text-center text-primary'}>Search Trip</h4>
                <div style={{width: "700px", margin: "0 auto"}}>
                    <TicketSearchForm onSubmit={onSearchRouteHandler}/>
                </div>
            </div>

            <div>
                <Carousel>
                    <Carousel.Item>
                        <Image src={"/slideShowImages/slidShow-1.jpg"} alt={'testing'} width={"1440"} height={'680'}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={"/slideShowImages/slidShow-2.jpg"} alt={'testing'} width={"1440"} height={'680'}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={'row justify-content-center'}>
                            <Image src={"/slideShowImages/slidShow-3.jpg"} alt={'testing'} width={"1440"}
                                   height={'680'}/>
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className={'row justify-content-center'}>
                            <Image src={"/slideShowImages/slidShow-4.jpg"} alt={'testing'} width={"1440"}
                                   height={'680'}/>
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </>
    )
}
