import React, { useState } from 'react';
import Table from './component/Table';
import AddUser from './component/AddUser';
import UpdateUser from './component/UpdateUser'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (

    <div className="p-4">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
