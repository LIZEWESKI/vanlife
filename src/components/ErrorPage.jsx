import { Link , useRouteError } from "react-router-dom";
import "./ErrorPage.css"; 

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="error-page">
      <h1>Error: {error.message}</h1>
      <pre>{error.statusText} - {error.status}</pre>
      <Link to="/" className="retry-button">Try Again</Link>
    </div>
  );
};

export default ErrorPage;
