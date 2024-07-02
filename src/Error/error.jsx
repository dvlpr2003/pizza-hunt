import { useRouteError } from "react-router-dom";

function Error(){
    const error = useRouteError()
    console.log(error.data)
    return(
        <>

        <h1>Something went wrong</h1>
        </>
    )
}

export default Error;