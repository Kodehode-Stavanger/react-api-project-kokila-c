import React from "react";
import SearchBar from "./SearchBar";

const Home = ({ onSearch }) => {
  return (
    <div>
      <h1>Welcome to Meal Planner</h1>
      <p>Plan your meals by searching for recipes based on ingredients!</p>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Home;
