"use client";

import dayjs from "dayjs";

export default function FeedbackTable({ data }) {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Feedback</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.customer.name}</td>
                <td>{item.customer.email}</td>
                <td>{item.feedback}</td>
                <td>{dayjs(item.created_at).format("DD/MM/YYYY HH:mm:ss")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
