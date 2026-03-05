import React,{useContext} from 'react'
import UserContext from '../utils/UserContext';
const CompoC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Component C</h1>
      <p>Name: {user.name}</p>
      <p>Email : {user.email}</p>
      <p>City: {user.city}</p>
    </div>
  )
}

export default CompoC
