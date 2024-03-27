import axios from 'axios'
import React, { useEffect } from 'react'

export default function CreateUser() {
    useEffect(()=>{
        let newUser={
            name:"Vân Anh"
        }
        axios.post("http://localhost:8000/users", newUser);
    },[])
  return (
    <div>
        CreateUser
    </div>
  )
}
