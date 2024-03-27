import axios from 'axios'
import React, { useEffect } from 'react'

export default function DeleteUser() {
    /* xóa user
        phải cần biết cần xóa user có id nào
     */
    useEffect(()=>{
        let userId = 1;
        axios.delete(`http://localhost:8000/users/${userId}`);
    },[])
  return (
    <div>DeleteUser</div>
  )
}
