import React, { Component } from 'react'
import Parent from '../../components/Parent'
/*
  HTML: hyper text markup language
  div: division
  State: quản lí Trạng thái dữ liệu ứng dụng
  để viết code js bên trong html thì bọc dấu {}
  Khi state thay đổi thì component re-render (render lại);
  Khi nào state thay đổi (khi đi setState)
  Prop: property thuộc tính 
  Dùng để truyền dữ liệu từ component cha xuống dưới component con.
  Muốn truyền dữ liệu từ con lên cha phải truyền hướng truyền sự kiện
  event: hành động tương tác
*/
export default class App extends Component {
  constructor(){
    super()
    this.state={
      count:0,
    }
  }
  increaseCount=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <>
        <div className='hello'>Xin chào</div>
        <p>count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase Count</button>
        <Parent count = {this.state.count}></Parent>
      </>
    )
  }
}
