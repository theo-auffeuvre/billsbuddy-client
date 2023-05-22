import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function CustomerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEfzefvzev");
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      const company = localStorage.getItem("company");       
      fetch(`http://localhost:3000/companies/${company}/customers`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Une erreur s'est produite");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    }
  }, [navigate]);


  return (
    <div>
      <h1>Mes clients</h1>
    </div>
  );
}