import React, { useState } from 'react';
import './ThongTinJob.css';
import { Link } from 'react-router-dom';
import DanhSachJob from './DanhSachJob'

export default function ThongTinJob() {
  const [job, setjob] = useState({id:"", nameJob:""});
  const [jobs, setjobs] = useState([]);
  const handleChange = (e) => {
    setjob({ ...job, nameJob: e.target.value });
  };
  const saveUser = (e)=>{
    e.preventDefault();
    setjobs([...jobs, job]);
  };
  console.log(jobs);
  return (
    <div className="ThongTinJob">
      <form className="form" onSubmit={saveUser}>
        <div className="title">
          <h1>Thông tin công việc</h1>
        </div> 
        <div className="container">
          <div className="job">
            <label htmlFor="job">Nhập công việc: </label>
            <input type="text" id="job" placeholder="Vui lòng nhập công việc" value={job.nameJob} onChange={handleChange}/>
          </div>    
          <br />
          <button className='btn'>Lưu lại</button>
          <br />
          <Link to="/DanhSachJob" className='btn'>Danh sách công việc</Link>
        </div>
      </form>
      {/* <createContex.Provider value={name}>
        <DanhSachJob></DanhSachJob>
      </createContex.Provider> */}
    </div>
  );
}