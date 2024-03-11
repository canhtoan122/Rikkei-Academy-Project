import React, { useEffect } from 'react'

export default function DeleteUser() {
    // useEffect(()=>{
    //     fetch("http://localhost:8000/users/1", {
    //         method:"DELETE"
    //     })
    // },[])
  return (
    <div>
        ************** <br />
        DeleteUser
        {/* Khi xóa user phải biết xóa user nào
        bằng cách lấy id của user cần xóa */}
    </div>
  )
}
