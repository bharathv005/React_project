import React from 'react'
import { useRouteError } from "react-router-dom";


const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div>
        <h1>Oops!</h1>
        <h2>Some error occurred</h2>
        <h3>{error.status} - {error.statusText}</h3>
        <p>{error.data}</p>
      </div>
    </div>
  )
}

export default Error;