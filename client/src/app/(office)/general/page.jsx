"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CompanyTable from "@/components/general/CompanyTable";
import TownTable from "@/components/general/TownTable";
import useGetAllTowns from "@/libs/hooks/useGetAllTowns";
import useGetAllCompanies from "@/libs/hooks/useGetAllCompany";
import Loading from "@/components/layouts/Loading";
import Error from "@/components/layouts/Error";
import DeleteConfirmModel from "@/components/shared/DeleteConfirmModel";
import useDeleteCompanyByIDMutation from "@/libs/hooks/useDeleteCompanyByIDMutation";
import useDeleteTownByIDMutation from "@/libs/hooks/useDeleteTownByIDMutation";
import useCreateCompanyMutation from "@/libs/hooks/useCreateCopmanyMutation";
import useCreateTownMutation from "@/libs/hooks/useCreateTownMutation";
import Modal from "react-bootstrap/Modal";
import TownForm from "@/components/general/TownForm";
import CompanyForm from "@/components/general/CompanyForm";
import toast from "react-hot-toast";
import CompanyEditForm from "@/components/general/CompanyEditForm";
import TownEditForm from "@/components/general/TownEditForm";
import useUpdateStaffMutation from "@/libs/hooks/useUpdateStaffMutation";
import useUpdateTownMutation from "@/libs/hooks/useUpdateTownMutation";
import useUpdateCompanyMutation from "@/libs/hooks/useUpdateCompanyMutation";

