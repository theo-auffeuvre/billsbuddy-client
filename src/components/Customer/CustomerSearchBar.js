import React, { useState } from "react";

export default function CustomerSearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.updateList(event.target.value);
  };

  return (
    <input onChange={handleChange} type="text" placeholder="Rechercher un client" value={searchTerm} />
  );
}
