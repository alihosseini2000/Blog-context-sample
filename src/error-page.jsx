import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="container my-5 d-flex justify-content-center align-items-center flex-column">
      <h1 className="fw-bold">Oops!</h1>
      <p className="fs-3">Sorry, an unexpected error has occurred.</p>
      <p className="fs-4">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
