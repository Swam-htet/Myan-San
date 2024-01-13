"use client";

import { usePathname, useRouter } from "next/navigation";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function TownTable({
  editModalHandler,
  townList,
  deleteModalHandler,
}) {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Station</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {townList.map((town, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{town.name}</td>
                <td>{town.station}</td>
                <td
                  style={{ cursor: "pointer" }}
                  className={"text-success"}
                  onClick={() => editModalHandler(town._id)}>
                  Edit <AiFillEdit />
                </td>

                <td
                  style={{ cursor: "pointer" }}
                  className={"text-danger"}
                  onClick={() => deleteModalHandler(town._id)}>
                  Delete <AiFillDelete />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
