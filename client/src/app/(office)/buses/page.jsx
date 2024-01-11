'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BusTable from '@/components/bus/BusTable';
import Modal from 'react-bootstrap/Modal';
import { IoMdAdd } from 'react-icons/io';
import DeleteConfirmModel from '@/components/shared/DeleteConfirmModel';
import Loading from '@/components/layouts/Loading';
import Error from '@/components/layouts/Error';
import useGetAllBuses from '@/libs/hooks/useGetAllBuses';
import useDeleteBusByIDMutation from '@/libs/hooks/useDeleteBusByIDMutation';
import BusForm from '@/components/bus/BusForm';
import useCreateBusMutation from '@/libs/hooks/useCreateBusMutation';
import useGetAllCompanies from '@/libs/hooks/useGetAllCompany';
import toast from 'react-hot-toast';
import useUpdateBusMutation from '@/libs/hooks/useUpdateBusMutation';
import useGetBusByID from '@/libs/hooks/useGetBusByID';
import BusEditForm from '@/components/bus/BusEditForm';

export default function BusListPage() {
	const router = useRouter();
	const [data, setData] = useState(null);
	const [companies, setCompanies] = useState([]);
	const [showAddModal, setShowAddModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const [deleteID, setDeleteID] = useState();
	const [editID, setEditID] = useState();


	// mutation and query
	let GetAllBuses = useGetAllBuses();
	let DeleteBusByIDMutation = useDeleteBusByIDMutation();
	let CreateBusMutation = useCreateBusMutation();
	let GetAllCompanies = useGetAllCompanies();
	let UpdateBusMutation = useUpdateBusMutation(editID);

	const addModalHandler = () => {
		setShowAddModal(!showAddModal);
	};

	const deleteModalHandler = (id) => {
		setDeleteID(id);
		setShowDeleteModal(!showDeleteModal);
	};

	const submitHandler = (values) => {
		CreateBusMutation.mutate(values);
		setShowAddModal(!showAddModal);
	};

	const submitEditHandler = (values) => {
		console.log('Values - ', values);
		UpdateBusMutation.mutate(values);
		setShowEditModal(!showEditModal);
	};

	const editModalHandler = () => {
		setShowEditModal(!showEditModal);
	};

	const editHandler = (id) => {
		setEditID(id);
		setShowEditModal(!showEditModal);
	};

	useEffect(() => {
		console.log('Data list - ', data);
		console.log(data ? data.filter((bus) => bus.id === editID) : {});
	}, [editID]);

	useEffect(() => {
		if (GetAllBuses.isSuccess) {
			setData(GetAllBuses.data);
		}
	}, [GetAllBuses.data]);

	useEffect(() => {
		if (GetAllCompanies.isSuccess) {
			setCompanies(GetAllCompanies.data);
		}
	}, [GetAllCompanies.data]);

	useEffect(() => {
		if (DeleteBusByIDMutation.isSuccess) {
			toast.success('Bus deleted successfully');
		}
		if (DeleteBusByIDMutation.isError) {
			toast.error("Can't delete bus right now, please try again later");
		}
	}, [
		DeleteBusByIDMutation.data,
		DeleteBusByIDMutation.isError,
		DeleteBusByIDMutation.isSuccess,
	]);

	useEffect(() => {
		if (UpdateBusMutation.isSuccess) {
			toast.success('Updated Bus successfully');
		}
		if (UpdateBusMutation.isError) {
			toast.error("Can't update bus right now, please try again later");
		}
	}, [
		UpdateBusMutation.data,
		UpdateBusMutation.isError,
		UpdateBusMutation.isSuccess,
	]);

	if (GetAllBuses.isLoading || GetAllCompanies.isLoading) {
		return <Loading />;
	}

	if (GetAllBuses.isError) {
		return <Error message={GetAllBuses.error.message} />;
	}
	return (
		<main>
			<div className={'d-flex justify-content-between align-items-center my-3'}>
				<h1>Bus Management</h1>
				<button className={'btn btn-primary'} onClick={addModalHandler}>
					Add New Bus <IoMdAdd />
				</button>
			</div>
			{data && (
				<BusTable
					busList={data}
					editHandler={editHandler}
					deleteModalHandler={deleteModalHandler}
				/>
			)}

			{/*     add new bus modal box     */}
			<Modal
				show={showAddModal}
				onHide={addModalHandler}
				size={'xl'}
				scrollable={true}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New Bus</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<BusForm
						companyList={companies}
						onSubmitHandler={submitHandler}
						modelHandler={addModalHandler}
					/>
				</Modal.Body>
			</Modal>

			{/*     edit bus modal box     */}
			<Modal
				show={showEditModal}
				onHide={editModalHandler}
				size={'xl'}
				scrollable={true}
			>
				<Modal.Header closeButton>
					<Modal.Title>Edit Bus</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<BusEditForm
						id={editID}
						companyList={companies}
						onSubmitHandler={submitEditHandler}
						modelHandler={editModalHandler}
					/>
				</Modal.Body>
			</Modal>

			{/*     delete bus confirm modal box     */}
			<DeleteConfirmModel
				message={`Do you want to delete bus ID -${deleteID}`}
				modelHandler={() => {
					setShowDeleteModal(!showDeleteModal);
				}}
				submitHandler={() => {
					console.log('Delete id -', deleteID);
					DeleteBusByIDMutation.mutate(deleteID);
					setShowDeleteModal(!showDeleteModal);
				}}
				showDeleteModel={showDeleteModal}
			/>
		</main>
	);
}
