import { recipesData } from "../recipes-api.js";
import RecipeDetailsCard from "./RecipeDetailsCard.jsx";
import "./Recipe.css";

function Recipe() {
  return (
    <div className="recipeDetail-card-wrapper">
      {recipesData.map((rItem) => {
        return (
          <RecipeDetailsCard
            key={rItem._id}
            recipeFullExplain={rItem.fullExplain}
          >
            {rItem.title} tarifi
          </RecipeDetailsCard>
        );
      })}
    </div>
  );
}

export default Recipe;
