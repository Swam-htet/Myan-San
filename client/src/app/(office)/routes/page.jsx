"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RouteTable from "@/components/travel-route/RouteTable";
import { IoMdAdd } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import useGetAllRoutes from "@/libs/hooks/useGetAllRoutes";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import useDeleteRouteByIDMutation from "@/libs/hooks/useDeleteRouteByIDMutation";
import toast from "react-hot-toast";

export default function RouteListPage() {
  let router = useRouter();
  let path = usePathname();

  const [deleteID, setDeleteID] = useState();
  const [data, setData] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const GetAllRoutes = useGetAllRoutes({});
  const DeleteRouteByIDMutation = useDeleteRouteByIDMutation();

  const deleteModalHandler = (id) => {
    setDeleteID(id);
    setShowDeleteModal(!showDeleteModal);
  };

  useEffect(() => {
    setData(GetAllRoutes.data && GetAllRoutes.data.payload);
  }, [GetAllRoutes.data, GetAllRoutes.isSuccess]);

  useEffect(() => {
    if (DeleteRouteByIDMutation.isSuccess) {
      toast.success("Route deleted successfully");
    }
    if (DeleteRouteByIDMutation.isError) {
      toast.error("Can't delete route right now, please try again later");
    }
  }, [
    DeleteRouteByIDMutation.data,
    DeleteRouteByIDMutation.isSuccess,
    DeleteRouteByIDMutation.isError,
  ]);
  if (GetAllRoutes.isLoading) {
    return <Loading />;
  }

  if (GetAllRoutes.isError) {
    return <Error message={GetAllRoutes.data} />;
  }
  return (
    <main>
      <div className={"d-flex justify-content-between align-items-center my-3"}>
        <h1>Travel Route Management</h1>
        <button
          className={"btn btn-primary"}
          onClick={() => router.push(`${path}/new`)}>
          Add New Travel Route <IoMdAdd />
        </button>
      </div>
      {data && (
        <RouteTable deleteModalHandler={deleteModalHandler} routeList={data} />
      )}

      {/*     delete staff confirm modal box     */}
      <Modal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(!showDeleteModal);
        }}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete travel route?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowDeleteModal(!showDeleteModal);
            }}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setShowDeleteModal(!showDeleteModal);
              DeleteRouteByIDMutation.mutate(deleteID);
            }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
