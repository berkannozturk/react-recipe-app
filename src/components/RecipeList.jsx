import { recipesData } from "../recipes-api.js";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList() {
  return (
    <div className="recipes-card-wrapper">
      {recipesData.map((recipeItem) => {
        return (
          <RecipeCard
            key={recipeItem._id}
            recipeTitle={recipeItem.title}
            recipeImg={recipeItem.img}
            recipeShortExplain={recipeItem.shortExplain}
          />
        );
      })}
    </div>
  );
}

export default RecipeList;
