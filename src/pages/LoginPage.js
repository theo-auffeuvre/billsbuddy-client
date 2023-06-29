import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Email ou mot de passe incorrect");
      }
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("company", data.first_company)
      navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  // Vérifiez si un jeton d'authentification est présent dans le stockage local. Si oui, redirigez directement vers la page de destination souhaitée.
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}
