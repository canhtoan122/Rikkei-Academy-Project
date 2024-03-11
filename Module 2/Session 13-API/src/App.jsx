import React from 'react'
import GetUser from './components/GetUser'
import CreateUser from './components/CreateUser'
import DeleteUser from './components/DeleteUser'
import UpdateUser from './components/UpdateUser'
import BaiTap from './components/BaiTap'

export default function App() {
  return (
    <div>
      App
      {/*
        Khi lưu dữ liệu trên json-server thì phải thực hiện được 
        CRUD (thêm mới thông tin, lấy thông tin, update thông tin, xóa dữ liệu)
        để làm việc với json-server có 2 cách 
        1. Dùng phương thức fetch (có sẵn trong javascript)
        2. Dùng thư viện axios để tương tác CRUD 
       */}
       {/* <GetUser></GetUser>
       <CreateUser></CreateUser>
       <DeleteUser></DeleteUser>
       <UpdateUser></UpdateUser> */}
       <BaiTap></BaiTap>
    </div>
  )
}
