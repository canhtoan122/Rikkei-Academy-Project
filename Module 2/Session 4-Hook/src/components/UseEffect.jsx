import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("đang gọi vào hàm useEffect");
        // thường dùng để callAPI
        // có các tác vụ gọi API sử lí thì thường dùng trong useEffect
    },[count])
    // giống với component didMount ko
    // có 3 cách dùng
    /*
        Cách 1: cách thầy vừa demo
        Cách 2: thêm []
        Cách 2: trong [] chứa dependency
        - Khi dependency thì useEffect mới được gọi
     */
    return (
        <>
            <div>UseEffect</div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>click</button>

        </>
    )
}
