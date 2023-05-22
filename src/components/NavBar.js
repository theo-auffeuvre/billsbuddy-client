import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>BILLSBUDDY</h1>
      <Link to="/">Accueil</Link>
      <Link to="/customers/new">Nouveau client</Link>
      <Link to="/customers">Mes clients</Link>
      <Link to="/bills">Mes factures</Link>
      <Link to="/bills/new">Nouvelle facture</Link>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}