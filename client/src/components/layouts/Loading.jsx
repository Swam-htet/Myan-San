import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className={"container-fluid min-vh-100"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        Loading
        <Spinner className={"ms-4"} animation="border" variant="primary" />
      </div>
    </div>
  );
}
