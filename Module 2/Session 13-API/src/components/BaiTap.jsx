import React, { useEffect, useState } from 'react'
import './BaiTap.css'

export default function BaiTap() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        // bắt đầu đi lấy data
        fetch("http://localhost:8000/users")
        .then(response=>response.json())
        .then(data=>{
            setUsers(data);
        })
    },[])
    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user, [name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let check = users.findIndex((item, index, array) =>{
            return item.email == user.email;
        });
        if(check == -1){
            fetch("http://localhost:8000/users", {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }
            )
            .then(response => response.json())
            .then(data =>{
                console.log(data);
            })
        }
        else{
            document.getElementById('error').innerText = `Email has existed`;
        }
    }
  return (
    <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={FormData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={FormData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={FormData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <button type="submit">Sign Up</button>
            </div>
            <div id="error"></div>
        </form>
    </div>
  )
}
