import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import CompanyService from "../services/CompanyService";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);


  return (
    <>
      <h1>Accueil</h1>
    </>
  );

}
