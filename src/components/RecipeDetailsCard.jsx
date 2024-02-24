import PropTypes from "prop-types";
import "./RecipeDetailsCard.css";

function RecipeDetailsCard(props) {
  return (
    <div className="recipe-details-card">
      <div className="recipe-details-title">
        <h2>{props.children}</h2>
      </div>

      <div className="recipe-details-explanation">
        <p>{props.recipeFullExplain}</p>
      </div>
    </div>
  );
}
export default RecipeDetailsCard;

RecipeDetailsCard.propTypes = {
  children: PropTypes.string,
  recipeFullExplain: PropTypes.string,
};
