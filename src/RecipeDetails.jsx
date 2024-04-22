// RecipeDetails.js
import React from "react";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Calories: {recipe.calories}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RecipeDetails;
