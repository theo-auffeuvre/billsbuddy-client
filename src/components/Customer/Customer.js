import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Customer() {
  const {customerId} = useParams()
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      const company = localStorage.getItem("company");
      try {
        const response = await fetch(`http://localhost:3000/companies/${company}/customers/${customerId}`)
        if (!response.ok) {
          throw new Error("Une erreur s'est produite");
        }
        const data = await response.json();
        setCustomer(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomer();
  }, [customerId]);

  if (loading) {
    return <p>Chargement...</p>;
  }


  return (
    <>
      <h2>{customer.name}</h2>
      <p>{customer.email}</p>
      <p>{customer.phone}</p>
      <p>{customer.siret}</p>
      <p>{customer.address}</p>
      <p>{customer.postalCode}</p>
      <p>{customer.city}</p>
      <p>{customer.country}</p>
    </>
  );
}
