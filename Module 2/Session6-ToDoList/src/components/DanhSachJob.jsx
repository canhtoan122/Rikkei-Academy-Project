import React from 'react'
import './DanhSachJob.css'

export default function DanhSachJob() {
  return (
    <>
      <form id="studentList">
        <div className="title"><h1>Danh sách học viên</h1></div>
        <div className="search">
            <h1>Tìm kiếm tên học viên</h1>
            <input type="text" id="search" />
            <button>Tìm kiếm</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Công việc</th>
                    <th><button>Sắp xếp (alpha B)</button></th>
                </tr>
            </thead>
            <tbody id="tbody">
                
            </tbody>
        </table>
      </form>
    </>
  )
}
