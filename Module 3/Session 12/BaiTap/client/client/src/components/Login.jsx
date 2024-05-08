import React, { useState } from 'react'
import axios from "axios";

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleEmailInput = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
    }
    const handlePasswordInput = (e) => {
        setUser({
            ...user,
            password: e.target.value
        });
    }
    const login = async() =>{
        let users=  await axios.post("http://localhost:3000/api/v1/login");
        console.log(11111,users);
    }
    return (
        <div>
            <h1>Login</h1><br />
            <input type="text" placeholder='Email' onChange={handleEmailInput} /><br />
            <input type="text" placeholder='Password' onChange={handlePasswordInput} /><br />
            <p>Forget Password?</p>
            <button onClick={login}>Login</button><br />
            <p>Don't have an account? <a href="/register">Sign up</a></p>
            <p>-OR-</p>
            <button>Login with Google</button><br />
            <button>Login with Facebook</button>
        </div>
    )
}
