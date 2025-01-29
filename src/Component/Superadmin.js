import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import ProtectedRoute from "../Component/PRoute/ProtectedRoute";
import LandingPage from "../Pages/Landingpage";
import Dashboard from "../Pages/Dashboard";

function Superadmin() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route >
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/home" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Superadmin;
