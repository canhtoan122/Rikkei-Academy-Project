import React, { useState } from 'react'
/*
    rfc react functional component
    rcc react class component
 */

export default function UseState() {
    const [count, setCount] = useState(1);
    const [title, setTitle] = useState("hoa");
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState([]);
    /*
        useState sẽ trả về cho mình 1 mảng có 2 phần tử
        phần tử 1: giá trị khởi tạo.
        phần từ thứ 2 là 1 hàm sử lí

        Khi maf setCount(): thì component tự động re-render (tức là render lại)
        cho nên về phía UI(giao diện) tự động cập nhật giá trị
     */
    // nắm kĩ destructoring
    let arr = [1, "hoa"];
    let [a, b] = arr;
    const increase = () => {
        console.log("111");
        setCount(count+1);
        setTitle("hong");
    }
    const handleChange = (event) =>{
        let inputValue = event.target.value;
        setJob(inputValue);
    }
    const addJob = () =>{
        setJobs([...jobs, job]);
        setJob("");
    }
    console.log(jobs);
    return (
        <>
            <div>UseState</div>
            <p>{count}</p>
            <p>{title}</p>
            <button onClick={increase}>click</button>
            <input type="text" onChange={handleChange} value={job}/>
            <button onClick={addJob}>add</button>

            {/* tạo ô input nhập công việc nhấn nút lưu sẽ hiển thị ở dưới giao diện
            1. lấy giá trị ô input
            2. mình lưu các danh sách công việc ở đâu [];
            */}
            <ul>
                {jobs.map((item, index)=>{
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </>
    )
}
