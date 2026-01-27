import useRecipeStore from '../store/useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Recipes</h2>
      {recipes.length === 0 && <p>No recipes added yet.</p>}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-2 p-2 border rounded-md bg-gray-100">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
