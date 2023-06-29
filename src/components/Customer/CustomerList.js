import React from 'react';
import { useNavigate, Outlet, useSearchParams } from 'react-router-dom';

// import CustomerCard from './CustomerCard';

export default function CustomerList(props) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()


  const handleRowClick = (id) => {
    navigate({
      pathname: `/customers/${id}`,
      search: searchParams.toString(),
    });
  }

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Siret</th>
          <th>City</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      {props.customers.map((customer) => (
        <tr key={customer.id} onClick={() => handleRowClick(customer.id)}>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.phone}</td>
          <td>{customer.siret}</td>
          <td>{customer.city}</td>
          <td>{customer.country}</td>
        </tr>
      ))}
      </tbody>
    </table>
    <Outlet />
    </>
  )
}
