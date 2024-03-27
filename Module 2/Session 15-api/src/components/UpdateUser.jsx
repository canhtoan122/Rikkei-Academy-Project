import axios from 'axios'
import React, { useEffect } from 'react'

export default function UpdateUser() {
    /* đi update user thì phải biết update user nào
        dựa vào id của user để update
        1. put: cập nhật các trường muốn cập nhật không giữ cái cũ
        2. patch: cập nhật các trường muốn cập nhật giữ cái cũ
     */
    useEffect(()=>{
        let newUser = {
            name: "lan anh"
        }
        axios.patch(`http://localhost:8000/users/7`, newUser);
    },[])
  return (
    <div>UpdateUser</div>
  )
}
