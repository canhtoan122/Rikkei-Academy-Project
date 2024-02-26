import React from 'react'
// import './header.css'
import './header.scss'

export default function Header() {
    // let header = {
    //     backgroundColor:"red",
    //     color:"white",
    // }
  return (
    <>
        {/* <div className='header'></div> */}
        {/* <div style={header}>
            Header
        </div> */}
        <div className="container">
          <form className='main'>
            <div className="logo">
              logo
              <h3>Đăng nhập tài khoản</h3>
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <br/>
              <input type="text" />
              <br/>
              <label htmlFor="password">Mật Khẩu</label>
              <br/>
              <input type="text" />
              <br/>
              <label htmlFor="forgotPassword" className='forgotPassword'>Quên mật khẩu</label>
              <br/>
              <button>Đăng nhập</button><br/>
              <div className='text'>
                Hoặc
              </div>
              <br/>
              <button><i className="fa-brands fa-google"></i> Đăng nhập với google</button>
              <button><i className="fa-brands fa-facebook-f"></i> Đăng nhập với facebook</button><br/>
              Bạn đã có tài khoản? Đăng kí
            </div>
          </form>
        </div>
    </>
  )
}
