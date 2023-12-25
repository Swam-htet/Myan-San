import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

export default function DeleteConfirmModel({message, showDeleteModel, modelHandler, submitHandler}) {
    return <>
        <Modal show={showDeleteModel}
               onHide={modelHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modelHandler}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={submitHandler}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}