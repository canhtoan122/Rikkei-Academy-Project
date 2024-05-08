import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  })
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleUsernameInput = (e) => {
    setUser({
      ...user,
      username: e.target.value
    });
  }
  const handleEmailInput = (e) => {
    setUser({
      ...user,
      email: e.target.value
    });
  }
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
  }
  const navigate = useNavigate();
  const signUp = async () => {
    if(password == confirmPassword){
      setUser({
        ...user,
        password: password
      });
      setUser({
        ...user,
        role: 'user'
      });
      if(user){
        let users = await axios.post("http://localhost:3000/api/v1/register", user);
        if (users.status === 200) {
          navigate("/");
        } else {
          document.getElementById("result").innerHTML = users.data.data;
        }
      }else{
        console.log(user);
      }
    }else{
      document.getElementById("result").innerHTML = "Wrong Password";
    }
  }
  return (
    <div>
      <h1>Sign Up</h1><br />
      <input type="text" placeholder='Username' onChange={handleUsernameInput} /><br />
      <input type="text" placeholder='Email' onChange={handleEmailInput} /><br />
      <input type="text" placeholder='Create Password' onChange={handlePasswordInput} /><br />
      <input type="text" placeholder='Confirm Password' onChange={handleConfirmPasswordInput} /><br />
      <button onClick={signUp}>Signup</button><br />
      <p id='result'></p>
      <p>Already have an account? <a href="/">Login</a></p>
      <p>-OR-</p>
      <button>Login with Google</button><br />
      <button>Login with Facebook</button>
    </div>
  )
}
