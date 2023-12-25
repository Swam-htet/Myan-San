import {Spinner} from "react-bootstrap";

export default function Loading() {
    return <div className={'container-fluid min-vh-100'}>
        Loading
        <Spinner animation="border" variant="primary" />

    </div>
}