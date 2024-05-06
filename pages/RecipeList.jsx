// RecipeListPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { ingredients } = useParams();

  useEffect(() => {
    const fetchRecipes = async () => {
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
          setRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
      setLoading(false);
    };

    fetchRecipes();
  }, [ingredients]);

  return (
    <div className="container">
      <h1>Recipes for {ingredients}</h1>
      {loading && <p>Loading...</p>}
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div className="recipe-box" key={recipe.uri}>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
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

export default RecipeListPage;
