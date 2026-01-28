import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="mb-4 p-2 border rounded">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <p>{recipe.description}</p>

          <Link
            to={`/recipes/${recipe.id}`}
            className="text-blue-500 underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

