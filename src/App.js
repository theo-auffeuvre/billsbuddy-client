import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import "./index.css";
import NavBar from './components/NavBar';
import Customer from './components/Customer/Customer';

export default function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomerPage />} >
          <Route path="/customers/:customerId" element={<Customer />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
