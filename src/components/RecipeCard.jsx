import PropTypes from "prop-types";
import "./RecipeCard.css";
import Recipe from "./Recipe";
import { useState } from "react";

function RecipeCard(props) {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div className="recipe-card">
      <img src={props.recipeImg} alt="image" className="recipeCard-img" />
      <h1 className="recipeCard-title">{props.recipeTitle}</h1>
      <p className="recipeCard-explanation">{props.recipeShortExplain}</p>
      <p>
        <button onClick={handleClick} className="RecipeCard-Button">
          Detaylar
        </button>
        {showComponent && (
          <div className="rca">
            <Recipe />
          </div>
        )}
      </p>
    </div>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeImg: PropTypes.string,
  recipeTitle: PropTypes.string,
  recipeShortExplain: PropTypes.string,
};
