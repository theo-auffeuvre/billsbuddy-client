import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Customers from "./components/Customer/Customers";
import "./index.css";
import NavBar from './components/NavBar';
import Customer from './components/Customer/Customer';
import styles from "./components/NavBar.module.css";

export default function App() {

  return (
    <Router>
      <div className={styles.root}>
      <NavBar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<Customers />} >
          <Route path="/customers/:customerId" element={<Customer />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </div>
    </Router>
  );
}
