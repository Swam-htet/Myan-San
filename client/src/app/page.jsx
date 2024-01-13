"use client";

import { Carousel } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useGetAllTowns from "@/libs/hooks/useGetAllTowns";
import { useEffect, useState } from "react";
import RouteSearchForm from "@/components/home/RouteSearchForm";

function removeEmptyValues(obj) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== "") {
      result[key] = obj[key];
    }
  }

  return result;
}

export default function HomePage() {
  let router = useRouter();
  let [data, setData] = useState(null);

  let GetAllTowns = useGetAllTowns();
  const onSearchRouteHandler = (values) => {
    let queryString = Object.entries(removeEmptyValues(values))
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    console.log("Query String - ", queryString);

    router.push(`/travel-routes?${queryString}`);
  };

  useEffect(() => {
    setData(GetAllTowns.data);
  }, [GetAllTowns.isError, GetAllTowns.isSuccess, GetAllTowns.isSuccess]);
  return (
    <main className={"container"}>
      <div className={"container-lg my-3 bg-light p-5 rounded"}>
        <div className={"d-flex align-items-center"}>
          {/* <div className={"col-6"}>
            <h2 className={"text-primary"}>
              Book Online Bus Ticket Around Myanmar
            </h2>
          </div> */}
          <div className={"col-6"}>
            <h4 className={"text-center text-primary"}>Search Trip</h4>
            <RouteSearchForm
              towns={data || []}
              onSubmit={onSearchRouteHandler}
            />
          </div>
        </div>
      </div>

      <div>
        <Carousel>
          <Carousel.Item>
            <Image
              src={"/slideShowImages/slidShow-1.jpg"}
              alt={"testing"}
              width={"1440"}
              height={"680"}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={"/slideShowImages/slidShow-2.jpg"}
              alt={"testing"}
              width={"1440"}
              height={"680"}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={"row justify-content-center"}>
              <Image
                src={"/slideShowImages/slidShow-3.jpg"}
                alt={"testing"}
                width={"1440"}
                height={"680"}
              />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"row justify-content-center"}>
              <Image
                src={"/slideShowImages/slidShow-4.jpg"}
                alt={"testing"}
                width={"1440"}
                height={"680"}
              />
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
    </main>
  );
}
