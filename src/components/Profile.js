import React from 'react'
import{ useState } from 'react';

const Profile = (props) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    return (
        <div style={{ border: "2px solid black" , padding:"10px", margin:"10px"}}>
        <h1>Function Based Component</h1>
        <h3>Name: {props.name}</h3>
        <h3>Email: bvk@gmail.com</h3>
        <h3>Address: {props.address}</h3>
        <h3>Count: {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <h3>Count2: {count2}</h3>
        </div>
  )
}

export default Profile;