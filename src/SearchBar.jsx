// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState("");

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ingredients}
        onChange={handleChange}
        placeholder="Enter ingredients (comma separated)"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
