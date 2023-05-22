import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import CompanyService from "../services/CompanyService";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } 
  }, [navigate]);


  return (
    <><div>
      <h1>Accueil</h1>
      <div>{ data }</div>
    </div><NavBar /></>
  );

}
