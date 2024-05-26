import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    console.log(error.message);
    return (
        <div>
            <h1>Oops!</h1>
            <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;