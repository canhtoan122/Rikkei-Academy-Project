
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThongTinJob from './components/ThongTinJob';
import DanhSachJob from './components/DanhSachJob';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThongTinJob />} />
        <Route path="/DanhSachJob" element={<DanhSachJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
