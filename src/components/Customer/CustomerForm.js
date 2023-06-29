import React, { useRef } from "react";

export default function CustomerForm(props) {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const siretRef = useRef('');
  const addressRef = useRef('');
  const zipcodeRef = useRef('');
  const cityRef = useRef('');
  const countryRef = useRef('');

  const addCustomer = async (event) => {
    event.preventDefault();

    const customer = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      siret: siretRef.current.value,
      address: addressRef.current.value,
      zipcode: zipcodeRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
    };

    props.onAddCustomer(customer)
  };

  return (
    <form onSubmit={addCustomer}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" ref={nameRef} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={emailRef} required />
          <label htmlFor="phone">Téléphone</label>
          <input type="tel" id="phone" name="phone" ref={phoneRef} required />
          <label htmlFor="siret">Siret</label>
          <input type="text" id="siret" name="siret" ref={siretRef} required />
          <label htmlFor="address">Adresse</label>
          <input type="text" id="address" name="address" ref={addressRef} required />
          <label htmlFor="zipcode">Code postal</label>
          <input type="text" id="zipcode" name="zipcode" ref={zipcodeRef} required />
          <label htmlFor="city">Ville</label>
          <input type="text" id="city" name="city" ref={cityRef} required />
          <label htmlFor="country">Pays</label>
          <input type="text" id="country" name="country" ref={countryRef} required />
          <button type="submit">Ajouter</button>
          <button type="button" onClick={props.closeForm}>Fermer</button>
        </form>
  );
}
