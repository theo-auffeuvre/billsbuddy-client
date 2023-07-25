import React, { useState } from "react";
import styles from "./CustomerSearchBar.module.css";

export default function CustomerSearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.updateList(event.target.value);
  };

  return (
    <input onChange={handleChange} type="text" placeholder="Rechercher dans mes clients..." value={searchTerm} className={styles.searchbar} />
  );
}
