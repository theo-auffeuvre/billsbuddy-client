import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import "./index.css";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customers" element={<CustomerPage />} />
      </Routes>
    </Router>
  );
}

