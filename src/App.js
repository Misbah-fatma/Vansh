import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from "./DashBoard/Dashboard"
import FileUpload from "./FileUpload/FileUpload"
import Monaco from "./Monaco.js"
import "./App.css"

const App = () => {
  return (
    <>
    <Router>

        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/fileUpload" element={<FileUpload/>} />
          <Route exact path="/monaco" element={<Monaco/>} />
          <Route exact path="/" element={<Dashboard/>} />
        </Routes>

    </Router>
    </>
  );
};

export default App;
