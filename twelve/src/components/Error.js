import {useRouteError} from "react-router-dom"

const Error = () => {
    const err = useRouteError() //for loading the errors using useRouterError hook for catching routing errors 
    console.log(err)   
    return (
        <div>
            <h1>Oops, Something went wrong</h1>
            <h2>{
                err.status + " " + err.statusText   //using this to display the error information which we will get from the useRouteError hook
                }</h2>
        </div>
    )
}

export default Error