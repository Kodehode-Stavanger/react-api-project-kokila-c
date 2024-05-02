import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get("https://api.edamam.com/search", {
        params: {
          q: ingredients,
          app_id: import.meta.env.VITE_EDAMAM_APP_ID,
          app_key: import.meta.env.VITE_EDAMAM_APP_KEY,
        },
      });

      if (response.data.hits) {
        setRecipes(response.data.hits.map((hit) => hit.recipe));
      } else {
        // Handle case when no recipes are found
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Meal Planner</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={handleInputChange}
          placeholder="Enter ingredients (comma separated)"
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.uri}>
            <h2>{recipe.label}</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient.text}</li>
              ))}
            </ul>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
