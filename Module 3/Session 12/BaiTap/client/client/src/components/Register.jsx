import React from 'react'

export default function Register() {
  return (
    <div>
        <h1>Sign Up</h1><br />
        <input type="text" placeholder='Email'/><br />
        <input type="text" placeholder='Create Password'/><br />
        <input type="text" placeholder='Confirm Password'/><br />
        <button>Signup</button><br />
        <p>Already have an account? <a href="/">Login</a></p>
        <p>-OR-</p>
        <button>Login with Google</button><br />
        <button>Login with Facebook</button>
    </div>
  )
}
