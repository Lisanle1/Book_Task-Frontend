import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Home from "../Components/Home/Home";

function RouterComponent () {
    const isAuthenticated = localStorage.getItem('token'); 
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* Use ProtectedRoute for authenticated routes */}
      <Route
        path="/home"
        element={isAuthenticated ? <Home /> : <Navigate to='/' />}
      />
    </Routes>
  );
}

export default RouterComponent;
