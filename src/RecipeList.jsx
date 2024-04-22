// RecipeList.js
import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes, onViewDetails }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default RecipeList;
