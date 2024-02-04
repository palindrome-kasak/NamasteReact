import {useRouteError} from 'react-router-dom'
const ErrorPage =()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            {console.log(err)}
            <h2>{err.status} {err.statusText}</h2>
        </div>
    )
}
export default ErrorPage;