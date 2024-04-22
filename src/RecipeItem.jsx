// RecipeItem.js
import React from "react";

const RecipeItem = ({ recipe, onViewDetails }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Calories: {recipe.calories}</p>
      <ul>
        {recipe.usedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
      <button onClick={() => onViewDetails(recipe)}>View Details</button>
    </div>
  );
};

export default RecipeItem;
