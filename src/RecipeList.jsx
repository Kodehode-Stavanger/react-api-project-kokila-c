// RecipeList.js
import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h1>Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.uri}>
            <h2>{recipe.label}</h2>
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

export default RecipeList;
