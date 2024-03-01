import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      {/*
        Redux đây là 1 thư viện (bên khác không phải của react) 
        giúp cho việc quản lý state tập trung
        - Trong store chứa reducer(bản chất là hàm nó sẽ đi tính toán cập nhật lại dispatch)
        -dùng với reactjs cũng được mà dùng js cũng đưỢc
        -khi truyền dữ liệu trong reactjs thì bắt buộc phải truyền theo kiểu cha con
        ví dụ ông muốn truyền dữ liệu cho cháu thì phải qua ông xuống bố sau bố xuống cháu
        -cần redux để giúp cho việc quản lý state tập trung
        -cách cài đặt 
        -npm i redux react-redux 
       */}
      App
      <Header></Header>
    </div>
  )
}
