"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import { Accordion } from "react-bootstrap";
import FaqForm from "@/components/faqs/FaqForm";
import useCreateFaqMutation from "@/libs/hooks/useCreateFaqMutation";
import useGetAllFeedback from "@/libs/hooks/useGellAllFeedback";
import FeedbackTable from "@/components/feedback/FeedbackTable";

export default function FeedBackPage() {
  const [data, setData] = useState(null);

  const GetAllFeedback = useGetAllFeedback();

  useEffect(() => {
    if (GetAllFeedback.isSuccess) {
      setData(GetAllFeedback.data);
    }
  }, [GetAllFeedback.data]);

  if (GetAllFeedback.isLoading) {
    return <Loading />;
  }

  if (GetAllFeedback.isError) {
    return <Error message={GetAllFeedback.error.message} />;
  }

  return (
    <main>
      <div className={"mb-5"}>
        <div className={"d-flex justify-content-between my-3"}>
          <h3>Feedback Management</h3>
        </div>
        <div>
          <Accordion>{data && <FeedbackTable data={data} />}</Accordion>
        </div>
      </div>
    </main>
  );
}
