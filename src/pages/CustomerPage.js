import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomerList from "../components/Customer/CustomerList";
import CustomerSearchBar from "../components/Customer/CustomerSearchBar";
import CustomerForm from "../components/Customer/CustomerForm";

export default function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [customersDisplayed, setCustomersDisplayed] = useState([]);
  const [customerFormDisplayed, setCustomerFormDisplayed] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate();

  const fetchCustomers = useCallback(async () => {
    const company = localStorage.getItem("company");
    try {
      const response = await fetch(`http://localhost:3000/companies/${company}/customers`)
      if (!response.ok) {
        throw new Error("Une erreur s'est produite");
      }


      const data = await response.json();

      const customers = data.map((customer) => ({
        id: customer.id,
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        siret: customer.siret,
        address: customer.address,
        zipcode: customer.zipcode,
        city: customer.city,
        country: customer.country,
      }));

      setCustomers(customers);
      setCustomersDisplayed(customers);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateList = (searchTerm) => {
    const filteredCustomers = customers.filter((customer) => {
      const keys = Object.keys(customer);
      for(let i = 1; i < keys.length; i++) {
        const key = keys[i];
        console.log(customer[key].toLowerCase().includes(searchTerm.toLowerCase()));
        if (customer[key].toLowerCase().includes(searchTerm.toLowerCase())) {
          console.log("iyfg");
          return true;
        }
      }

      return false;
    });
    setCustomersDisplayed(filteredCustomers);
    setSearchParams({search: searchTerm});
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      fetchCustomers();
      searchParams.get('search') && updateList(searchParams.get('search'));
    }
  }, [navigate, fetchCustomers]);



  const handleAddCustomer = async (customer) => {
    const company = localStorage.getItem("company");
    try {
      const response = await fetch(`http://localhost:3000/companies/${company}/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
      if (!response.ok) {
        throw new Error("Une erreur s'est produite");
      }
      const data = await response.json();
      const newCustomer = {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        siret: data.siret,
        address: data.address,
        zipcode: data.zipcode,
        city: data.city,
        country: data.country,
      };

      setCustomers([...customers, newCustomer]);
      setCustomersDisplayed([...customersDisplayed, newCustomer]);
      setCustomerFormDisplayed(false);
    } catch (error) {
      console.error(error);
    }
  };


  const toggleAddCustomerForm = () => {
    setCustomerFormDisplayed((prevCustomerFormDisplayed) => !prevCustomerFormDisplayed);
  };

  return (
    <div>
      <h1>Mes clients</h1>
      <CustomerSearchBar updateList={updateList} />
      {customerFormDisplayed && <CustomerForm onAddCustomer={handleAddCustomer} closeForm={toggleAddCustomerForm } />}
      <button onClick={toggleAddCustomerForm}>Ajouter un client</button>
      <CustomerList customers={customersDisplayed} />
    </div>
  );
}
