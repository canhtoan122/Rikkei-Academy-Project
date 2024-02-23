import React from 'react'
import UseRef from './components/UseRef'
import UseReducer from './components/UseReducer'
import UseCallback from './components/UseCallback'
import UseMemo from './components/UseMemo'
import { useState } from 'react'
import { useCallback } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick =()=>{
    setCount(count+1);
  }
  const useCallback1 =useCallback(()=>{
    console.log("11111");
  },[count]);
  return (
    <>
    {/*
      React_hook
      -Bản chất là những cái hàm hay gọi là function
      -khi dùng hàm phải để ý đầu vào là gì,đầu ra là gì
      1.useState
      -quản lý state( dữ liệu)
      2.useEffect
      -tương tự componentDidMount ( hàm  này sẽ được gọi component được render  lần đầu)
      -có 3 cách dùng
      cách  1 : useEffect=()=>{
      }
      cách 2: useEffect(()=>{
        ),[]
      }
      cách 3:cách 2: useEffect(()=>{
        ),
      }

      3.useContext
      -giúp truyền dữ liệu từ các cây component có liên kết cha con

      4.useRef
      let ref= useRef(0)
      -kết quả trả về   là 1 cái object trong này có thuộc tính current ==>{current:""}
      -tạo 1 biến đếm khi component được re-render thì kết quả của useRef sẽ lấy kết quả sau
      -tự động focus vào ô input mình muốn ( ô input có thuộc tính mặc định là ref).

      5.memo
      -HOC : kiểm tra component có props nào thay đổi hay không thì mới re-render component
      6.useCallback
      -giải quyết vấn đề của memo khi truyền props  kiểu refercen type
      7.useMemo
      -ghi nhớ ( giúp cho component khi re-render) mà có tính toán phức tạp không phải tính toán lại
      8.useReducer
      -quản lý những state phức tạp.
      -giúp cho việc học redux bài sau.
      -------------------------------------------
      ES6:
      phiên bản 2015 cung cấp những tính năng
      1.let,const
      2. template string literal ` `
      3, arrow function
      4.class
      5.destructoring
      6.default param
      7.enhend 
      8.promise
      9.hàm :find,findIndex,startWidth,startEnd
      10.spread 
     */}
      App
      <br />
      <UseRef></UseRef>
      <br />
      ----------------
      <br />
      <UseReducer></UseReducer>
      <br />
      <UseCallback memo={useCallback1}></UseCallback>
      <br />
      <button onClick={handleClick}>click</button>
      ----------------
      <br />
      <UseMemo></UseMemo>
    </>
  )
}
