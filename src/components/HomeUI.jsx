import "./HomeUI.css";
import RecipeList from "./RecipeList";

function HomeUI() {
  return (
    <div>
      <h1 className="Home-title">Nefis Yemek Tarifleri</h1>
      <RecipeList />
    </div>
  );
}

export default HomeUI;
