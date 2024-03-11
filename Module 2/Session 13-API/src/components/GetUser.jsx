import React, { useEffect, useState } from 'react'

export default function GetUser() {
    /*
    Thông thường các tác vụ call API thì nên call ở trong useEffect
     */
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        // bắt đầu đi lấy data
        fetch("http://localhost:8000/users")
        .then(response=>response.json())
        .then(data=>{
            setUsers(data);
        })
    },[])
  return (
    <div>
        GetUser
        <ul>
        {
            users.map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })
        }
        </ul>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
