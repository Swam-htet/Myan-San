"use client";

import { useEffect, useState } from "react";
import RouteCard from "@/components/travel-route/RouteCard";
import useGetAllRoutes from "@/libs/hooks/useGetAllRoutes";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import { useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function TravelRoutesPage() {
  let searchParams = useSearchParams();
  const [data, setData] = useState(null);

  const queryClient = useQueryClient();

  let getSearchParams = (key) => searchParams.get(key);

  const getFilterObject = () => ({
    toTown: getSearchParams("toTown") || "",
    fromTown: getSearchParams("fromTown") || "",
    page: 0,
    size: 10,
    noOfPassenger: getSearchParams("noOfPassenger") || 1,
    ticketType: getSearchParams("ticketType") || "",
  });

  let GetAllRoutes = useGetAllRoutes(getFilterObject());

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["all-routes"] });
  }, [searchParams]);

  useEffect(() => {
    if (GetAllRoutes.isSuccess) {
      setData(GetAllRoutes.data.payload);
    }
  }, [GetAllRoutes.data]);

  if (GetAllRoutes.isLoading) {
    return <Loading />;
  }

  if (GetAllRoutes.isError) {
    return <Error message={GetAllRoutes.error.message} />;
  }

  return (
    <main className={"container"} style={{ minHeight: "50vh" }}>
      <h1>Travel Routes</h1>
      <div className={"row"}>
        {data &&
          data.map((item, index) => {
            return (
              <div className={"col-12 col-lg-4 p-2"} key={index}>
                <RouteCard data={item} />
              </div>
            );
          })}
      </div>
    </main>
  );
}
