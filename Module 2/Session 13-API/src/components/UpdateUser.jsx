import React, { useEffect } from 'react'

export default function UpdateUser() {
    useEffect(()=>{
        let newUser={
            name:"Minh Vũ"
        }
        fetch("http://localhost:8000/users/3", {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
    },[])
  return (
    <div>
        ****************** <br />
        UpdateUser
        {/* Cập nhật user quan trọng nhất phải biết được id của user cần cập nhật
        -Để cập nhật có 2 method cập nhật
        1. PUT: cập nhật hoàn toàn (tức là cập nhật hết các trường)
        2. PATCH: Không cập nhật hết, chỉ cập nhật những trường cần cập nhật
         */}
    </div>
  )
}
