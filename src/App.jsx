// App.js
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

const App = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipes = async (ingredients) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      setRecipes(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <h1>Vegetarian Meal Planner</h1>
      <SearchBar onSearch={searchRecipes} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <RecipeList recipes={recipes} onViewDetails={handleViewDetails} />
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default App;