export default function GeneralListPage() {
  let router = useRouter();
  const [companyData, setCompanyData] = useState(null);
  const [townData, setTownData] = useState(null);

  const [showTownAddModal, setShowTownAddModal] = useState(false);
  const [showTownDeleteModal, setShowTownDeleteModal] = useState(false);

  const [showTownEditModal, setShowTownEditModal] = useState(false);
  const [showCompanyEditModal, setShowCompanyEditModal] = useState(false);

  const [showCompanyAddModal, setShowCompanyAddModal] = useState(false);
  const [showCompanyDeleteModal, setShowCompanyDeleteModal] = useState(false);

  const [townDeleteID, setTownDeleteID] = useState();
  const [companyDeleteID, setCompanyDeleteID] = useState();

  const [townEditID, setTownEditID] = useState();
  const [companyEditID, setCompanyEditID] = useState();

  const GetAllTowns = useGetAllTowns();
  const GetAllCompanies = useGetAllCompanies();

  const DeleteCompanyByIDMutation = useDeleteCompanyByIDMutation();
  const DeleteTownByIDMutation = useDeleteTownByIDMutation();

  const CreateCompanyMutation = useCreateCompanyMutation();
  const CreateTownMutation = useCreateTownMutation();

  let UpdateTownMutation = useUpdateTownMutation(townEditID);
  let UpdateCompanyMutation = useUpdateCompanyMutation(companyEditID);

  useEffect(() => {
    if (GetAllCompanies.isSuccess) {
      setCompanyData(GetAllCompanies.data);
    }
  }, [GetAllCompanies.data]);

  useEffect(() => {
    if (GetAllTowns.isSuccess) {
      setTownData(GetAllTowns.data);
    }
  }, [GetAllTowns.data]);

  useEffect(() => {
    if (DeleteCompanyByIDMutation.isSuccess) {
      toast.success("Company deleted successfully");
    }
    if (DeleteCompanyByIDMutation.isError) {
      toast.error("Can't delete company right now, please try again later");
    }
  }, [
    DeleteCompanyByIDMutation.isError,
    DeleteTownByIDMutation.isSuccess,
    DeleteCompanyByIDMutation.data,
  ]);

  useEffect(() => {
    if (DeleteTownByIDMutation.isSuccess) {
      toast.success("Town deleted successfully");
    }
    if (DeleteTownByIDMutation.isError) {
      toast.error("Can't delete town right now, please try again later");
    }
  }, [
    DeleteTownByIDMutation.isError,
    DeleteTownByIDMutation.isSuccess,
    DeleteTownByIDMutation.data,
  ]);

  useEffect(() => {
    if (UpdateCompanyMutation.isSuccess) {
      toast.success("Company updated successfully");
    }
    if (UpdateCompanyMutation.isError) {
      toast.error("Can't updated Company right now, please try again later");
    }
  }, [
    UpdateCompanyMutation.isError,
    UpdateCompanyMutation.isSuccess,
    UpdateCompanyMutation.data,
  ]);

  useEffect(() => {
    if (UpdateTownMutation.isSuccess) {
      toast.success("Town updated successfully");
    }
    if (UpdateTownMutation.isError) {
      toast.error("Can't updated town right now, please try again later");
    }
  }, [
    UpdateTownMutation.isError,
    UpdateTownMutation.isSuccess,
    UpdateTownMutation.data,
  ]);

  if (GetAllTowns.isLoading || GetAllCompanies.isLoading) {
    return <Loading />;
  }

  if (GetAllTowns.isError) {
    return <Error message={GetAllTowns.error.message} />;
  }

  if (GetAllCompanies.isError) {
    return <Error message={GetAllCompanies.error.message} />;
  }

  const addTownModalHandler = () => {
    setShowTownAddModal(!showTownAddModal);
  };

  const editTownModalHandler = () => {
    setShowTownEditModal(!showTownEditModal);
  };

  const deleteTownModalHandler = (id) => {
    setTownDeleteID(id);
    setShowTownDeleteModal(!showTownDeleteModal);
  };

  const addCompanyModalHandler = () => {
    setShowCompanyAddModal(!showCompanyAddModal);
  };

  const editCompanyModalHandler = () => {
    setShowCompanyEditModal(!showCompanyEditModal);
  };

  const deleteCompanyModalHandler = (id) => {
    setCompanyDeleteID(id);
    setShowCompanyDeleteModal(!showCompanyDeleteModal);
  };
  const editTownTableModalHandler = (id) => {
    setTownEditID(id);
    setShowTownEditModal(!showTownEditModal);
  };

  const editCompanyTableModalHandler = (id) => {
    setCompanyEditID(id);
    setShowCompanyEditModal(!showCompanyEditModal);
  };

  const onSubmitForTownAddForm = (values) => {
    CreateTownMutation.mutate(values);
    setShowTownAddModal(!showTownAddModal);
  };

  const onSubmitForTownEditForm = (values) => {
    UpdateTownMutation.mutate(values);
    setShowTownEditModal(!showTownEditModal);
  };

  const onSubmitForCompanyAddForm = (values) => {
    CreateCompanyMutation.mutate(values);
    setShowCompanyAddModal(!showCompanyAddModal);
  };

  const onSubmitForCompanyEditForm = (values) => {
    UpdateCompanyMutation.mutate(values);
    setShowCompanyEditModal(!showCompanyEditModal);
  };

  return (
    <main>
      <div className={"mb-5"}>
        <div className={"d-flex justify-content-between my-3"}>
          <h3>Company Management</h3>
          <button
            className={"btn btn-primary"}
            onClick={addCompanyModalHandler}>
            Add New Company <IoMdAdd />
          </button>
        </div>
        {companyData && (
          <CompanyTable
            editModalHandler={editCompanyTableModalHandler}
            townList={companyData}
            deleteModalHandler={deleteCompanyModalHandler}
          />
        )}
      </div>

      <div className={"mb-5"}>
        <div className={"d-flex justify-content-between my-3"}>
          <h3>Town Management</h3>
          <button className={"btn btn-primary"} onClick={addTownModalHandler}>
            Add New Town <IoMdAdd />
          </button>
        </div>
        {townData && (
          <TownTable
            editModalHandler={editTownTableModalHandler}
            townList={townData}
            deleteModalHandler={deleteTownModalHandler}
          />
        )}
      </div>

      <Modal show={showCompanyAddModal} onHide={addCompanyModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Bus Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CompanyForm
            onSubmit={onSubmitForCompanyAddForm}
            modelHandler={addCompanyModalHandler}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showCompanyEditModal} onHide={editCompanyModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Bus Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CompanyEditForm
            id={companyEditID}
            onSubmit={onSubmitForCompanyEditForm}
            modelHandler={editCompanyModalHandler}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showTownAddModal} onHide={addTownModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Town</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TownForm
            onSubmit={onSubmitForTownAddForm}
            modelHandler={addTownModalHandler}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showTownEditModal} onHide={editTownModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Town</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TownEditForm
            id={townEditID}
            onSubmit={onSubmitForTownEditForm}
            modelHandler={editTownModalHandler}
          />
        </Modal.Body>
      </Modal>

      <DeleteConfirmModel
        message={`Do you want to delete company?`}
        modelHandler={() => {
          setShowCompanyDeleteModal(!showCompanyDeleteModal);
        }}
        submitHandler={() => {
          console.log("Delete id -", companyDeleteID);
          DeleteCompanyByIDMutation.mutate(companyDeleteID);
          setShowCompanyDeleteModal(!showCompanyDeleteModal);
        }}
        showDeleteModel={showCompanyDeleteModal}
      />

      <DeleteConfirmModel
        message={`Do you want to delete town?`}
        modelHandler={() => {
          setShowTownDeleteModal(!showTownDeleteModal);
        }}
        submitHandler={() => {
          DeleteTownByIDMutation.mutate(townDeleteID);
          setShowTownDeleteModal(!showTownDeleteModal);
        }}
        showDeleteModel={showTownDeleteModal}
      />
    </main>
  );
}
